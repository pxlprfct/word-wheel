export type Dictionary = string[];

export interface Letters {
  requiredLetters: string[];
  optionalLetters?: string[] | undefined;
}

export interface Options {
  lettersCanBeUsedMultipleTimes: boolean;
}

export interface WordWheel {
  letters: Letters;
  dictionary: Dictionary;
  options?: Options;
}
