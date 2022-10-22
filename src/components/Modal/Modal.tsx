import React, { useState } from "react";
import exit_icon from '../../images/modal_exit_icon.svg';

type Props = {
  modalStatus: boolean,
  setModalStatus: (_: boolean) => void,
}

export const Modal: React.FC<Props> = ({ modalStatus, setModalStatus }) => {
  const [query, setQuery] = useState<string>('+38-(0');

  const handleExitClick = () => {
    setModalStatus(!modalStatus);
  };

  const handleInputChange = (value: string) => {
    const symbols = '(+-1234567890)';
    if (symbols.includes(value[value.length - 1])) {
      
      if (value.length < query.length && value.length === 15) {
        console.log('15');
        
        return setQuery(value.slice(0, 14));
      }

      if (value.length < query.length && value.length === 12) {
        console.log('12');
        return setQuery(value.slice(0, 11))
      }

      if (value.length < query.length && value.length === 8) {
        return setQuery(value.slice(0, 7))
      }
  
      if (value.length <= 18 ) {
        if (value.length >= 6) {
          setQuery(value);
        }
    
        if (value.length === 8) {
          setQuery(`${value})`);
        }
    
        if (value.length === 12 || value.length === 15) {
          setQuery(`${value}-`);
        }
      }
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
            value={query}
            onChange={(e) => {handleInputChange(e.target.value)}}
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
