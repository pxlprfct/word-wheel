# Word Wheel

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/word_wheel)
![npm](https://img.shields.io/npm/v/@pxlprfct/word-wheel)

**A dependency-free(!) library to solve word wheels - or even the
[NYT Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee)!**

## Rules

Each word must always include the centre letter, and each letter can only be
used as many times as it is on the wheel (in the example below - 'a' is on the
wheel twice, so it can be used twice in the same word).

![Example of "Word Wheel" - the letter 'L' in the center, and 'N', 'C', 'M'. 'U', 'A', 'B', 'E', 'A' surrounding it](https://user-images.githubusercontent.com/3811773/164109266-5f20da21-af02-450d-b8e8-77648703acec.png)

##### Valid words

- Calm
- Ale
- Bale

##### Invalid words

- Hello (Invalid Letters)
- Cane (Middle letter not used)
- Mama ('M' used twice, despite only appearing in the wheel once)

## How to use

```ts
import { wordWheel } from "word-wheel";
import { EXAMPLE_WORD_LIST } from "./example-word-list"; // use your own list of words

const REQUIRED_LETTERS = ["L"];
const OPTIONAL_LETTERS = ["A", "N", "C", "M", "U", "A", "B", "E"];

const result = wordWheel({
  letters: {
    requiredLetters: REQUIRED_LETTERS,
    optionalLetters: OPTIONAL_LETTERS,
  },
  dictionary: EXAMPLE_WORD_LIST,
});

// result = [ "ambulance", "albumen", "alumnae", "balance", "calumba", "canulae", ... ]
```

---

You _could_ use this library to cheat the
[NYT Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee). However, as
the dictionary the New York Times use isn't public - you may get some false
positives. Best of luck getting those pangrams!

```ts
import { spellingBee } from "word-wheel";
import { EXAMPLE_WORD_LIST } from "./example-word-list"; // use your own list of words

const REQUIRED_LETTERS = ["L"];
const OPTIONAL_LETTERS = ["A", "N", "C", "M", "U", "A", "B", "E"];

const result = spellingBee({
  letters: {
    requiredLetters: REQUIRED_LETTERS,
    optionalLetters: OPTIONAL_LETTERS,
  },
  dictionary: EXAMPLE_WORD_LIST,
});

// result = [ "ambulanceman", "ambulancemen", "accumulable", "balanceable", "cancellable", "unblameable", ... ]
```

If you need an example dictionary to use
[checkout the word list used in the tests.](https://raw.githubusercontent.com/pxlprfct/word_wheel/main/test/example-word-list.ts)
