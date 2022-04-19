const makeLowerCase = (letter: string): Lowercase<string> =>
  letter.toLowerCase();

export const makeAllLowerCase = (letters?: string[]): Lowercase<string>[] =>
  (letters || []).map(makeLowerCase);
