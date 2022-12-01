import React from "react";
import menu from "../../images/nav/menu.svg";
import logo from "../../images/nav/logo.svg";
import "./Navigation.scss";
import { LanguageSelect } from "../../ui/LanguageSelect";
import { ModeSelect } from "../../ui/ModeSelect";
import { Link } from "react-router-dom";
import { getMock } from "../../framework/LanguageContext";

type Props = {
  language: string,
  setLanguage: (_: string) => void,
}

export const Navigation: React.FC<Props> = ({ language, setLanguage }) => {
  const mock = getMock(language);

  return (
    <nav className="container">
      <div className="nav">
        <div className="nav__menu">
          <img src={menu} alt="menu" className="nav__menu__image"/>
        </div>

        <div className="nav__container">
          <Link to="/">
            <img src={logo} alt="GRshopping Logo" className="nav__logo"/>
          </Link>

          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/main">
                {mock.NavHeader.main}
              </Link>
            </li>
            <li className="nav__item">
            <Link to="/">
              {mock.NavHeader.cataloge}

            </Link>
            </li>
            <li className="nav__item">
            <Link to="/">
              {mock.NavHeader.brands}
            </Link>
            </li>
            <li className="nav__item">
              <Link to="/">
                {mock.NavHeader.blog}
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/">
                {mock.NavHeader.cabinet}
              </Link>
            </li>
            <li className="nav__item nav__item--last">
              <a href="mailto:info@grshipping.pl">info@grshipping.pl</a>
              <a href="tel:+48532007308">+48 532 007 308</a>
            </li>
          </ul>

          <div className="nav__mods">
            <LanguageSelect language={language} setLanguage={setLanguage} />

            <ModeSelect />
          </div>
        </div>
      </div>
    </nav>
  );
};
