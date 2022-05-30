import { Dictionary, Letters, WordWheel } from "../../types.d.ts";
import { getPossibleLetters } from "./formatLetters.ts";
import { lowerCase } from "./lowerCase.ts";

interface Filter {
  dictionary: Dictionary;
  letters: Letters;
}

export const maxPossibleWordLength = (maxLength: number) => (word: string) =>
  maxLength >= word.length;

export const removeWordsMissingRequiredLetters =
  (requiredLetters: string[]) => (word: string) =>
    requiredLetters.every((letter) => word.includes(letter));

const filter = ({ letters: { requiredLetters }, dictionary }: Filter) => {
  const filterByRequiredLetters =
    removeWordsMissingRequiredLetters(requiredLetters);

  // filter out all words that don't have the required letters
  return dictionary.filter(filterByRequiredLetters);
};

const singleUseLetterFilter = ({
  dictionary,
  letters: { requiredLetters, optionalLetters },
}: Filter) => {
  const possibleLetters = getPossibleLetters({
    requiredLetters,
    optionalLetters,
  });
  const filterByWordLength = maxPossibleWordLength(possibleLetters.length);

  // filter out all words that are longer than we could possibly have with a complete perfect match
  return filter({ letters: { requiredLetters }, dictionary }).filter(
    filterByWordLength
  );
};

export const filterDictionary = ({
  letters: { requiredLetters, optionalLetters },
  options,
  dictionary,
}: WordWheel) => {
  const lowerCaseDictionary = dictionary.map(lowerCase);

  return options?.lettersCanBeUsedMultipleTimes
    ? filter({
        dictionary: lowerCaseDictionary,
        letters: { requiredLetters },
      })
    : singleUseLetterFilter({
        dictionary: lowerCaseDictionary,
        letters: {
          requiredLetters,
          optionalLetters,
        },
      });
};
