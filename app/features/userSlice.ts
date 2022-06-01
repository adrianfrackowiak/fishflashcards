import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  user: null,
};

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
  },
});

export const { signIn, logout } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
