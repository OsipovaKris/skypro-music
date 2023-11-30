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

  const styleee = "filter__button _btn-text";

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div>
        <div
          className={
            visibleFilter === "author"
              ? styleee + " filter__button-active"
              : styleee
          }
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
          className={
            visibleFilter === "year"
              ? styleee + " filter__button-active"
              : styleee
          }
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
          className={
            visibleFilter === "genre"
              ? styleee + " filter__button-active"
              : styleee
          }
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
