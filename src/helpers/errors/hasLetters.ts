import { Letters } from "../../../types.d.ts";

export const checkHasLetters = ({
  requiredLetters,
  optionalLetters,
}: Letters) => {
  if (!requiredLetters.length || !optionalLetters?.length) {
    throw new Error("You must pass required and optional letters");
  }
};
