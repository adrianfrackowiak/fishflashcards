import { configureStore } from "@reduxjs/toolkit";
import { currentcollectionSlice } from "./features/currentCardsCollectionSlice";
import { flashcardsSlice } from "./features/allCardsDataSlice";
import { learnModeSlice } from "./features/learnModeSlice";
import { userSlice } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    cards: flashcardsSlice.reducer,
    current: currentcollectionSlice.reducer,
    learnMode: learnModeSlice.reducer,
    user: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
