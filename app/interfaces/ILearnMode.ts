import { IFlashcard } from "./IFlashcard";

export interface ILearnMode {
  cardView: string;
  cardIndex: number;
  cardsLength: number;
  shuffledList: IFlashcard[];
  studyAgainList: IFlashcard[];
  gotItList: IFlashcard[];
}
