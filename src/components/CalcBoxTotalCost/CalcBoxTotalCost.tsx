import React from "react";
import { CalcBox } from "../../ui/CalcBox";

type Props = {
  lotCost: string,
  auction_fee: string,
  totalDeliveryPrice: string,
  informService: number,
  clearance: string,
  total: string,
  // excise: string,
}

export const CalcBoxTotalCost: React.FC<Props> = ({ lotCost, auction_fee, totalDeliveryPrice, informService, clearance, /*excise,*/ total }) => {
  return (
    <div className="calculator__box calcBoxTotalCost">
      <p className="calcBoxTotalCost__title">
        Загальна сума
      </p>

      <div className="calcBoxTotalCost__form calcGrid">
        <div className="calcBoxTotalCost__resultsCont">
          <CalcBox text="Вартість лоту + збір аукціону" value={`${Number(lotCost) + Number(auction_fee) || '0'}.00`} />

          <CalcBox text="Вартість доставки" value={totalDeliveryPrice} />
        </div>

        <div className="calcBoxTotalCost__resultsCont">
          <CalcBox text="Інформаційні послуги, нетто" value={lotCost && auction_fee && totalDeliveryPrice ? `${informService}.00` : '0.00'} />

          <CalcBox text="Розмитнення" value={clearance} />

          {/* <CalcBox text="Акциза" value={excise} /> */}
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
