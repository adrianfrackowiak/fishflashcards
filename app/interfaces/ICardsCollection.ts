import { IFlashcard } from "./IFlashcard";

export interface ICardsCollection {
  id: string;
  name: string;
  description: string;
  cards: IFlashcard[];
}
