import React, { useState } from "react";
import { Modal } from "../Modal";
import usa_icon from "../../images/usa_icon.png";
import canada_icon from "../../images/canada_icon.png";
import classic_icon from "../../images/classic_icon.png";
import dream_icon from "../../images/dream_icon.png";
import moto_icon from "../../images/moto_icon.png";
import roro_icon from "../../images/roro_icon.png";

export const Header = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const handlerClick = () => {
    setModalStatus(!modalStatus);
  }

  return (
    <div className="header">
      <p className="header__title">
        Унікальна можливість купити авто з США та Канади без передоплати
      </p>

      <div className="header__container">
        <div className="header__container--info info">
          <div className="info__titles">
            <p className="info__titles--title">
              Оберіть авто і дізнайтеся бюджет для його покупки
            </p>
            <p className="info__titles--title">
              Дізнайтеся які машини можна купити в вашому бюджеті
            </p>
          </div>
          <div className="info__buttons">
            <button type="button" className="info__buttons--button-budget" onClick={handlerClick}>
              Дізнатися бюджет авто
            </button>
            <button type="button" className="info__buttons--button-auto" onClick={handlerClick}>
              Авто під мій бюджет
            </button>
          </div>
        </div>

        <div className="header__container--categories categories">
          <button type="button" className="categories__button categories__button--usa usa">
            <span className="usa__text">
              usa
            </span>
            <img src={usa_icon} alt="usa" className="usa__image" />
          </button>

          <button type="button" className="categories__button categories__button--canada canada">
            <span className="canada__text">
              canada
            </span>
            <img src={canada_icon} alt="canada" className="canada__image" />
          </button>

          <button type="button" className="categories__button categories__button--classic classic">
            <span className="classic__text">
              classic
            </span>
            <img src={classic_icon} alt="classic" className="classic__image" />
          </button>

          <button type="button" className="categories__button categories__button--dream dream">
            <span className="dream__text">
              dream
            </span>
            <img src={dream_icon} alt="dream" className="dream__image" />
          </button>

          <button type="button" className="categories__button categories__button--moto moto">
            <span className="moto__text">
              moto
            </span>
            <img src={moto_icon} alt="moto" className="moto__image" />
          </button>

          <button type="button" className="categories__button categories__button--roro roro">
            <span className="roro__text">
              roro
            </span>
            <img src={roro_icon} alt="roro" className="roro__image" />
          </button>
        </div>
      </div>

      {modalStatus && (
        <Modal
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />
      )}
    </div>
  );
};
