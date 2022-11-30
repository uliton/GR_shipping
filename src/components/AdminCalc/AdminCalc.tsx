import React, { useContext, useState } from "react";
import { AUCTIONS_CONFIG, auctionTaxCalculation, CATEGORY_CONFIG, clearanceCalculation, ENGINE_CONFIG, exciseCalculation, getCities, getStates, getYears, insuranceCalculation, MAP_CONFIG, portDelivery, stateDeliveryManagerCalculation, totalManagerCalculation, totalZlotyCalculation } from "../../framework/calculator";
import { getMock, LanguageContext } from "../../framework/LanguageContext";
import "./AdminCalc.scss";

export const AdminCalc: React.FC = () => {
  const language = useContext(LanguageContext);
  const mock = getMock(language);
  const [price, setPrice] = useState<string>('');
  const [engineVolume, setEngineVolume] = useState<string>('');
  const years: number[] = getYears();
  const [year, setYear] = useState<string>('');
  const [engine, setEngine] = useState<string>('');
  const [auction, setAuction] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const states = getStates(country).sort((a, b) => a.localeCompare(b));
  const [state, setState] = useState<string>('');
  const cities = getCities(auction, country, state).sort((a, b) => a.localeCompare(b));
  const [city, setCity] = useState<string>('');
  const [port, setPort] = useState<string>('');
  const [insurancePercent, setInsurancePercent] = useState<string>('');
  const auction_fee: number = auctionTaxCalculation(price, auction) || 0;
  const localStateDelivery: number = stateDeliveryManagerCalculation(auction, country, state, city) || 0;
  const toPortDelivery: number = portDelivery(category, state, port) || 0;
  const clearance: number = clearanceCalculation(year, price, auction_fee, localStateDelivery, toPortDelivery) || 0;
  const insurance: number = insuranceCalculation(price, auction_fee, insurancePercent) || 0;
  const integer = '1234567890';
  const margin = 500;
  const broker = 50;
  const documentsDelivery = 32;
  const complex = 990;
  const informService = 738;
  const total: number = totalManagerCalculation(price, auction_fee, localStateDelivery, toPortDelivery, broker, documentsDelivery, complex, informService, clearance, insurance, margin) || 0;
  const excise: number = exciseCalculation(year, price, auction_fee, engine, engineVolume) || 0;
  const totalZloty = totalZlotyCalculation(total);

  const handeChangePrice = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setPrice(e);
    }
    if (!e.length) {
      setPrice('');
    }
  }

  return (
    <div className="adminCalc">
      <div>
        <h3>
          Lot Info
        </h3>

        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={e => handeChangePrice(e.target.value)}
          className="input"
        />

        <select className="input" onChange={e => setEngineVolume(e.target.value)}>
          <option selected disabled >{mock.CalcBoxCustoms.addition__box__title__engine__volume}</option>
          <option value="1999">1 - 1999</option>
          <option value="2000">2000 +</option>
        </select>

        <select className="input" onChange={e => setYear(e.target.value.toString())}>
          <option selected disabled >{mock.CalcBoxCustoms.addition__box__title__year}</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select className="input" onChange={e => setEngine(e.target.value)}>
          <option selected disabled >{mock.CalcBoxCustoms.engine__title}</option>
          <option value={ENGINE_CONFIG.petrol}>{mock.CalcBoxCustoms.engine__button__petrol}</option>
          <option value={ENGINE_CONFIG.disel}>{mock.CalcBoxCustoms.engine__button__diesel}</option>
          <option value={ENGINE_CONFIG.hybrid}>{mock.CalcBoxCustoms.engine__button__hybrid}</option>
          <option value={ENGINE_CONFIG.electro}>{mock.CalcBoxCustoms.engine__button__electro}</option>
        </select>

        <select className="input" onChange={e => setAuction(e.target.value)}>
          <option selected disabled >{mock.CalcBoxCustoms.auction__title}</option>
          <option value={AUCTIONS_CONFIG.copart}>{AUCTIONS_CONFIG.copart}</option>
          <option value={AUCTIONS_CONFIG.aiia}>{AUCTIONS_CONFIG.aiia}</option>
        </select>

        <select className="input" onChange={e => setCategory(e.target.value)}>
          <option selected disabled >{mock.CalcBoxDelivery.category__title}</option>
          <option value={CATEGORY_CONFIG.first}>
            {mock.CalcBoxDelivery.category__1__button__title} - {mock.CalcBoxDelivery.category__1__button__text}
          </option>
          <option value={CATEGORY_CONFIG.second}>
            {mock.CalcBoxDelivery.category__2__button__title} - {mock.CalcBoxDelivery.category__2__button__text}
          </option>
          <option value={CATEGORY_CONFIG.third}>
            {mock.CalcBoxDelivery.category__3__button__title} - {mock.CalcBoxDelivery.category__3__button__text}
          </option>
        </select>

        <select className="input" onChange={e => setCountry(e.target.value)}>
          <option selected disabled >{mock.CalcBoxDelivery.map__title}</option>
          <option value={MAP_CONFIG.usa}>{mock.CalcBoxDelivery.map__button__usa}</option>
          <option value={MAP_CONFIG.canada}>{mock.CalcBoxDelivery.map__button__canada}</option>
        </select>


        <select className="input" onChange={e => setState(e.target.value)}>
          <option selected disabled >{mock.CalcBoxDelivery.state__title}</option>
          {states.map((state, i) => (
            <option key={i} value={state}>{state}</option>
          ))}
        </select>

        <select className="input" onChange={e => setCity(e.target.value)}>
          <option selected disabled >{mock.CalcBoxDelivery.city__title}</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>

        <select className="input" onChange={e => setPort(e.target.value)}>
          <option selected disabled >{mock.CalcBoxDelivery.port__title}</option>
          <option value={MAP_CONFIG.german}>
            {mock.CalcBoxDelivery.port__country__german} - {mock.CalcBoxDelivery.port__city__german}
          </option>
          <option value={MAP_CONFIG.poland}>
            {mock.CalcBoxDelivery.port__country__poland} - {mock.CalcBoxDelivery.port__city__poland}
          </option>
        </select>

        <select className="input" onChange={e => setInsurancePercent(e.target.value)}>
          <option selected disabled >{mock.CalcBoxCustoms.calc__box__insurance}</option>
          <option value="5">{mock.CalcBoxCustoms.insurance__5}</option>
          <option value="15">{mock.CalcBoxCustoms.insurance__15}</option>
          <option value="0">{mock.CalcBoxCustoms.insurance__0}</option>
        </select>
      </div>

      <div>
        <h3>
          Calculations
        </h3>

        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxCustoms.calc__box__price} {'->'} {price || 0}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxCustoms.calc__box__auction__fee} {'->'} {auction_fee}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxDelivery.calc__box__local__divivery} {'->'} {localStateDelivery}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxDelivery.calc__box__divivery__to__port} {'->'} {toPortDelivery.toFixed(2)}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxDelivery.calc__box__divivery__container__and__broker} {'->'} {`${margin}$ + ${broker}$`}
          </span>
          <span>
            (margin + broker)
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxDelivery.calc__box__divivery__documents} {'->'} {documentsDelivery}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxDelivery.calc__box__divivery__complex__service} {'->'} {complex}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxTotalCost.calc__box__info__service__price} {'->'} {informService}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxTotalCost.calc__box__clearance__price} {'->'} {clearance.toFixed(2)}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxCustoms.calc__box__insurance} - {insurance.toFixed(2)}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            Total: {total.toFixed(2)}$
          </span>
        </p>
        <br />
        <p className="adminCalc__item" style={{fontWeight: "bold"}}>
          <span>
            Total in zloty: {totalZloty.toFixed(2)}zł
          </span>
        </p>
        <br />
        <p className="adminCalc__item">
          <span>
            {mock.CalcBoxTotalCost.calc__box__excise__price} {'->'} {excise.toFixed(2)}$
          </span>
          <span>
            (not included)
          </span>
        </p>
      </div>
    </div>
  );
};
