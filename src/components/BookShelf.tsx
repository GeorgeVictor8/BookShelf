import React from "react";
import BookItem from "./Book";
import classes from "./BookShelf.module.css";
import { Book, Shelves } from "../redux/booksModel";
import { useAppSelector } from "../redux/store/store";

interface shelfProps {
  shelf: Shelves;
  books: Book[];
  title: string;
  onRenderShelf: () => void;
}

const BookShelf: React.FC<shelfProps> = (props) => {
  const { books, title, shelf,  } = props;
  const { loading } = useAppSelector((state) => state.books);
 


  return (
    <div className={classes.bookshelf}>
      <div
        className={classes.bookCard}
        data-testid={shelf}
      >
        <h2>{title}</h2>
        {books.length === 0 && !loading ? (
          <p>No books on this shelf, try adding new ones</p>
        ) : (
          books.map((book) => <BookItem book={book} key={book.id} />)
        )}
      </div>
    </div>
  );
};

export default BookShelf;