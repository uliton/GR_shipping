import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getMock, LanguageContext } from "../../framework/LanguageContext";
import logo from "../../images/nav/logo.svg"
import "./Footer.scss";

export const Footer: React.FC = () => {
  const language = useContext(LanguageContext);
  const mock = getMock(language);

  return (
    <footer className="container">
      <div className="footer">
        <Link to="/" >
          <img src={logo} alt="logo" className="footer__logo" />
        </Link>

        <p className="footer__content">
          © 2019 - 2022 All Right Reserved. GR Shipping |
        </p>

        <nav className="footer__content footer__content__nav">
          <ul className="footer__nav__list">
            <li className="footer__nav__item">
              <Link to="/">
                {mock.NavFooter.about}
              </Link>
            </li>
            <li className="footer__nav__item">
              <Link to="/">
                {mock.NavFooter.delivery}
              </Link>
            </li>
            <li className="footer__nav__item">
              <Link to="/">
                {mock.NavFooter.security_policy}
              </Link>
            </li>
            <li className="footer__nav__item">
              <Link to="/">
                {mock.NavFooter.terms}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
