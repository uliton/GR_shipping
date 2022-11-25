import React from "react";

type Props = {
  language: string,
  setLanguage: (_: string) => void,
}

export const Navigation: React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__menu">
          <img src="" alt="" />
        </div>

        <div className="nav__container">
          <img src="" alt="" className="nav__logo"/>

          {/* <ul className="nav__list">
            <li className="nav__item">
              <a href="/">Головна</a>
            </li>
            <li className="nav__item">
              <a href="/">Каталог авто</a>
            </li>
            <li className="nav__item">
              <a href="/">Марки</a>
            </li>
            <li className="nav__item">
              <a href="/">Блог</a>
            </li>
            <li className="nav__item">
              <a href="/">Особистий кабінет</a>
            </li>
            <li className="nav__item">
              <a href="mailto:info@grshipping.pl">info@grshipping.pl</a>
              <a href="tel:+48532007308">+48 532 007 308</a>
            </li>
          </ul> */}

          <div className="nav__mods">
            <div className="language">
              <select value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="polish">Polski</option>
                <option value="ukrainian">Українська</option>
              </select>
            </div>

            <div className="light_and_dark">

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
