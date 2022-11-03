import React from "react";
import { CalcBox } from "../../ui/CalcBox";

type Props = {
  lotCost: string,
  auction_fee: string,
  totalDeliveryPrice: string,
  clearance: string,
  total: string,
}

export const CalcBoxTotalCost: React.FC<Props> = ({ lotCost, auction_fee, totalDeliveryPrice, clearance, total }) => {
  return (
    <div className="calculator__box calcBoxTotalCost">
      <p className="calcBoxTotalCost__title">
        Загальна сума
      </p>

      <div className="calcBoxTotalCost__form calcGrid">
        <div className="calcBoxTotalCost__resultsCont">
          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <p className="calcBoxTotalCost__resultsCont__box__name">
              Вартість лоту
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              {`$${lotCost || '0'}.00`}
            </p>
          </span> */}
          <CalcBox text="Вартість лоту" value={`${lotCost || '0'}.00`} />

          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <p className="calcBoxTotalCost__resultsCont__box__name">
              Збори аукціону
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              {`$${auction_fee}`}
            </p>
          </span> */}
          <CalcBox text="Збори аукціону" value={auction_fee} />

          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <p className="calcBoxTotalCost__resultsCont__box__name">
              Вартість доставки
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              $0.00
            </p>
          </span> */}

          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <span className="calcBoxTotalCost__resultsCont__box__name">
              <input
                id="insurance"
                type="checkbox"
                value="true"
              />
              <label htmlFor="insurance" className="calcBoxTotalCost__resultsCont__box__name--lable">
                Страховий внесок
              </label>
            </span>

            <p className="calcBoxTotalCost__resultsCont__box__percent">
              5%
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              $0.00
            </p>
          </span> */}
        </div>

        <div className="calcBoxTotalCost__resultsCont">
          <CalcBox text="Вартість доставки" value={totalDeliveryPrice} />
          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <p className="calcBoxTotalCost__resultsCont__box__name">
              Вартість розмитнення
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              $0.00
            </p>
          </span> */}


          {/* <span className="calcBoxTotalCost__resultsCont__box">
            <p className="calcBoxTotalCost__resultsCont__box__name">
              Експедирування + Брокер
            </p>

            <p className="calcBoxTotalCost__resultsCont__box__cost">
              $0.00
            </p>
          </span> */}
          {/* <CalcBox text="Комплексні послуги" value="0" /> */}

          {/* <div className="calcBoxCustoms__resultsCont__box">
            <p className="calcBoxCustoms__resultsCont__box__name">
              Мито
            </p>

            <p className="calcBoxCustoms__resultsCont__box__percent">
              10%
            </p>

            <p className="calcBoxCustoms__resultsCont__box__cost">
              {`$${impost}`}
            </p>
          </div> */}
          {/* <CalcBox text="Мито" percent="10%" value={impost} /> */}

          {/* <div className=" calcBoxCustoms__resultsCont__box calcBoxCustoms__resultsCont__box--last">
            <p className="calcBoxCustoms__resultsCont__box__name">
              НДС
            </p>

            <p className="calcBoxCustoms__resultsCont__box__percent">
              20%
            </p>

            <p className="calcBoxCustoms__resultsCont__box__cost">
              {`$${vat}`}
            </p>
          </div> */}
          <CalcBox text="Розмитнення" value={clearance} />
        </div>
      </div>

      <div className="calcBoxTotalCost__footer">
        <div className="calcBoxTotalCost__footer__box">
          <p className="calcBoxTotalCost__footer__box__name">
            Підсумкова вартість з усіма платежами
          </p>

          <p className="calcBoxTotalCost__footer__box__cost">
            {`$${total}`}
          </p>
        </div>

        <div className="calcBoxTotalCost__footer__buttons">
          <button type="button" className="calcBoxTotalCost__footer__button">
            Перевірити авто
          </button>

          <button type="button" className="calcBoxTotalCost__footer__button">
            КУПИТИ АВТО
          </button>
        </div>
      </div>
    </div>
  );
};
