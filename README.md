# Solving a ‘Word Wheel’ with Deno

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

