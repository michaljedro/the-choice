export type Option = string;

export type Choice = {
  readonly id: number;
  readonly optionA: Option;
  readonly optionB: Option;
  readonly picked: 'A' | 'B';
};

export type CriterionSubmit = string | null;
