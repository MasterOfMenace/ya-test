import React from "react";
import { Snippet } from "../../Snippet/Snippet";
import "./BookSnippet.scss";

interface BookSnippetProps {
  book: BookSnippet;
}

export const BookSnippet = ({ book }: BookSnippetProps) => {
  return (
    <Snippet>
      <div className="book-snippet">
        <div className="book-snippet__cover-wrapper">
          {book.coverId ? (
            <img
              src={`http://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`}
              alt="book cover"
              className="book-snippet__cover-image"
            />
          ) : null}
        </div>
        <div className="book-snippet__description-wrapper">
          <p className="book-snippet__title">
            Название книги: <span>{book.title}</span>
          </p>
          <p className="book-snippet__author">
            Автор: <span>{book.author}</span>
          </p>
        </div>
      </div>
    </Snippet>
  );
};
