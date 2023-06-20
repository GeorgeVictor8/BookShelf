import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getBooksData,
  getBook,
  searchForBooks,
  updateBookShelf,
} from "../features";
import { ResponseInterface, BooksState, Book } from "../booksModel";

export const initialBookState: BooksState = {
  loading: false,
  searchResults: [],
  data: [],
};

export const booksSlice = createSlice({
  name: "booksSlice",
  initialState: initialBookState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksData.fulfilled, (state, action: PayloadAction<[Book]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getBooksData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.data = [action.payload];
        state.loading = false;
      })
      .addCase(getBook.rejected, (state) => {
        state.loading = false;
      })
      .addCase(searchForBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        searchForBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.searchResults = action.payload;
          state.loading = false;
        }
      )
      .addCase(searchForBooks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateBookShelf.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateBookShelf.fulfilled,
        (state, action: PayloadAction<ResponseInterface>) => {
          const { book, shelf } = action.payload.book;
          state.data = state.data.map((changedBook) =>
            changedBook.id === book.id ? { ...changedBook, shelf } : changedBook
          );
          state.loading = false;
        }
      )
      .addCase(updateBookShelf.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const BooksActions = booksSlice.actions;
