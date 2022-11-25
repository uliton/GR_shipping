import React, { useState } from "react";
import copart from '../../images/calculator/auctions/copart.png';
import aiia from '../../images/calculator/auctions/aiia.png';
import cars from '../../images/calculator/cars.png';
import { AUCTIONS_CONFIG, ENGINE_CONFIG } from "../../framework/calculator";
import { CalcBox } from "../../ui/CalcBox";
import { InputRadio } from "../../ui/InputRadio";
import language from "../../framework/mock.json";

type Props = {
  lotYear: string,
  lotCost: string,
  lotEngineVolume: string,
  auction_fee: string,
  // excise: string,
  insurance: string,
  totalCustomsPrice: string,
  setEngine: (_: string) => void,
  setAuction: (_: string) => void,
  setLotYear: (_: string) => void,
  setLotCost: (_: string) => void,
  setLotEngineVolume: (_: string) => void,
  setInsurancePercent: (_: string) => void,
}

export const CalcBoxCustoms: React.FC<Props> = ({ lotYear, lotCost, lotEngineVolume, auction_fee, /*excise,*/ insurance, totalCustomsPrice, setEngine, setAuction, setLotYear, setLotCost, setLotEngineVolume, setInsurancePercent }) => {
  const [mock] = useState(language.polish.CalcBoxCustoms);

  const renderLotCost = (lotCost || '0') + '.00';
  const integer = '1234567890';
  // const whole = integer + '.';

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
    if (integer.includes(e[e.length - 1])) {
      setLotEngineVolume(e);
    }

    if (!e.length) {
      setLotEngineVolume('');
    }
  }

  return (
    <div className="calculator__box calcBoxCustoms">
      <p className="calcBoxCustoms__title">
        {mock.title}
      </p>



      <div className="calcBoxCustoms__form calcGrid">
        <div className="calcBoxCustoms__infoCont">
          <div className="calcBoxCustoms__infoCont__engine">
            <p className="calcBoxCustoms__infoCont__engine__title">
              {mock.engine__title}
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
                {mock.engine__button__petrol}
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
                {mock.engine__button__diesel}
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
                {mock.engine__button__hybrid}
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
                {mock.engine__button__electro}
              </label>
            </div>
          </div>

          <div className="calcBoxCustoms__infoCont__auction">
            <p className="calcBoxCustoms__infoCont__auction__title">
              {mock.auction__title}
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
                {mock.addition__box__title__year}
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
                {mock.addition__box__title__price}
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
                {mock.addition__box__title__engine__volume}
              </p>

              <input
                type="text"
                placeholder="2475"
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
          <CalcBox text={mock.calc__box__price} value={renderLotCost} />

          <CalcBox text={mock.calc__box__auction__fee} value={auction_fee} />

          {/* <CalcBox text="Акциз" value={excise} /> */}
        </div>

        <div className="calcBoxCustoms__resultsCont">
          <CalcBox text={mock.calc__box__insurance} value={insurance} />

          <div className="calcBoxCustoms__resultsCont__box">
            <InputRadio
              name="insurance"
              id="insurance_5"
              text={mock.insurance__5}
              value="5"
              setValue={setInsurancePercent}
            />

            <InputRadio
              name="insurance"
              id="insurance_15"
              text={mock.insurance__15}
              value="15"
              setValue={setInsurancePercent}
            />

            <InputRadio
              name="insurance"
              id="insurance_0"
              text={mock.insurance__0}
              value="0"
              setValue={setInsurancePercent}
            />
          </div>
        </div>
      </div>



      <div className="calcBoxCustoms__footer">
        <p>
          {mock.footer}
        </p>

        <p>
          {`$${totalCustomsPrice}`}
        </p>
      </div>
    </div>
  );
};
