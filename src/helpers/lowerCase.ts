export const lowerCase = (letter: string): Lowercase<string> =>
  letter.toLowerCase();

export const lowerCaseAll = (letters?: string[]): Lowercase<string>[] =>
  (letters || []).map(lowerCase);
