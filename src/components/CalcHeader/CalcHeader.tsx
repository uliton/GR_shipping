import React from "react";

export const CalcHeader: React.FC = () => {
  return (
    <div className="calculator__header calcH">
      <p className="calcH__location">
        Головна
      </p>

      <div className="calcH__form">
        <p className="calcH__form__title">
          Вставте посилання з Copart або IAAI:
        </p>

        <div className="calcH__form__container">
          <input
            type="text"
            placeholder="https://www.copart.com/lot/50811178"
            className="calcH__form__container__input"
          />

          <button type="button" className="calcH__form__container__button">
            Сканувати
          </button>
        </div>
      </div>

      <p className="calcH__footer">
        Або введіть дані самостійно:
      </p>
    </div>
  );
};
