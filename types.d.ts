type letters = string[];
type wordList = string[];

export interface Letters {
  requiredLetters: letters;
  optionalLetters?: letters;
}

export interface WordWheel extends Letters {
  wordList: wordList;
}
