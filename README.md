# Solving a ‘Word Wheel’ with Deno

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/cli_badges)
[![deno version](https://img.shields.io/badge/deno-^1.3.2-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![GitHub release](https://img.shields.io/github/release/Delta456/cli_badges.svg)](https://github.com/Delta456/cli_badges/releases)
[![CI](https://github.com/Delta456/cli_badges/workflows/CI/badge.svg)](https://github.com/Delta456/cli_badges/actions?query=workflow%3ACI)

**How many different words can you make with a ‘Word Wheel’?**

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
  requiredLetters: REQUIRED_LETTERS,
  optionalLetters: OPTIONAL_LETTERS,
  wordList: EXAMPLE_WORD_LIST,
});

// result = [ "ambulance", "albumen", "alumnae", "balance", "calumba", "canulae", ... ]
```
