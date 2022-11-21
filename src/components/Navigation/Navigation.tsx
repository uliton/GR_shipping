import React from "react";

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav_menu">
        <img src="" alt="" />
      </div>

      <div className="nav__container">
        <img src="" alt="" className="nav__logo"/>

        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/">Каталог авто</a>
          </li>
          <li>
            <a href="/">Марки</a>
          </li>
          <li>
            <a href="/">Блог</a>
          </li>
          <li>
            <a href="/">Особистий кабінет</a>
          </li>
          <li>
            <a href="mailto:info@grshipping.pl">info@grshipping.pl</a>
            <a href="tel:+48532007308">+48 532 007 308</a>
          </li>
        </ul>

        <div className="mods">
          <div className="language">

          </div>

          <div className="light_and_dark">

          </div>
        </div>
      </div>
    </nav>
  );
};
