import React from "react";
import { BookSnippet } from "./BookSnippet/BookSnippet";
import "./BooksList.scss";

interface BooksListProps {
  books: Array<BookSnippet>;
  onBookClickHandler: (book: BookSnippet) => void;
}

export const getPagesCount = (countOfFindBooks: number): number => {
  return Math.ceil(countOfFindBooks / 100);
};

export const BooksList = ({ books, onBookClickHandler }: BooksListProps) => {
  return (
    <div className="books">
      <ul className="books__list">
        {books.map((book, index) => (
          <li
            key={`book-snippet-${index}`}
            className="books__list-item"
            onClick={() => onBookClickHandler(book)}
          >
            <BookSnippet book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};
