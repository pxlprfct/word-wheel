import {
  assert,
  assertArrayIncludes,
  assertEquals,
  assertNotEquals,
  assertThrows,
} from "../dev_deps.ts";

import { describe, it, run } from "../dev_deps.ts";
import { wordWheel } from "../src/word-wheel.ts";
import { EXAMPLE_WORD_LIST } from "./example-word-list.ts";

describe("GIVEN a Word Wheel", () => {
  describe("[Letter guards]", () => {
    describe("WHEN it isn't passed any required letters", () => {
      it("THEN it should throw", () => {
        const LETTERS = ["a", "b", "c"];
        const EMPTY: string[] = [];

        // missing required letters
        assertThrows(() =>
          wordWheel({
            letters: {
              requiredLetters: EMPTY,
              optionalLetters: LETTERS,
            },
            dictionary: EXAMPLE_WORD_LIST,
          })
        );
      });
    });

    describe("WHEN it isn't passed any optional letters", () => {
      it("THEN it should throw", () => {
        const LETTERS = ["a", "b", "c"];
        const EMPTY: string[] = [];

        // missing optional letters
        assertThrows(() =>
          wordWheel({
            letters: {
              requiredLetters: LETTERS,
              optionalLetters: EMPTY,
            },
            dictionary: EXAMPLE_WORD_LIST,
          })
        );

        // missing both required and optional letters
        assertThrows(() =>
          wordWheel({
            letters: {
              requiredLetters: EMPTY,
              optionalLetters: EMPTY,
            },
            dictionary: EXAMPLE_WORD_LIST,
          })
        );
      });
    });

    describe("WHEN it isn't passed any letters", () => {
      it("THEN it should throw", () => {
        const EMPTY: string[] = [];

        // missing both required and optional letters
        assertThrows(() =>
          wordWheel({
            letters: {
              requiredLetters: EMPTY,
              optionalLetters: EMPTY,
            },
            dictionary: EXAMPLE_WORD_LIST,
          })
        );
      });
    });
  });

  describe("WHEN it is passed valid letters", () => {
    const REQUIRED_LETTERS = ["L"];
    const OPTIONAL_LETTERS = ["A", "N", "C", "M", "U", "A", "B", "E"];

    it("THEN return words that are shorter than the combination of required and optional letters added together", () => {
      const MAX_POSSIBLE_LETTERS_IN_WORD =
        REQUIRED_LETTERS.length + OPTIONAL_LETTERS.length;

      const result = wordWheel({
        letters: {
          requiredLetters: REQUIRED_LETTERS,
          optionalLetters: OPTIONAL_LETTERS,
        },
        dictionary: EXAMPLE_WORD_LIST,
      });

      assert(
        result.every((word) => MAX_POSSIBLE_LETTERS_IN_WORD >= word.length)
      );
    });

    describe("[Required letters]", () => {
      it("THEN return words that always include the required letter", () => {
        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
        });

        assert(
          result.every((word) =>
            word.includes(REQUIRED_LETTERS[0].toLowerCase())
          )
        );
      });

      it("THEN return words that always include the required letters", () => {
        const REQUIRED_LETTERS = ["L", "T"];

        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
        });

        assert(
          result.every(
            (word) =>
              word.includes(REQUIRED_LETTERS[0].toLowerCase()) &&
              word.includes(REQUIRED_LETTERS[1].toLowerCase())
          )
        );
      });
    });

    describe("[Answer checking]", () => {
      it("THEN return valid words", () => {
        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
        });

        assertArrayIncludes(result, ["calm"]);
        assertArrayIncludes(result, ["ale"]);
        assertArrayIncludes(result, ["bale"]);
      });

      it("THEN don't return invalid words", () => {
        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
        });

        // completely invalid letters
        assertNotEquals(result.includes("hello"), true);
        // uses the 'm' twice
        assertNotEquals(result.includes("mama"), true);
        // doesn't use the required letter
        assertNotEquals(result.includes("cane"), true);
      });

      it("THEN return valid words, sorted by number of characters", () => {
        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
        });

        assertEquals(result, [
          "ambulance",
          "albumen",
          "alumnae",
          "balance",
          "calumba",
          "canulae",
          "clubman",
          "clubmen",
          "lacunae",
          "maculae",
          "manacle",
          "namable",
          "almuce",
          "alumna",
          "anlace",
          "bacula",
          "becalm",
          "bemaul",
          "canula",
          "clambe",
          "culmen",
          "cuneal",
          "encalm",
          "lacuna",
          "lacune",
          "launce",
          "mabela",
          "macula",
          "macule",
          "manual",
          "nebula",
          "unable",
          "unbale",
          "unlace",
          "alane",
          "album",
          "amble",
          "ancle",
          "balun",
          "banal",
          "blame",
          "blume",
          "cabal",
          "cable",
          "camel",
          "canal",
          "clame",
          "clean",
          "lance",
          "lauan",
          "leman",
          "lumen",
          "macle",
          "manul",
          "melba",
          "nabla",
          "ulama",
          "ulema",
          "ulnae",
          "umbel",
          "umble",
          "uncle",
          "able",
          "alae",
          "alan",
          "alba",
          "albe",
          "alec",
          "alma",
          "alme",
          "alum",
          "amla",
          "aula",
          "baal",
          "bael",
          "bale",
          "balm",
          "balu",
          "blae",
          "blam",
          "blue",
          "calm",
          "caul",
          "clam",
          "clan",
          "clem",
          "club",
          "clue",
          "culm",
          "elan",
          "lace",
          "lama",
          "lamb",
          "lame",
          "lana",
          "lane",
          "leam",
          "lean",
          "lube",
          "luce",
          "luma",
          "luna",
          "lune",
          "mala",
          "male",
          "maul",
          "meal",
          "mela",
          "mule",
          "nala",
          "neal",
          "ulan",
          "ulna",
          "aal",
          "ala",
          "alb",
          "ale",
          "alu",
          "bal",
          "bel",
          "cel",
          "elm",
          "lab",
          "lac",
          "lam",
          "lea",
          "leu",
          "lum",
          "mal",
          "mel",
          "ule",
          "al",
          "el",
          "la",
        ]);
      });
    });

    describe("[Answer checking] - When letters can be used multiple times", () => {
      it("THEN return valid words", () => {
        const result = wordWheel({
          letters: {
            requiredLetters: REQUIRED_LETTERS,
            optionalLetters: OPTIONAL_LETTERS,
          },
          dictionary: EXAMPLE_WORD_LIST,
          options: {
            lettersCanBeUsedMultipleTimes: true,
          },
        });

        // uses the single 'b' twice
        assertArrayIncludes(result, ["babel"]);
        // a word that's only possible by using the letters multiple times
        assertArrayIncludes(result, ["ambulancemen"]);
      });
    });
  });
});

run();
