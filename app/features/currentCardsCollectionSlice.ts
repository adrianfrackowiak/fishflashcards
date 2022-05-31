import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ICardsCollection } from "../interfaces/ICardsCollection";

interface currentcollectionState {
  current: ICardsCollection;
}

const initialState = {
  current: {
    id: "",
    name: "",
    description: "",
    cards: [],
  },
} as currentcollectionState;

export const currentcollectionSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrentState: (
      state: currentcollectionState,
      action: PayloadAction<ICardsCollection>
    ) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentState } = currentcollectionSlice.actions;

export const currentState = (state: RootState) => state.current;

export default currentcollectionSlice.reducer;
