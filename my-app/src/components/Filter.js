import { useState } from "react";

export function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibility = (filter) => {
    if (visibleFilter === filter) {
      setVisibleFilter(null);
    } else {
      setVisibleFilter(filter);
    }
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div>
        <div
          className="filter__button button-author _btn-text"
          onClick={() => toggleVisibility("author")}
        >
          исполнителю
        </div>
        {visibleFilter === "author" ? (
          <ul className="filter__menu">
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
          </ul>
        ) : null}
      </div>
      <div>
        <div
          className="filter__button button-year _btn-text"
          onClick={() => toggleVisibility("year")}
        >
          году выпуска
        </div>
        {visibleFilter === "year" ? (
          <ul className="filter__menu">
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
          </ul>
        ) : null}
      </div>
      <div>
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => toggleVisibility("genre")}
        >
          жанру
        </div>
        {visibleFilter === "genre" ? (
          <ul className="filter__menu">
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
            <li className="filter__menu-text _btn-text underlined">Текст</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
