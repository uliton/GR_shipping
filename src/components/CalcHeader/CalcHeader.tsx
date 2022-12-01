import React, { useContext } from "react";
import { getMock, LanguageContext } from "../../framework/LanguageContext";

export const CalcHeader: React.FC = () => {
  const language = useContext(LanguageContext);
  const mock = getMock(language);

  return (
    <div className="container">
      <div className="calculator__header calcH">
        <p className="calcH__location">
          {mock.CalcHeader.location}
        </p>

        <div className="calcH__form">
          <p className="calcH__form__title">
            {mock.CalcHeader.form__title}
          </p>

          <div className="calcH__form__container">
            <input
              type="text"
              placeholder="https://www.copart.com/lot/50811178"
              className="calcH__form__container__input"
            />

            <button type="button" className="calcH__form__container__button">
              {mock.CalcHeader.form__container__button}
            </button>
          </div>
        </div>

        <p className="calcH__footer">
          {mock.CalcHeader.footer}
        </p>
      </div>
    </div>
  );
};
