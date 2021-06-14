import React from "react";
import { Snippet } from "../../Snippet/Snippet";

interface BookSnippetProps {
  book: BookSnippet;
}

export const BookSnippet = ({ book }: BookSnippetProps) => {
  return (
    <Snippet>
      <div className="book">
        <div className="book__cover-wrapper">
          <img src={`http://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`} alt="book cover" />
        </div>
        <p className="book__title">
          Название книги: <span>{book.title}</span>
        </p>
        <p className="book__author">
          Автор: <span>{book.author}</span>
        </p>
      </div>
    </Snippet>
  );
};
