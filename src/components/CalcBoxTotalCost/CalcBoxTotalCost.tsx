import React, { useContext } from "react";
import { CalcBox } from "../../ui/CalcBox";
import { getMock, LanguageContext } from "../../framework/LanguageContext";

type Props = {
  lotCost: string,
  auction_fee: string,
  totalDeliveryPrice: string,
  informService: number,
  clearance: string,
  total: string,
  excise: string,
}

export const CalcBoxTotalCost: React.FC<Props> = ({ lotCost, auction_fee, totalDeliveryPrice, informService, clearance, excise, total }) => {
  const language = useContext(LanguageContext);
  const mock = getMock(language);

  return (
    <div className="calculator__box calcBoxTotalCost">
      <p className="calcBoxTotalCost__title">
        {mock.CalcBoxTotalCost.title}
      </p>

      <div className="calcBoxTotalCost__form calcGrid">
        <div className="calcBoxTotalCost__resultsCont">
          <CalcBox text={mock.CalcBoxTotalCost.calc__box__price__and__fee} value={`${Number(lotCost) + Number(auction_fee) || '0'}.00`} />

          <CalcBox text={mock.CalcBoxTotalCost.calc__box__delivery__price} value={totalDeliveryPrice} />
        </div>

        <div className="calcBoxTotalCost__resultsCont">
          <CalcBox text={mock.CalcBoxTotalCost.calc__box__info__service__price} value={lotCost && auction_fee && totalDeliveryPrice ? `${informService}.00` : '0.00'} />

          <CalcBox text={mock.CalcBoxTotalCost.calc__box__clearance__price} value={clearance} />

          <CalcBox text={mock.CalcBoxTotalCost.calc__box__excise__price} value={excise} />
        </div>
      </div>

      <div className="calcBoxTotalCost__footer">
        <div className="calcBoxTotalCost__footer__box">
          <p className="calcBoxTotalCost__footer__box__name">
            {mock.CalcBoxTotalCost.footer__box__title}
          </p>

          <p className="calcBoxTotalCost__footer__box__cost">
            {`$${total}`}
          </p>
        </div>

        <div className="calcBoxTotalCost__footer__buttons">
          <button type="button" className="calcBoxTotalCost__footer__button">
            {mock.CalcBoxTotalCost.footer__button__verify}
          </button>

          <button type="button" className="calcBoxTotalCost__footer__button">
            {mock.CalcBoxTotalCost.footer__button__buy}
          </button>
        </div>
      </div>
    </div>
  );
};
