export type Option = string;

export type Choice = {
  readonly optionA: Option;
  readonly optionB: Option;
  readonly picked: 'A' | 'B';
};
