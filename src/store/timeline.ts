import { atom } from "jotai";
import { options } from "./predicate";
import { TimeLineInitialState, TimeLineOptions } from "./type";

export const timeLineInitialState: TimeLineInitialState = {
  current: 0,
  options,
};

export const timeLineAtom = atom(timeLineInitialState);

export const timeLinesOptionPredicate = (option: TimeLineOptions) =>
  option.items;
