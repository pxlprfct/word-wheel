import { Dictionary, Letters, Options } from "./../../types.d.ts";
import { getPossibleLetters } from "./formatLetters.ts";

const getWordsForSingleUsages = ({
  dictionary,
  possibleLetters,
}: {
  dictionary: Dictionary;
  possibleLetters: string[];
}) => {
  // the same letter can occur multiple times in the same word wheel
  // create an object that has the letter and the number of times we can use it (per word)
  // (using an object should mean we get relatively speedy lookups for a single letter)
  const lettersInWordWheelAndTheirOccurrences = possibleLetters.reduce(
    (letters: Record<string, number>, letter) => {
      letters[letter] ? (letters[letter] += 1) : (letters[letter] = 1);
      return letters;
    },
    {}
  );

  const validWords = dictionary.filter((word) => {
    const eachLetterInWord = word.split("");
    // we need to use a new object here because we're going to be mutating it
    const lettersInWordWheel = Object.assign(
      {},
      lettersInWordWheelAndTheirOccurrences
    );

    return (
      eachLetterInWord
        // for each letter, see if they are in the available in the word wheel
        // if _every_ letter is in the word wheel - it's a valid word
        .every((letter) => {
          if (lettersInWordWheel[letter] > 0) {
            lettersInWordWheel[letter] -= 1;
            return true;
          }
          return false;
        })
    );
  });

  return validWords;
};

const getWordsForMultipleUsages = ({
  dictionary,
  possibleLetters,
}: {
  dictionary: Dictionary;
  possibleLetters: string[];
}) => {
  const validWords = dictionary.filter((word) => {
    const eachLetterInWord = word.split("");

    // unlike in the single usage case, we don't need to check how many times the the letter is in the word wheel
    // we just need to check _that_ it's in the word wheel
    const lettersInWordWheel = possibleLetters.reduce(
      (allLetters: Record<string, boolean>, letter: string) => {
        allLetters[letter] = true;
        return allLetters;
      },
      {}
    );

    return (
      eachLetterInWord
        // for each letter, see if they are in the available in the word wheel
        // if _every_ letter is in the word wheel - it's a valid word
        .every((letter) => lettersInWordWheel[letter])
    );
  });

  return validWords;
};

export const getValidWords = ({
  letters,
  dictionary,
  lettersCanBeUsedMultipleTimes,
}: {
  letters: Letters;
  dictionary: Dictionary;
  lettersCanBeUsedMultipleTimes?: Options["lettersCanBeUsedMultipleTimes"];
}) => {
  const { requiredLetters, optionalLetters } = letters;
  const possibleLetters = getPossibleLetters({
    requiredLetters,
    optionalLetters,
  });

  return lettersCanBeUsedMultipleTimes
    ? getWordsForMultipleUsages({
      dictionary,
      possibleLetters,
    })
    : getWordsForSingleUsages({ dictionary, possibleLetters });
};
