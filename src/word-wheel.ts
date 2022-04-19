import { WordWheel } from "../types.d.ts";
import { checkHasLetters } from "./helpers/errors/hasLetters.ts";
import { makeAllLowerCase } from "./helpers/lowercase.ts";

const getValidWords = ({
  requiredLetters,
  optionalLetters,
  wordList,
}: WordWheel) => {
  const allPossibleLetters = [...requiredLetters, ...(optionalLetters || [])];

  // quickly start reducing the number of possible of words down from the total word list
  const maxPossibleWordLength = allPossibleLetters.length;
  const words = wordList
    // first of all, remove all words that are longer than we could possibly have with a complete perfect match
    .filter((word) => maxPossibleWordLength >= word.length)
    // eliminate everything that doesn't have the required letters
    .filter((word) => requiredLetters.every((letter) => word.includes(letter)));

  // the same letter can occur multiple times in the same word wheel
  // create an object that has the letter and the number of times we can use it (per word)
  // (using an object should mean we get relatively speedy lookups for a single letter)
  const lettersInWordWheelAndTheirOccurrences = allPossibleLetters.reduce(
    (allLetters: Record<Lowercase<string>, number>, letter) => {
      allLetters[letter] ? (allLetters[letter] += 1) : (allLetters[letter] = 1);
      return allLetters;
    },
    {},
  );

  const validWords = words.filter((word) => {
    const lettersInWord = word.split("");
    // we need to use a new object here because we're going to be mutating it
    const lettersInWordWheel = { ...lettersInWordWheelAndTheirOccurrences };

    // TODO(@ollie): feels like
    return (
      lettersInWord
        // for each letter, see if they are in thefo available in the word wheel
        // if every letter is in the word wheel (therefore true) - it's a valid word
        .every((letterInWord) => {
          if (lettersInWordWheel[letterInWord] > 0) {
            lettersInWordWheel[letterInWord] -= 1;
            return true;
          }
          return false;
        })
    );
  });

  return validWords;
};

export const wordWheel = ({
  requiredLetters,
  optionalLetters,
  wordList,
}: WordWheel): string[] => {
  checkHasLetters({ requiredLetters, optionalLetters });
  // TODO(@ollie): we should probably validate that we have been passed letters
  // TODO(@ollie): check we have a word list

  // the word list is lowercase - so also lowercase the letter set
  // TODO(@ollie): lowercase the word list
  const requiredLettersLowerCase = makeAllLowerCase(requiredLetters);
  const optionalLettersLowerCase = makeAllLowerCase(optionalLetters);

  // Note(@ollie): think about an options object:
  // current possible options:
  // isWordListLowerCase: boolean - saves us looping and forcing lowercase
  //    we could go for something case insensitive, but that's a bit more work
  // isWordListAlreadyLowerCase: boolean - saves us looping through words that are longer than we could possibly have with a complete perfect match

  const validWords = getValidWords({
    requiredLetters: requiredLettersLowerCase,
    optionalLetters: optionalLettersLowerCase,
    wordList,
  });

  return validWords.sort((a, b) => b.length - a.length);
};
