import React from "react";
import copart from '../../images/calculator/auctions/copart.png';
// import manheim from '../../images/calculator/auctions/manheim.png';
import aiia from '../../images/calculator/auctions/aiia.png';
import cars from '../../images/calculator/cars.png';
import { AUCTIONS_CONFIG, ENGINE_CONFIG } from "../../framework/calculator";
import { CalcBox } from "../../ui/CalcBox";
import { InputRadio } from "../../ui/InputRadio";

type Props = {
  lotYear: string,
  lotCost: string,
  lotEngineVolume: string,
  auction_fee: string,
  excise: string,
  insurance: string,
  totalCustomsPrice: string,
  setEngine: (_: string) => void,
  setAuction: (_: string) => void,
  setLotYear: (_: string) => void,
  setLotCost: (_: string) => void,
  setLotEngineVolume: (_: string) => void,
  setInsurancePercent: (_: string) => void,
}

export const CalcBoxCustoms: React.FC<Props> = ({ lotYear, lotCost, lotEngineVolume, auction_fee, excise, insurance, totalCustomsPrice, setEngine, setAuction, setLotYear, setLotCost, setLotEngineVolume, setInsurancePercent }) => {
  const renderLotCost = (lotCost || '0') + '.00';
  const integer = '1234567890';
  const whole = integer + '.';

  const handleChangeEngine = (e: string) => {
    setEngine(e);
  }

  const handleChangeAuction = (e: string) => {
    setAuction(e)
  }

  const handeChangeLotYear = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setLotYear(e);
    }
    
    if (!e.length) {
      setLotYear('');
    }
  }

  const handeChangeLotCost = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setLotCost(e);
    }

    if (!e.length) {
      setLotCost('');
    }
  }

  const handeChangeLotEngineVolume = (e: string) => {
    if (whole.includes(e[e.length - 1])) {
      setLotEngineVolume(e);
    }

    if (!e.length) {
      setLotEngineVolume('');
    }
  }

  return (
    <div className="calculator__box calcBoxCustoms">
      <p className="calcBoxCustoms__title">
        Калькулятор розмитнення
      </p>



      <div className="calcBoxCustoms__form calcGrid">
        <div className="calcBoxCustoms__infoCont">
          <div className="calcBoxCustoms__infoCont__engine">
            <p className="calcBoxCustoms__infoCont__engine__title">
              Двигун:
            </p>

            <div className="calcBoxCustoms__infoCont__engine__buttons">
              <input
                id="engine_petrol"
                type="radio"
                name="engine"
                value={ENGINE_CONFIG.petrol}
                hidden
                onChange={e => {handleChangeEngine(e.target.value)}}
              />
              <label htmlFor="engine_petrol" className="calcBoxCustoms__infoCont__engine__button">
                Бензин
              </label>
            
              <input
                id="engine_disel"
                type="radio"
                name="engine"
                value={ENGINE_CONFIG.disel}
                hidden
                onChange={e => {handleChangeEngine(e.target.value)}}
              />
              <label htmlFor="engine_disel" className="calcBoxCustoms__infoCont__engine__button">
                Дизель
              </label>

              <input
                id="engine_hybrid"
                type="radio"
                name="engine"
                value={ENGINE_CONFIG.hybrid}
                hidden
                onChange={e => {handleChangeEngine(e.target.value)}}
              />
              <label htmlFor="engine_hybrid" className="calcBoxCustoms__infoCont__engine__button">
                Гібрид
              </label>
            
              <input
                id="engine_electro"
                type="radio"
                name="engine"
                value={ENGINE_CONFIG.electro}
                hidden
                onChange={e => {handleChangeEngine(e.target.value)}}
              />
              <label htmlFor="engine_electro" className="calcBoxCustoms__infoCont__engine__button">
                Електро
              </label>
            </div>
          </div>

          <div className="calcBoxCustoms__infoCont__auction">
            <p className="calcBoxCustoms__infoCont__auction__title">
              Аукціон:
            </p>

            <div className="calcBoxCustoms__infoCont__auction__buttons">
              <input
                id="auction_copart"
                type="radio"
                name="auction"
                value={AUCTIONS_CONFIG.copart}
                hidden
                onChange={e => {handleChangeAuction(e.target.value)}}
              />
              <label htmlFor="auction_copart" className="calcBoxCustoms__infoCont__auction__button">
                <img src={copart} alt="copart" className="calcBoxCustoms__infoCont__auction__button--copart" />
              </label>
        
              {/* <input
                id="auction_manheim"
                type="radio"
                name="auction"
                value={AUCTIONS_CONFIG.manheim}
                hidden
                onChange={e => {handleChangeAuction(e.target.value)}}
              />
              <label htmlFor="auction_manheim" className="calcBoxCustoms__infoCont__auction__button">
                <img src={manheim} alt="manheim" className="calcBoxCustoms__infoCont__auction__button--manheim" />
              </label> */}

              <input
                id="auction_aiia"
                type="radio"
                name="auction"
                value={AUCTIONS_CONFIG.aiia}
                hidden
                onChange={e => {handleChangeAuction(e.target.value)}}
              />
              <label htmlFor="auction_aiia" className="calcBoxCustoms__infoCont__auction__button">
                <img src={aiia} alt="aiia" className="calcBoxCustoms__infoCont__auction__button--aiia" />
              </label>
            </div>
          </div>

          <div className="calcBoxCustoms__infoCont__addition">
            <div className="calcBoxCustoms__infoCont__addition__box">
              <p className="calcBoxCustoms__infoCont__addition__box__title">
                Рік випуску:
              </p>

              <input
                type="text"
                placeholder="2016"
                className="calcBoxCustoms__infoCont__addition__box__input"
                value={lotYear}
                onChange={e => {handeChangeLotYear(e.target.value)}}
              />
            </div>

            <div className="calcBoxCustoms__infoCont__addition__box">
              <p className="calcBoxCustoms__infoCont__addition__box__title">
                Вартість:
              </p>

              <input
                type="text"
                placeholder="10000"
                className="calcBoxCustoms__infoCont__addition__box__input"
                value={lotCost}
                onChange={e => {handeChangeLotCost(e.target.value)}}
              />
            </div>

            <div className="calcBoxCustoms__infoCont__addition__box">
              <p className="calcBoxCustoms__infoCont__addition__box__title">
                Об'єм двигуна:
              </p>

              <input
                type="text"
                placeholder="2.6"
                className="calcBoxCustoms__infoCont__addition__box__input"
                value={lotEngineVolume}
                onChange={e => handeChangeLotEngineVolume(e.target.value)}
              />
            </div>
          </div>
        </div >

        <div className="calcBoxCustoms__imageCont">
          <img src={cars} alt="cars" className="calcBoxCustoms__imageCont__image" />
        </div>

        <div className="calcBoxCustoms__resultsCont">
          {/* <div className="calcBoxCustoms__resultsCont__box">
            <p className="calcBoxCustoms__resultsCont__box__name">
              Вартість лоту
            </p>

            <p className="calcBoxCustoms__resultsCont__box__cost">
              {`$${renderLotCost}`}
            </p>
          </div> */}
          <CalcBox text="Вартість лоту" value={renderLotCost} />

          {/* <div className="calcBoxCustoms__resultsCont__box">
            <p className="calcBoxCustoms__resultsCont__box__name">
              Збори аукціону
            </p>

            <p className="calcBoxCustoms__resultsCont__box__cost">
              {`$${auction_fee}`}
            </p>
          </div> */}
          <CalcBox text="Збори аукціону" value={auction_fee} />
          <CalcBox text="Акциз" value={excise} />
        </div>

        <div className="calcBoxCustoms__resultsCont">
          {/* <div className="calcBoxCustoms__resultsCont__box">
            <p className="calcBoxCustoms__resultsCont__box__name">
              Акциз
            </p>

            <p className="calcBoxCustoms__resultsCont__box__cost">
              {`$${excise}`}
            </p>
          </div> */}

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
          </div>

          <div className=" calcBoxCustoms__resultsCont__box calcBoxCustoms__resultsCont__box--last">
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

          
          <CalcBox text="Страховий внесок" value={insurance} />
          <div className="calcBoxCustoms__resultsCont__box">
            <InputRadio
              name="insurance"
              id="insurance_5"
              text="5 % на зовнішні пошкодження"
              value="5"
              setValue={setInsurancePercent}
            />
            
            <InputRadio
              name="insurance"
              id="insurance_15"
              text="15 % на зовнішні пошкодження, двигун, коробка передач"
              value="15"
              setValue={setInsurancePercent}
            />

            <InputRadio
              name="insurance"
              id="insurance_0"
              text="без страхового внеску"
              value="0"
              setValue={setInsurancePercent}
            />
          </div>

          {/* <span className="calcBoxTotalCost__resultsCont__box"> */}
            {/* <div>
            Страховий внесок 
            </div> */}
            {/* <span className="calcBoxTotalCost__resultsCont__box__name">
              <input
                id="insurance_5"
                type="radio"
                name="insurance"
                value="5"
                hidden
              />
              <label htmlFor="insurance_5" className="calcBoxTotalCost__resultsCont__box__name--lable">
                <p>
                  5 % на зовнішні пошкодження
                </p>
              </label> */}

              {/* <div className="form__input form__input--last form__input--checkbox checkbox">
                <input type="radio" name="insurance" id="header_modal_form_checkbox_2" className="checkbox__item" hidden/>
                <label htmlFor="header_modal_form_checkbox_2" className="checkbox__label">
                15 % на зовнішні пошкодження, двигун, коробка передач
                </label>
              </div> */}



              {/* <input
                id="insurance_15"
                type="radio"
                name="insurance"
                value="15"
                hidden
                className="checkbox__item"
              />
              <label htmlFor="insurance_15" className="checkbox__label">
                <p>
                  15 % на зовнішні пошкодження, двигун, коробка передач
                </p>
              </label> */}


            {/* </span> */}

            {/* <p className="calcBoxTotalCost__resultsCont__box__percent">
              5%
            </p> */}

            {/* <p className="calcBoxTotalCost__resultsCont__box__cost">
              $0.00
            </p> */}
          {/* </span> */}
        </div>
      </div>



      <div className="calcBoxCustoms__footer">
        <p>
          Сума платежів
        </p>

        <p>
          {`$${totalCustomsPrice}`}
        </p>
      </div>
    </div>
  );
};
