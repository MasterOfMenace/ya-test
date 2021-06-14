import React from "react";

interface SearchProps {
  onSeachButtonClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Search = ({ onSeachButtonClickHandler }: SearchProps) => {
  return (
    <div className="search">
      <input type="text" className="search__input" />
      <button className="button search__button" onClick={onSeachButtonClickHandler}>
        Поиск
      </button>
    </div>
  );
};
