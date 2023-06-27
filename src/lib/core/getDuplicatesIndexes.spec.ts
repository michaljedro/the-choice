import { describe, expect, it } from 'vitest';
import { getDuplicatesIndexes } from './getDuplicatesIndexes';

describe('findDuplicates', () => {
  it('should return empty array if empty array is passed', () => {
    const actual = getDuplicatesIndexes([]);
    const expected: number[][] = [];

    expect(actual).toEqual(expected);
  });

  it('should find duplicate if array has two same elements', () => {
    const actual = getDuplicatesIndexes(['hey', 'hey']);
    const expected = [[0, 1]];

    expect(actual).toEqual(expected);
  });

  it('should return empty array if there is no duplicate', () => {
    const actual = getDuplicatesIndexes(['hey', 'ho', 'hi', 'haha', 'hello']);
    const expected: number[][] = [];

    expect(actual).toEqual(expected);
  });

  it('should find duplicates in mixed array', () => {
    const actual = getDuplicatesIndexes([
      'hey',
      'hey',
      'ho',
      'hi',
      'hey',
      'hi',
    ]);
    const expected: number[][] = [
      [0, 1, 4],
      [3, 5],
    ];

    expect(actual).toEqual(expected);
  });

  it('should consider inputs with whitespace characters as duplicates', () => {
    const actual = getDuplicatesIndexes(['hey  ', '\they', 'hey', 'hi']);
    const expected: number[][] = [[0, 1, 2]];

    expect(actual).toEqual(expected);
  });

  it('should consider inputs with mixed-case characters as duplicates', () => {
    const actual = getDuplicatesIndexes(['hey  ', 'HEY', 'hEy', 'hi']);
    const expected: number[][] = [[0, 1, 2]];

    expect(actual).toEqual(expected);
  });

  it('should consider inputs with ligatures as duplicates', () => {
    const actual = getDuplicatesIndexes([
      'AEi',
      'Æi',
      'Hœ',
      'Hoe',
      'Hi',
      'ßss',
      'Ssss',
    ]);
    const expected: number[][] = [
      [0, 1],
      [2, 3],
      [5, 6],
    ];

    expect(actual).toEqual(expected);
  });

  it('should consider inputs with accents as duplicates', () => {
    const actual = getDuplicatesIndexes(['hey', 'héy', 'hêy', 'hi', 'hèy']);
    const expected: number[][] = [[0, 1, 2, 4]];

    expect(actual).toEqual(expected);
  });

  it('should consider inputs with all conditions mixed', () => {
    const actual = getDuplicatesIndexes([
      'h ey',
      ' hey',
      'hey ',
      '.hey#',
      'hęy',
      'hEy',
      'hi',
      'héy',
      'hĘ y.',
      '\they;',
      '\n hey',
    ]);
    const expected: number[][] = [[0, 1, 2, 3, 4, 5, 7, 8, 9, 10]];

    expect(actual).toEqual(expected);
  });
});
