export function combinations(items: string[]): [string, string][] {
  const [first, ...restItems] = items;
  if (!restItems.length) {
    return [];
  }

  return restItems
    .map((item) => [first, item] as [string, string])
    .concat(combinations(restItems));
}
