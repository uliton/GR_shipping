import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { getMock, LanguageContext } from "../../framework/LanguageContext";
import exit_icon from '../../images/modal_exit_icon.svg';

type Props = {
  modalStatus: boolean,
  setModalStatus: (_: boolean) => void,
}

export const Modal: React.FC<Props> = ({ modalStatus, setModalStatus }) => {
  const language = useContext(LanguageContext);
  const mock = getMock(language);
  const [query, setQuery] = useState<string>('+38-(0');

  const handleExitClick = () => {
    setModalStatus(!modalStatus);
  };

  const handleInputChange = (value: string) => {
    const symbols = '(+-1234567890)';
    if (symbols.includes(value[value.length - 1])) {
      
      if (value.length < query.length && value.length === 15) {
        return setQuery(value.slice(0, 14));
      }

      if (value.length < query.length && value.length === 12) {
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
            {mock.IntroductionHeaderModal.title}
          </div>

          <div className="form__subtitle">
            {mock.IntroductionHeaderModal.subtitle}
          </div>

          <div className="form__text">
            {mock.IntroductionHeaderModal.form__text}
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
              {mock.IntroductionHeaderModal.checkbox__1}
            </label>
          </div>

          <div className="form__input form__input--last form__input--checkbox checkbox">
            <input type="checkbox" id="header_modal_form_checkbox_2" className="checkbox__item" hidden/>
            <label htmlFor="header_modal_form_checkbox_2" className="checkbox__label">
              {mock.IntroductionHeaderModal.checkbox__2}
            </label>
          </div>

          <Link to="/main" className="form__submit-button">
            <button
              type="button"
              className="form__submit-button--container"
              onClick={handleSubmitClick}
            >
              {mock.IntroductionHeaderModal.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
