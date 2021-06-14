import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  domNode: Element;
}

export const Modal = ({ children, domNode }: ModalProps) => {
  return ReactDOM.createPortal(children, domNode);
};
