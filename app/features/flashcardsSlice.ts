import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ICardsCollection } from "../interfaces/ICardsCollection";

interface FlashcardsState {
  cards: ICardsCollection[];
}

const initialState = {
  cards: [
    {
      id: 0,
      name: "Your First Collection",
      description: "Lorem ipsum ...",
      cards: [
        {
          id: 0,
          question: "What is Python?",
          answer: "A general-purpose programming language.",
        },
        {
          id: 1,
          question: "What is Data Science?",
          answer:
            "An interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from data",
        },
        {
          id: 2,
          question: "What is an algorithm?",
          answer: "A finite sequence of computer-implementable instructions.",
        },
      ],
    },
  ],
} as FlashcardsState;

export const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {},
});

export const {} = flashcardsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default flashcardsSlice.reducer;
