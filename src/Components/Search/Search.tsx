import React, { MutableRefObject, useRef } from "react";
import "./Search.scss";

interface SearchProps {
  onSeachButtonClickHandler: (title: string) => void;
}

export const Search = ({ onSeachButtonClickHandler }: SearchProps) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <div className="search">
      <input type="text" className="search__input" ref={inputRef} />
      <button
        className="button search__button"
        onClick={() => onSeachButtonClickHandler(inputRef.current.value)}
      >
        Поиск
      </button>
    </div>
  );
};
