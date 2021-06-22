import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

interface ModalProps {
  children: ReactNode;
  domNode: Element;
  onCloseHandler: () => void;
}

export const Modal = ({ children, domNode, onCloseHandler }: ModalProps) => {
  const modalContainer = (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button
          className="modal__close-button"
          aria-label="Закрыть"
          onClick={onCloseHandler}
        ></button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modalContainer, domNode);
};
