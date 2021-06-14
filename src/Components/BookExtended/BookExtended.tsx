import React from "react";

interface BookExtendedProps {
  book: Book;
}

export const BookExtended = ({ book }: BookExtendedProps) => {
  return (
    <div className="book-extended">
      <div className="book-extended__cover-wrapper">
        <img src={`http://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`} alt="book cover" />
      </div>
      <p className="book-extended__title">
        Название книги: <span>{book.title}</span>
      </p>
      <p className="book-extended__author">
        Автор: <span>{book.author}</span>
      </p>
      <p className="book-extended__date">
        Дата публикации: <span>{book.publishYear}</span>
      </p>
      <p className="book-extended__publisher">
        Издатель: <span>{book.publisher}</span>
      </p>
      <p className="book-extended__isbn">
        ISBN-10: <span>{book.isbn10}</span>
      </p>
      <p className="book-extended__isbn">
        ISBN-13: <span>{book.isbn13}</span>
      </p>
    </div>
  );
};
