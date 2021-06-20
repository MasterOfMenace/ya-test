import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "src/Redux/rootReducer";
import { BookSnippet } from "./BookSnippet/BookSnippet";
import { Pagination } from "../Pagination/Pagination";
import "./BooksList.scss";

interface BooksListProps {
  books: Array<BookSnippet>;
  onBookClickHandler: (book: BookSnippet) => void;
  onChangePageHandler: (title: string, page: number) => void;
}

const getPagesCount = (countOfFindBooks: number): number => {
  return Math.ceil(countOfFindBooks / 100);
};

export const BooksList = ({ books, onBookClickHandler, onChangePageHandler }: BooksListProps) => {
  const [page, setPage] = useState(1);
  const countOfBooks = useSelector((state: AppStore) => state.countOfBooksFound);
  const totalPages = getPagesCount(countOfBooks);
  console.log(totalPages);

  const onChangePage = (pageNumber: number) => {
    onChangePageHandler("The Lord Of", pageNumber);
    setPage(pageNumber);
  };

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
      <div className="books__pagination">
        <Pagination currentPage={page} pagesCount={251} onPageChangeHandler={onChangePage} />
      </div>
    </div>
  );
};
