import { Choice } from '@/types';

export function toggleChoice(
  choices: Choice[],
  choiceId: Choice['id'],
): Choice[] {
  const idx = choices.findIndex((choice) => choice.id === choiceId);
  if (idx < 0) {
    return choices;
  }

  const choice = choices[idx];
  const toggledChoice: Choice = {
    ...choice,
    picked: choice.picked === 'A' ? 'B' : 'A',
  };

  return [...choices.slice(0, idx), toggledChoice, ...choices.slice(idx + 1)];
}
