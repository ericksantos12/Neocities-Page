import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, describe, expect, it } from 'vitest';
import { staticHtmlFiles, verifyStaticBuild } from '../scripts/verify-static.mjs';

let tmpDir;

function createDist() {
  tmpDir = join(tmpdir(), `neocities-static-${Date.now()}`);
  mkdirSync(join(tmpDir, 'assets'), { recursive: true });
  mkdirSync(join(tmpDir, 'js'), { recursive: true });
  writeFileSync(join(tmpDir, 'assets', 'index.css'), 'body{}');
  writeFileSync(join(tmpDir, 'js', 'site.js'), '');

  for (const file of staticHtmlFiles) {
    writeFileSync(join(tmpDir, file), '<div id="root"><main>ok</main></div><link rel="stylesheet" href="./assets/index.css"><script src="./js/site.js"></script>');
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
});
