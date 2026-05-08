import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, describe, expect, it } from 'vitest';
import { criticalImagePreloads, staticHtmlFiles, verifyStaticBuild } from '../scripts/verify-static.mjs';

let tmpDir;

function createDist() {
  tmpDir = join(tmpdir(), `neocities-static-${Date.now()}`);
  mkdirSync(join(tmpDir, 'assets'), { recursive: true });
  mkdirSync(join(tmpDir, 'assets', 'bg'), { recursive: true });
  mkdirSync(join(tmpDir, 'assets', 'icons'), { recursive: true });
  mkdirSync(join(tmpDir, 'js'), { recursive: true });
  writeFileSync(join(tmpDir, 'assets', 'index.css'), 'body{}');
  writeFileSync(join(tmpDir, 'assets', 'bg', 'cool_background.gif'), 'gif');
  for (const icon of ['home.png', 'mari.png', 'guestbook.png', 'about.png', 'amandita.png']) {
    writeFileSync(join(tmpDir, 'assets', 'icons', icon), 'png');
  }
  writeFileSync(join(tmpDir, 'js', 'site.js'), '');

  for (const file of staticHtmlFiles) {
    const preloads = criticalImagePreloads.map((image) => `<link rel="preload" as="image" href="${image}" fetchpriority="high" />`).join('');
    writeFileSync(join(tmpDir, file), `<head>${preloads}</head><body style="background-image: url('./assets/bg/cool_background.gif')"><div id="root"><main>ok</main></div><link rel="stylesheet" href="./assets/index.css"><script src="./js/site.js"></script></body>`);
  }

  return tmpDir;
}

afterEach(() => {
  if (tmpDir) {
    rmSync(tmpDir, { recursive: true, force: true });
    tmpDir = undefined;
  }
});

describe('static build verifier', () => {
  it('passes complete file-safe output', () => {
    expect(verifyStaticBuild(createDist())).toEqual([]);
  });

  it('fails when a route file is missing', () => {
    const dist = createDist();
    rmSync(join(dist, 'mari.html'));

    expect(verifyStaticBuild(dist)).toContain('mari.html missing');
  });

  it('fails on external module scripts', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'index.html'), '<div id="root"><main>ok</main></div><script type="module" src="./assets/index.js"></script>');

    expect(verifyStaticBuild(dist)).toContain('index.html has external module script');
  });

  it('fails on root-local refs that break file URLs', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'index.html'), '<div id="root"><img src="/assets/foo.png"></div>');

    expect(verifyStaticBuild(dist)).toContain('index.html uses root local ref /assets/foo.png');
  });

  it('fails on root-local CSS refs that break file URLs', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'assets', 'index.css'), 'body{background-image:url(/assets/bg/cool_background.gif)}');

    expect(verifyStaticBuild(dist)).toContain('assets/index.css uses root local ref /assets/bg/cool_background.gif');
  });

  it('fails when HTML misses the relative background image', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'index.html'), '<div id="root"><main>ok</main></div>');

    expect(verifyStaticBuild(dist)).toContain('index.html missing relative background image');
  });

  it('fails when HTML misses high-priority background preload', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'index.html'), '<body style="background-image: url(\'./assets/bg/cool_background.gif\')"><div id="root"><main>ok</main></div></body>');

    expect(verifyStaticBuild(dist)).toContain('index.html missing high-priority image preload ./assets/bg/cool_background.gif');
  });

  it('fails when HTML misses navbar icon preloads', () => {
    const dist = createDist();
    const preloads = criticalImagePreloads
      .filter((image) => image !== './assets/icons/home.png')
      .map((image) => `<link rel="preload" as="image" href="${image}" fetchpriority="high" />`)
      .join('');

    writeFileSync(join(dist, 'index.html'), `<head>${preloads}</head><body style="background-image: url('./assets/bg/cool_background.gif')"><div id="root"><main>ok</main></div></body>`);

    expect(verifyStaticBuild(dist)).toContain('index.html missing high-priority image preload ./assets/icons/home.png');
  });

  it('fails when React image preloads remain inside root', () => {
    const dist = createDist();
    writeFileSync(join(dist, 'index.html'), '<head><link rel="preload" as="image" href="./assets/bg/cool_background.gif" fetchpriority="high" /></head><body style="background-image: url(\'./assets/bg/cool_background.gif\')"><div id="root"><link rel="preload" as="image" href="./assets/foo.gif"/><main>ok</main></div></body>');

    expect(verifyStaticBuild(dist)).toContain('index.html has image preload inside root');
  });
});
