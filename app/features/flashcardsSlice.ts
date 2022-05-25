import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { FlashCardsData } from "../data/flashcards";
import { ICardsCollection } from "../interfaces/ICardsCollection";

interface FlashcardsState {
  cards: ICardsCollection[];
}

const initialState = {
  cards: FlashCardsData,
} as FlashcardsState;

export const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    setState: (
      state: FlashcardsState,
      action: PayloadAction<ICardsCollection[]>
    ) => {
      state.cards = action.payload;
    },
  },
});

export const { setState } = flashcardsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const cardsState = (state: RootState) => state.cards;

export default flashcardsSlice.reducer;
