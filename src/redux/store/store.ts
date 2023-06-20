import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../slices/bookSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});
export function getStoreWithState(preloadedState?: InitialState) {
  const reducer = {
    books: booksSlice.reducer,
  };
  return configureStore({ reducer, preloadedState });
}
export type InitialState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppStore = ReturnType<typeof getStoreWithState>;
export const useAppSelector: TypedUseSelectorHook<InitialState> = useSelector;
export default store;
