import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { getBooksData } from "../redux/features";
import { Book, BooksState, SHELVES, Shelves } from "../redux/booksModel";
import BookShelf from "./BookShelf";
import classes from "./BooksList.module.css";
import Loader from "../UI/Loader";
import SearchButton from "../UI/SearchButton";

const BooksList = () => {
  const { data } = useAppSelector<BooksState>((state) => state.books);
  const dispatch = useAppDispatch();

  const renderShelf = () => {
    dispatch(getBooksData());
  };
  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);
  return (
    <div className={classes.booksList}>
      {data.length === 0 || !data ? (
        <Loader />
      ) : (
        SHELVES.map((shelf) => {
          const shelfBooks = data.filter(
            (book: Book) => book.shelf === shelf.id
          );
          return (
            <BookShelf
              key={shelf.id}
              shelf={Shelves[shelf.id as keyof typeof Shelves]}
              books={shelfBooks}
              title={shelf.title}
              onRenderShelf={renderShelf}
            />
          );
        })
      )}
      <SearchButton />
    </div>
  );
};

export default BooksList;
