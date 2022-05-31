export type Dictionary = string[];

export interface Letters {
  requiredLetters: string[];
  optionalLetters?: string[] | undefined;
}

export interface Options {
  lettersCanBeUsedMultipleTimes?: boolean;
  minimumLength?: number;
}

export interface SpellingBee {
  letters: Letters;
  dictionary: Dictionary;
}

export interface WordWheel extends SpellingBee {
  options?: Options;
}
