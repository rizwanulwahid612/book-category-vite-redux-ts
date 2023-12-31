import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { api } from "./api/apiSlice";
import cartSlice from "./features/cart/cartSlice";
// import counterSlice from "./features/counter/counterSlice";
// import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
