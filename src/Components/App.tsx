import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore, Operation } from "../Redux/rootReducer";
import { BookExtended } from "./BookExtended/BookExtended";
import { BooksList } from "./BooksList/BooksList";
import { Container } from "./Container/Container";
import { Modal } from "./Modal/Modal";
import { Search } from "./Search/Search";
import "../Styles/global.scss";

export const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((store: AppStore) => store.books);
  const selectedBook = useSelector((store: AppStore) => store.selectedBook);
  const portalNode = document.getElementById("portal");
  const [showModal, setShowModal] = useState(false);

  const onSearchClick = (title: string) => {
    console.log(title);
    dispatch(Operation.getBooks({ title }));
  };

  const onBookClick = (book: BookSnippet) => {
    console.log(book);
    dispatch(Operation.selectBook(book));
    setShowModal(true);
  };

  const onChangePage = (title: string, page: number) => {
    console.log(page);
    dispatch(Operation.changePage(title, page));
  };

  return (
    <div className="page">
      <div className="header"></div>
      <Container>
        <Search onSeachButtonClickHandler={onSearchClick} />
        <BooksList
          books={books}
          onBookClickHandler={onBookClick}
          onChangePageHandler={onChangePage}
        />
      </Container>
      {showModal && portalNode && (
        <Modal domNode={portalNode} onCloseHandler={() => setShowModal(false)}>
          <BookExtended book={selectedBook} />
        </Modal>
      )}
    </div>
  );
};
