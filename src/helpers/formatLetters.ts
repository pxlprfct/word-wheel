import { Letters } from "../../types.d.ts";

export const getPossibleLetters = ({
  requiredLetters,
  optionalLetters,
}: Letters) => [...requiredLetters, ...(optionalLetters || [])];
