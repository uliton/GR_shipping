import React, { useState } from "react";
import language from "../../framework/mock.json";

export const CalcHeader: React.FC = () => {
  const [mock] = useState(language.polska.CalcHeader)

  return (
    <div className="container">
      <div className="calculator__header calcH">
        <p className="calcH__location">
          {mock.location}
        </p>

        <div className="calcH__form">
          <p className="calcH__form__title">
            {mock.form__title}
          </p>

          <div className="calcH__form__container">
            <input
              type="text"
              placeholder="https://www.copart.com/lot/50811178"
              className="calcH__form__container__input"
            />

            <button type="button" className="calcH__form__container__button">
              {mock.form__container__button}
            </button>
          </div>
        </div>

        <p className="calcH__footer">
          {mock.footer}
        </p>
      </div>
    </div>
  );
};
