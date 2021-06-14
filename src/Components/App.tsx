import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore, Operation } from "../Redux/rootReducer";
import { BookExtended } from "./BookExtended/BookExtended";
import { BooksList } from "./BooksList/BooksList";
import { Container } from "./Container/Container";
import { Modal } from "./Modal/Modal";
import { Search } from "./Search/Search";

export const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((store: AppStore) => store.books);
  const selectedBook = useSelector((store: AppStore) => store.selectedBook);
  const portalNode = document.getElementById("portal");
  const [showModal, setShowModal] = useState(false);

  const onSearchClick = () => {
    dispatch(Operation.getMockBooks());
  };

  const onBookClick = () => {
    dispatch(Operation.selectMockBook());
    setShowModal(true);
  };

  return (
    <div className="page">
      <div className="header"></div>
      <Container>
        <Search onSeachButtonClickHandler={onSearchClick} />
        <BooksList books={books} onBookClickHandler={onBookClick} />
      </Container>
      {showModal && portalNode && (
        <Modal domNode={portalNode}>
          <BookExtended book={selectedBook} />
        </Modal>
      )}
    </div>
  );
};
