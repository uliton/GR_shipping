import React, { useState } from "react";
import { AUCTIONS_CONFIG, auctionTaxCalculation, CATEGORY_CONFIG, clearanceCalculation, deliveryPriceCalculation, ENGINE_CONFIG, exciseCalculation, getCities, getStates, insuranceCalculation, MAP_CONFIG, portDelivery, releaseContainerAndBroker, stateDeliveryCalculation, stateDeliveryManagerCalculation, totalCalculation, totalManagerCalculation } from "../../framework/calculator";
import "./AdminCalc.scss";
import language from "../../framework/mock.json";


export const AdminCalc: React.FC = () => {
  const [mockCustoms] = useState(language.ukrainian.CalcBoxCustoms)
  const [mockDelivery] = useState(language.ukrainian.CalcBoxDelivery)
  const [mockTotal] = useState(language.ukrainian.CalcBoxTotalCost)
  const [price, setPrice] = useState<string>('');
  const [engineVolume, setEngineVolume] = useState<string>('');
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

  const handeChangeYear = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setYear(e);
    }
    if (!e.length) {
      setYear('');
    }
  }

  const handeChangePrice = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setPrice(e);
    }
    if (!e.length) {
      setPrice('');
    }
  }

  const handeChangeEngineVolume = (e: string) => {
    if (integer.includes(e[e.length - 1])) {
      setEngineVolume(e);
    }
    if (!e.length) {
      setEngineVolume('');
    }
  }

  const handlerCalc = () => {}

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

        <input
          type="text"
          placeholder="engine volume"
          value={engineVolume}
          onChange={e => handeChangeEngineVolume(e.target.value)}
          className="input"
        />

        <input
          type="text"
          placeholder="year"
          className="input"
          value={year}
          onChange={e => handeChangeYear(e.target.value)}
        />

        <select className="input" onChange={e => setEngine(e.target.value)}>
          <option selected disabled >{mockCustoms.engine__title}</option>
          <option value={ENGINE_CONFIG.petrol}>{mockCustoms.engine__button__petrol}</option>
          <option value={ENGINE_CONFIG.disel}>{mockCustoms.engine__button__diesel}</option>
          <option value={ENGINE_CONFIG.hybrid}>{mockCustoms.engine__button__hybrid}</option>
          <option value={ENGINE_CONFIG.electro}>{mockCustoms.engine__button__electro}</option>
        </select>

        <select className="input" onChange={e => setAuction(e.target.value)}>
          <option selected disabled >{mockCustoms.auction__title}</option>
          <option value={AUCTIONS_CONFIG.copart}>{AUCTIONS_CONFIG.copart}</option>
          <option value={AUCTIONS_CONFIG.aiia}>{AUCTIONS_CONFIG.aiia}</option>
        </select>

        <select className="input" onChange={e => setCategory(e.target.value)}>
          <option selected disabled >{mockDelivery.category__title}</option>
          <option value={CATEGORY_CONFIG.first}>
            {mockDelivery.category__1__button__title} - {mockDelivery.category__1__button__text}
          </option>
          <option value={CATEGORY_CONFIG.second}>
            {mockDelivery.category__2__button__title} - {mockDelivery.category__2__button__text}
          </option>
          <option value={CATEGORY_CONFIG.third}>
            {mockDelivery.category__3__button__title} - {mockDelivery.category__3__button__text}
          </option>
        </select>

        <select className="input" onChange={e => setCountry(e.target.value)}>
          <option selected disabled >{mockDelivery.map__title}</option>
          <option value={MAP_CONFIG.usa}>{mockDelivery.map__button__usa}</option>
          <option value={MAP_CONFIG.canada}>{mockDelivery.map__button__canada}</option>
        </select>


        <select className="input" onChange={e => setState(e.target.value)}>
          <option selected disabled >{mockDelivery.state__title}</option>
          {states.map((state, i) => (
            <option key={i} value={state}>{state}</option>
          ))}
        </select>

        <select className="input" onChange={e => setCity(e.target.value)}>
          <option selected disabled >{mockDelivery.city__title}</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>

        <select className="input" onChange={e => setPort(e.target.value)}>
          <option selected disabled >{mockDelivery.port__title}</option>
          <option value={MAP_CONFIG.german}>
            {mockDelivery.port__country__german} - {mockDelivery.port__city__german}
          </option>
          <option value={MAP_CONFIG.poland}>
            {mockDelivery.port__country__poland} - {mockDelivery.port__city__poland}
          </option>
        </select>

        <select className="input" onChange={e => setInsurancePercent(e.target.value)}>
          <option selected disabled >{mockCustoms.calc__box__insurance}</option>
          <option value="5">{mockCustoms.insurance__5}</option>
          <option value="15">{mockCustoms.insurance__15}</option>
          <option value="0">{mockCustoms.insurance__0}</option>
        </select>

        {/* {price && engineVolume && year && engine && auction && category && country && state && city && port && insurancePercent
          ? (
            <button
              type="button"
              className="admin__button"
              onClick={handlerCalc}
            >
              Розрахувати
            </button>

          )
          : (
            <button
              type="button"
              className="admin__button"
              disabled
            >
              Розрахувати
            </button>
          )
        } */}
      </div>

      <div>
        <h3>
          Calculations
        </h3>

        <p className="adminCalc__item">
          <span>
            {mockCustoms.calc__box__price} {'->'} {price || 0}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockCustoms.calc__box__auction__fee} {'->'} {auction_fee}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockDelivery.calc__box__local__divivery} {'->'} {localStateDelivery}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockDelivery.calc__box__divivery__to__port} {'->'} {toPortDelivery}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockDelivery.calc__box__divivery__container__and__broker} {'->'} {`${margin}$ + ${broker}$`}
          </span>
          <span>
            (margin + broker)
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockDelivery.calc__box__divivery__documents} {'->'} {documentsDelivery}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockDelivery.calc__box__divivery__complex__service} {'->'} {complex}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockTotal.calc__box__info__service__price} {'->'} {informService}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockTotal.calc__box__clearance__price} {'->'} {clearance.toFixed(2)}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            {mockCustoms.calc__box__insurance} - {insurance.toFixed(2)}$
          </span>
        </p>
        <p className="adminCalc__item">
          <span>
            Total: {total.toFixed(2)}$
          </span>
        </p>
        <br />
        <p className="adminCalc__item">
          <span>
            {mockTotal.calc__box__excise__price} {'->'} {excise.toFixed(2)}$
          </span>
          <span>
            (not included)
          </span>
        </p>
      </div>
    </div>
  );
};
