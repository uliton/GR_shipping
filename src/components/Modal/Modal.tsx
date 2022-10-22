import React, { useState } from "react";
import exit_icon from '../../images/modal_exit_icon.svg';

type Props = {
  modalStatus: boolean,
  setModalStatus: (_: boolean) => void,
}

export const Modal: React.FC<Props> = ({ modalStatus, setModalStatus }) => {
  const [query, setQuery] = useState<string>('');

  const handleExitClick = () => {
    setModalStatus(!modalStatus);
  };

  const handleInputClick = () => {
    if (!query.length) {
      setQuery('+38-(0');
    }
  };

  const handleSubmitClick = () => {
    setModalStatus(!modalStatus);
  };
  
  return (
    <div
      className="modal"
    >
      <div className="modal__form form">
        <div className="form__exit-button">
          <button
            type="button"
            className="form__exit-button--container"
            onClick={handleExitClick}
          >
            <img src={exit_icon} alt="exit" className="form__exit-button--image"/>
          </button>
        </div>

        <div className="form__wrapper">
          <div className="form__title">
            Для перегляду інформації вкажіть Ваш телефон і отримаєте бонус
          </div>

          <div className="form__subtitle">
            Деталі для отримання бонусу розповість наш автоексперт
          </div>

          <div className="form__text">
            Номер телефону:
          </div>

          <input
            type="text"
            className="form__input form__input--input"
            placeholder="+38-(0"
            value={query}
            onClick={handleInputClick}
            onChange={(e) => {setQuery(e.target.value)}}
          />
          
          <div className="form__input form__input--checkbox checkbox">
            <input type="checkbox" id="header_modal_form_checkbox_1" className="checkbox__item" hidden/>
            <label htmlFor="header_modal_form_checkbox_1" className="checkbox__label">
              Готовий придбати найближчим часом
            </label>
          </div>

          <div className="form__input form__input--last form__input--checkbox checkbox">
            <input type="checkbox" id="header_modal_form_checkbox_2" className="checkbox__item" hidden/>
            <label htmlFor="header_modal_form_checkbox_2" className="checkbox__label">
              Немає всієї суми для придбання
            </label>
          </div>

          <div className="form__submit-button">
            <button
              type="button"
              className="form__submit-button--container"
              onClick={handleSubmitClick}
            >
              Отримати розрахунок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
