import { describe, expect, it } from 'vitest';
import { getAge } from './Age.jsx';

describe('getAge', () => {
  it('calculates age after birthday', () => {
    expect(getAge('2003-04-08', new Date('2026-05-08'))).toBe(23);
  });

  it('calculates age before birthday', () => {
    expect(getAge('2003-04-08', new Date('2026-04-07'))).toBe(22);
  });
});
