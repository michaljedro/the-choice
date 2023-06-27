export type SuggestedOption = Readonly<{
  name: string;
  title: string;
  description: string;
  icon: SupportedIcon;
  options: string[];
}>;

export type SupportedIcon = 'Translate' | 'BeachAccess' | 'DownhillSkiing';
