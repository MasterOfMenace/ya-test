import React, { ChangeEvent } from "react";
import "./Search.scss";

interface SearchProps {
  value: string;
  onSeachButtonClickHandler: () => void;
  onValueChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ value, onSeachButtonClickHandler, onValueChangeHandler }: SearchProps) => {
  return (
    <div className="search">
      <input type="text" className="search__input" value={value} onChange={onValueChangeHandler} />
      <button className="button search__button" onClick={() => onSeachButtonClickHandler()}>
        Поиск
      </button>
    </div>
  );
};
