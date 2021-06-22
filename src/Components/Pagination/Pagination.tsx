import React from "react";
import "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  onPageChangeHandler: (page: number) => void;
  limit?: number;
}

const getRange = (start: number, end: number): Array<number> => {
  const length = end - start + 1;
  return Array.from({ length: length }, (_, k) => k + start);
};

const getPagesRange = (pagesCount: number, currentPage: number, limit: number): Array<number> => {
  let start, end;

  if (pagesCount <= limit) {
    start = 1;
    end = pagesCount;
  } else if (currentPage <= limit) {
    start = 1;
    end = limit;
  } else if (currentPage + limit > pagesCount) {
    start = pagesCount - 9;
    end = pagesCount;
  } else {
    start = currentPage - 5;
    end = currentPage + 4;
  }

  return getRange(start, end);
};

export const Pagination = ({
  currentPage,
  pagesCount,
  limit = 10,
  onPageChangeHandler,
}: PaginationProps) => {
  const pages = getPagesRange(pagesCount, currentPage, limit);

  const goToPrevPageClickHandler = () => {
    onPageChangeHandler(currentPage - 1);
  };

  const goToNextPageClickHandler = () => {
    onPageChangeHandler(currentPage + 1);
  };

  return (
    <ul className="pagination">
      <li
        className={`pagination__item pagination__item--prev ${
          currentPage === 1 ? "pagination__item--disabled" : ""
        }`}
        onClick={goToPrevPageClickHandler}
      >
        Назад
      </li>
      {pages.map((page, index) => (
        <li
          key={index}
          className={`pagination__item ${page === currentPage ? "pagination__item--active" : ""}`}
          onClick={() => onPageChangeHandler(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={`pagination__item pagination__item--prev ${
          currentPage === 1 ? "pagination__item--disabled" : ""
        }`}
        onClick={goToNextPageClickHandler}
      >
        Вперёд
      </li>
    </ul>
  );
};
