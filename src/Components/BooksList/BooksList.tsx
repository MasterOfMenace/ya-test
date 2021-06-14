import React from "react";
import { BookSnippet } from "./BookSnippet/BookSnippet";

interface BooksListProps {
  books: Array<BookSnippet>;
  onBookClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

export const BooksList = ({ books, onBookClickHandler }: BooksListProps) => {
  return (
    <div className="books">
      <ul className="books__list">
        {books.map((book) => (
          <li key={book.coverEditionKey} className="books__list-item" onClick={onBookClickHandler}>
            <BookSnippet book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};
