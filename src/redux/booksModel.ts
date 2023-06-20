type images = {
    smallThumbnail: string;
    thumbnail: string;
  };
  
  export enum Shelves {
    read = "read",
    currentlyReading = "currentlyReading",
    wantToRead = "wantToRead",
    none = "none",
  }
  export interface Book {
    id: string;
    authors: string[];
    title: string;
    imageLinks: images;
    shelf: Shelves;
    subtitle: string;
  }
  
  export interface UpdatedBookType {
    book: Book;
    shelf: Shelves;
  }
  
  export interface ResponseInterface {
    currentlyReading: Shelves.currentlyReading;
    read: Shelves.read;
    wantToRead: Shelves.wantToRead;
    book: UpdatedBookType;
  }
  
  export interface BooksState {
    loading: boolean;
    data: Book[];
    searchResults: Book[];
  }
  export const SHELVES = [
    {
      title: "Currently Reading",
      id: "currentlyReading",
    },
    {
      title: "Want To Read",
      id: "wantToRead",
    },
    {
      title: "Read",
      id: "read",
    },
  ];
  