export const lowerCase = (letter: string): string =>
  letter.toLowerCase();

export const lowerCaseAll = (letters?: string[]): string[] =>
  (letters || []).map(lowerCase);
