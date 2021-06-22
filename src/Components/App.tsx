import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore, Operation } from "../Redux/rootReducer";
import { BookExtended } from "./BookExtended/BookExtended";
import { BooksList, getPagesCount } from "./BooksList/BooksList";
import { Container } from "./Container/Container";
import { Modal } from "./Modal/Modal";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";
import useDebounce from "../Hooks/useDebounce";
import "../Styles/global.scss";

export const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((store: AppStore) => store.books);
  const selectedBook = useSelector((store: AppStore) => store.selectedBook);
  const portalNode = document.getElementById("portal");
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const countOfBooks = useSelector((state: AppStore) => state.countOfBooksFound);
  const totalPages = getPagesCount(countOfBooks);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(debouncedSearchValue);
      dispatch(Operation.getBooks({ searchValue: debouncedSearchValue, page }));
    }
  }, [debouncedSearchValue, dispatch, page]);

  const onValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const onSearchClick = () => {
    console.log(searchValue);
    dispatch(Operation.getBooks({ searchValue, page }));
  };

  const onBookClick = (book: BookSnippet) => {
    console.log(book);
    dispatch(Operation.selectBook(book));
    setShowModal(true);
  };

  const onChangePage = (newPage: number) => {
    console.log(page);
    setPage(newPage);
  };

  return (
    <div className="page">
      <div className="header"></div>
      <Container>
        <Search
          value={searchValue}
          onValueChangeHandler={onValueChangeHandler}
          onSeachButtonClickHandler={onSearchClick}
        />
        <Pagination currentPage={page} pagesCount={totalPages} onPageChangeHandler={onChangePage} />
        <BooksList books={books} onBookClickHandler={onBookClick} />
        <Pagination currentPage={page} pagesCount={totalPages} onPageChangeHandler={onChangePage} />
      </Container>
      {showModal && portalNode && (
        <Modal domNode={portalNode} onCloseHandler={() => setShowModal(false)}>
          <BookExtended book={selectedBook} />
        </Modal>
      )}
    </div>
  );
};
