import React from "react";
import usa_icon from './images/usa_icon.png';
import canada_icon from './images/canada_icon.png';
import classic_icon from './images/classic_icon.png';
import dream_icon from './images/dream_icon.png';
import moto_icon from './images/moto_icon.png';
import roro_icon from './images/roro_icon.png';

export const App: React.FC = () => {
  return (
    <div className="header">
      <p className="header__title">
        Унікальна можливість купити авто з США та Канади без передоплати
      </p>

      <div className="header__container container">
        <div className="container__info info">
          <div className="info__titles">
            <p className="info__titles--title">
              Оберіть авто і дізнайтеся бюджет для його покупки
            </p>
            <p className="info__titles--title">
              Дізнайтеся які машини можна купити в вашому бюджеті
            </p>
          </div>
          <div className="info__buttons">
            <button className="info__buttons--button-budget">
              Дізнатися бюджет авто
            </button>
            <button className="info__buttons--button-auto">
              Авто під мій бюджет
            </button>
          </div>
        </div>
        <div className="container__categories">
          <button className="container__categories--button button__usa">
            <span className="button__usa--text">
              usa
            </span>
            <img src={usa_icon} alt="usa" className="button__usa--image" />
          </button>
          <button className="container__categories--button button__canada">
            <span className="button__canada--text">
              canada
            </span>
            <img src={canada_icon} alt="canada" className="button__canada--image" />
          </button>
          <button className="container__categories--button button__classic">
            <span className="button__classic--text">
              classic
            </span>
            <img src={classic_icon} alt="classic" className="button__classic--image" />
          </button>
          <button className="container__categories--button button__dream">
            <span className="button__dream--text">
              dream
            </span>
            <img src={dream_icon} alt="dream" className="button__dream--image" />
          </button>
          <button className="container__categories--button button__moto">
            <span className="button__moto--text">
              moto
            </span>
            <img src={moto_icon} alt="moto" className="button__moto--image" />
          </button>
          <button className="container__categories--button button__roro">
            <span className="button__roro--text">
              roro
            </span>
            <img src={roro_icon} alt="roro" className="button__roro--image" />
          </button>
        </div>
      </div>
    </div>
  );
}
