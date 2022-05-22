import { IFlashcard } from "./IFlashcard";

export interface ICardsCollection {
  id: number;
  name: string;
  description: string;
  cards: IFlashcard[];
}
