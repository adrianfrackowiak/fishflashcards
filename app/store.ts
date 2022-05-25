import { configureStore } from "@reduxjs/toolkit";
import { currentcollectionSlice } from "./features/currentcollectionSlice";
import { flashcardsSlice } from "./features/flashcardsSlice";

export const store = configureStore({
  reducer: {
    cards: flashcardsSlice.reducer,
    current: currentcollectionSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
