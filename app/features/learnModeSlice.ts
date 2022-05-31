import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFlashcard } from "../interfaces/IFlashcard";
import { ILearnMode } from "../interfaces/ILearnMode";
import { RootState } from "../store";

interface learnModeSlice {
  learnMode: ILearnMode;
}

const initialState = {
  learnMode: {
    cardView: "",
    cardIndex: 0,
    cardsLength: 0,
    shuffledList: [],
    studyAgainList: [],
    gotItList: [],
  },
} as learnModeSlice;

export const learnModeSlice = createSlice({
  name: "learnMode",
  initialState,
  reducers: {
    setLearnMode: (
      state: learnModeSlice,
      action: PayloadAction<ILearnMode>
    ) => {
      state.learnMode = action.payload;
    },
    setCardIndex: (state: learnModeSlice, action: PayloadAction<number>) => {
      state.learnMode.cardIndex = action.payload;
    },
    setCardView: (state: learnModeSlice, action: PayloadAction<string>) => {
      state.learnMode.cardView = action.payload;
    },
    setGotItList: (
      state: learnModeSlice,
      action: PayloadAction<IFlashcard[]>
    ) => {
      state.learnMode.gotItList = action.payload;
    },
    setStudyAgainList: (
      state: learnModeSlice,
      action: PayloadAction<IFlashcard[]>
    ) => {
      state.learnMode.studyAgainList = action.payload;
    },
  },
});

export const {
  setLearnMode,
  setCardIndex,
  setCardView,
  setGotItList,
  setStudyAgainList,
} = learnModeSlice.actions;

export const learnState = (state: RootState) => state.learnMode;

export default learnModeSlice.reducer;
