import { assertEquals } from "../dev_deps.ts";

import { describe, it, run } from "../dev_deps.ts";
import { wordWheel, spellingBee } from "../src/word-wheel.ts";
import { EXAMPLE_WORD_LIST } from "./example-word-list.ts";

describe("GIVEN a Spelling Bee", () => {
  describe("WHEN it passed valid letters ", () => {
    const REQUIRED_LETTERS = ["C"];
    const OPTIONAL_LETTERS = ["R", "J", "U", "A", "L", "O"];

    it("THEN it should return valid words that are identical to a word wheel configured in the same way", () => {
      const wordWheelResults = wordWheel({
        letters: {
          requiredLetters: REQUIRED_LETTERS,
          optionalLetters: OPTIONAL_LETTERS,
        },
        dictionary: EXAMPLE_WORD_LIST,
        options: {
          lettersCanBeUsedMultipleTimes: true,
          minimumLength: 4,
        },
      });

      const spellingBeeResults = spellingBee({
        letters: {
          requiredLetters: REQUIRED_LETTERS,
          optionalLetters: OPTIONAL_LETTERS,
        },
        dictionary: EXAMPLE_WORD_LIST,
      });

      assertEquals(wordWheelResults, spellingBeeResults);

      assertEquals(spellingBeeResults, [
        "rollcollar",
        "calcular",
        "callaloo",
        "caracara",
        "carcajou",
        "carjacou",
        "corocoro",
        "jararaca",
        "oracular",
        "accrual",
        "calaloo",
        "caracal",
        "caracol",
        "caracul",
        "cloacal",
        "coralla",
        "corolla",
        "curacao",
        "curacoa",
        "jocular",
        "locular",
        "acajou",
        "alcool",
        "calalu",
        "calcar",
        "cloaca",
        "coccal",
        "collar",
        "colour",
        "coocoo",
        "corral",
        "coucal",
        "crural",
        "curara",
        "ocular",
        "rococo",
        "roucou",
        "rucola",
        "cacao",
        "calla",
        "carol",
        "claro",
        "clour",
        "coala",
        "cocco",
        "cocoa",
        "color",
        "coral",
        "craal",
        "crool",
        "cruor",
        "crura",
        "jacal",
        "local",
        "occur",
        "acca",
        "alco",
        "arco",
        "caca",
        "call",
        "calo",
        "carl",
        "carr",
        "caul",
        "clou",
        "coal",
        "coca",
        "coco",
        "cola",
        "coll",
        "cool",
        "cour",
        "croc",
        "cull",
        "curl",
        "curr",
        "joco",
        "juco",
        "loca",
        "loco",
        "orca",
        "raca",
      ]);
    });
  });
});

run();
