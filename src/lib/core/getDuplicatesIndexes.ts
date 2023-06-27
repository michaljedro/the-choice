import unidecode from 'unidecode';

export function getDuplicatesIndexes(options: string[]): number[][] {
  const inputsWithOriginals = options.map((str, index) => {
    const normalized = unidecode(str.toLowerCase());
    const letters = normalized.replace(/\W/g, '');
    return { normalized: letters, index };
  });

  const duplicates = inputsWithOriginals.reduce((acc, input) => {
    if (input.normalized in acc) {
      acc[input.normalized].push(input.index);
    } else {
      acc[input.normalized] = [input.index];
    }
    return acc;
  }, {} as Record<string, number[]>);

  const result: number[][] = Object.values(duplicates).filter(
    (duplicatesIndexes) => duplicatesIndexes.length > 1,
  );
  return result;
}
