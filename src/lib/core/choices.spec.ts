import { describe, expect, it } from 'vitest';

import { toggleChoice } from './choices';
import { Choice } from '@/types';

describe('choices', () => {
  describe('toggleChoice', () => {
    const choices: Choice[] = [
      { id: 1, optionA: 'x', optionB: 'y', picked: 'A' },
      { id: 2, optionA: 'x', optionB: 'z', picked: 'A' },
      { id: 3, optionA: 'y', optionB: 'z', picked: 'B' },
    ];

    it('should should return the same choices array if `choiceId` not found', () => {
      const actual = toggleChoice(choices, 10);
      const expected = choices;

      expect(actual).toBe(expected);
    });

    it('should should return new choices array with a toggled choice of given `choiceId`', () => {
      const actual = toggleChoice(choices, 2);
      const expected = [
        { id: 1, optionA: 'x', optionB: 'y', picked: 'A' },
        { id: 2, optionA: 'x', optionB: 'z', picked: 'B' },
        { id: 3, optionA: 'y', optionB: 'z', picked: 'B' },
      ];

      expect(actual).toStrictEqual(expected);
    });
  });
});
