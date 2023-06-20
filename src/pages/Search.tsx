import React, { ReactElement, useEffect, useState } from "react";
import classes from "./Search.module.css";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { Book, BooksState, Shelves } from "../redux/booksModel";
import BookItem from "../components/Book";
import { getBooksData, searchForBooks } from "../redux/features";
import BackButton from "../UI/BackButton";

const Search = (): ReactElement => {
  const [queryInput, setQueryInput] = useState<string>("");
  const { searchResults, data } = useAppSelector<BooksState>((state) => state.books);
  const [dataAfterModification, setDataAfterModification] = useState<Book[]>([]);
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (queryInput.trim().length !== 0) {
        dispatch(searchForBooks(queryInput));
      } else {
        setDataAfterModification([]);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, queryInput]);

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  useEffect(() => {
    const modifiedBooks = searchResults.map((searchBook: Book) => {
      const existingBook = data.find((book) => book.id === searchBook?.id);
      if (existingBook) {
        return existingBook;
      } else {
        return { ...searchBook, shelf: Shelves.none };
      }
    });
    setDataAfterModification(modifiedBooks);
  }, [searchResults, data]);

  return (
    
    <div className={classes.search}>
      <BackButton/>
      <div className={classes.input}>
        
        <input
          value={queryInput}
          onChange={handleSearch}
          placeholder="Ex: Linux"
        />
      </div>
      <div className={classes["search-books"]}>
        {dataAfterModification.length === 0 || queryInput.trim().length === 0 ? (
          <p>Please Enter The Desired Book to Add to your Shelves.</p>
        ) : (
          dataAfterModification.map((book) => (
            <BookItem book={book} key={book.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
