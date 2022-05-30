import { WordWheel, Letters } from "../types.d.ts";
import { filterDictionary } from "./helpers/filterDictionary.ts";
import { checkHasLetters } from "./helpers/errors/hasLetters.ts";
import { lowerCaseAll } from "./helpers/lowerCase.ts";
import { getValidWords } from "./helpers/getValidWords.ts";

export const wordWheel = ({
  letters: { requiredLetters, optionalLetters },
  dictionary,
  options,
}: WordWheel): string[] => {
  checkHasLetters({ requiredLetters, optionalLetters });
  // TODO(@pxlprfct): is it worth adding a check to see if we even have a dictionary?

  // NOTE(@pxlprfct): Possible options that could be added in the future:
  // ---
  // isDictionaryLowerCase: boolean - Saves us looping and forcing lowercase on the dictionary
  //    _Technicaly_ we could go for something case insensitive, but that's a bit more work
  // ---
  // isLetterSetAlreadyLowerCase: boolean - Doesn't save much - but nice for consistency
  // ---
  // sortOrder - ascending, descending, random
  // ---
  // maxNumberOfWordsToReturn: number - This could be useful if you only ever needed the top x words

  const letters: Letters = {
    requiredLetters: lowerCaseAll(requiredLetters),
    optionalLetters: lowerCaseAll(optionalLetters),
  };

  const filteredDictionary = filterDictionary({
    letters,
    dictionary,
    options,
  });

  const validWords = getValidWords({
    letters,
    dictionary: filteredDictionary,
    lettersCanBeUsedMultipleTimes: options?.lettersCanBeUsedMultipleTimes,
  });

  return validWords.sort((first, second) => second.length - first.length);
};
