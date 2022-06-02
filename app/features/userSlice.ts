import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardsCollection } from "../interfaces/ICardsCollection";
import { RootState } from "../store";

interface userSlice {
  user: {
    email: string;
    uid: string;
    collections: ICardsCollection[];
  } | null;
}

const initialState = {
  user: null,
} as userSlice;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state: any) => {
      state.user = null;
    },
    setCollections: (state: any, action: PayloadAction<any>) => {
      state.user.collections = action.payload;
    },
  },
});

export const { signIn, logout, setCollections } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
