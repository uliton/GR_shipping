import React, { useState } from "react";
import { CATEGORY_CONFIG, MAP_CONFIG } from "../../framework/calculator";
import category_1 from '../../images/calculator/categories/category_1.png'
import category_2 from '../../images/calculator/categories/category_2.png'
import category_3 from '../../images/calculator/categories/category_3.png'
import { CalcBox } from "../../ui/CalcBox";
import { MapCanada } from "../../ui/MapCanada";
import { MapGerman } from "../../ui/MapGerman";
import { MapPoland } from "../../ui/MapPoland";
import { MapUSA } from "../../ui/MapUSA";
import language from "../../framework/mock.json";

type Props = {
  category: string,
  map: string,
  port: string,
  localStateDelivery: string,
  toPortDelivery: string,
  containerAndBroker: string,
  documentsDelivery: string,
  complex: string,
  totalDeliveryPrice: string,
  setCategory: (_: string) => void,
  setCounty: (_: string) => void,
  setMap: (_: string) => void,
  setPort: (_: string) => void,
}

export const CalcBoxDelivery: React.FC<Props> = ({ category, map, port, localStateDelivery, toPortDelivery, containerAndBroker, documentsDelivery, complex, totalDeliveryPrice, setCategory, setCounty, setMap, setPort }) => {
  const [mock] = useState(language.polish.CalcBoxDelivery);

  const [categoryImage, setCategoryImage] = useState(category_1);
  const [mapComponent, setMapComponent] = useState(<MapUSA setCounty={setCounty} />);

  const handleChangeCategory = (value: string) => {
    if (value === CATEGORY_CONFIG.first) {
      setCategoryImage(category_1);
      setCategory(CATEGORY_CONFIG.first);
    }

    if (value === CATEGORY_CONFIG.second) {
      setCategoryImage(category_2);
      setCategory(CATEGORY_CONFIG.second);
    }

    if (value === CATEGORY_CONFIG.third) {
      setCategoryImage(category_3);
      setCategory(CATEGORY_CONFIG.third);
    }
  }

  const handleChangeMap = (value: string) => {
    if (value === MAP_CONFIG.usa) {
      setMapComponent(<MapUSA setCounty={setCounty} />);
      setMap(MAP_CONFIG.usa);
      setCounty('');
    }

    if (value === MAP_CONFIG.canada) {
      setMapComponent(<MapCanada setCounty={setCounty} />);
      setMap(MAP_CONFIG.canada);
      setCounty('');
    }
  }

  const handleChangePort = (value: string) => {
    if (value === MAP_CONFIG.german) {
      setPort(MAP_CONFIG.german);
    }

    if (value === MAP_CONFIG.poland) {
      setPort(MAP_CONFIG.poland);
    }
  }

  return (
    <div className="calculator__box calcBoxDelivery">
      <p className="calcBoxDelivery__title">
        {mock.title}
      </p>


      <div className="calcBoxDelivery__form calcGrid">
        <div className="calcBoxDelivery__category">
          <p className="calcBoxDelivery__category__title">
            {mock.category__title}
          </p>

          <div className="calcBoxDelivery__category__buttons">
            <input
              id="category_1"
              type="radio"
              name="category"
              value={CATEGORY_CONFIG.first}
              hidden
              onChange={e => {handleChangeCategory(e.target.value)}}
              checked={category === CATEGORY_CONFIG.first}
            />
            <label htmlFor="category_1" className="calcBoxDelivery__category__button">
              <p className="calcBoxDelivery__category__button__title">
                {mock.category__1__button__title}
              </p>
              <p className="calcBoxDelivery__category__button__text">
                {mock.category__1__button__text}
              </p>
            </label>

            <input
              id="category_2"
              type="radio"
              name="category"
              value={CATEGORY_CONFIG.second}
              hidden
              onChange={e => {handleChangeCategory(e.target.value)}}
              checked={category === CATEGORY_CONFIG.second}
            />
            <label htmlFor="category_2" className="calcBoxDelivery__category__button">
              <p className="calcBoxDelivery__category__button__title">
                {mock.category__2__button__title}
              </p>
              <p className="calcBoxDelivery__category__button__text">
                {mock.category__2__button__text}
              </p>
            </label>

            <input
              id="category_3"
              type="radio"
              name="category"
              value={CATEGORY_CONFIG.third}
              hidden
              onChange={e => {handleChangeCategory(e.target.value)}}
              checked={category === CATEGORY_CONFIG.third}
            />
            <label htmlFor="category_3" className="calcBoxDelivery__category__button">
              <p className="calcBoxDelivery__category__button__title">
                {mock.category__3__button__title}
              </p>
              <p className="calcBoxDelivery__category__button__text">
                {mock.category__3__button__text}
              </p>
            </label>
          </div>

          <img src={categoryImage} alt="category" className="calcBoxDelivery__category__image"/>
        </div>

        <div className="calcBoxDelivery__map">
          <p className="calcBoxDelivery__map__title">
            {mock.state__title}
          </p>

          <div className="calcBoxDelivery__map__buttons">
            <input
              id="map_usa"
              type="radio"
              name="map"
              value={MAP_CONFIG.usa}
              hidden
              onChange={e => {handleChangeMap(e.target.value)}}
              checked={map === MAP_CONFIG.usa}
            />
            <label htmlFor="map_usa" className="calcBoxDelivery__map__button">
              {mock.map__button__usa}
            </label>

            <input
              id="map_canada"
              type="radio"
              name="map"
              value={MAP_CONFIG.canada}
              hidden
              onChange={e => {handleChangeMap(e.target.value)}}
              checked={map === MAP_CONFIG.canada}
            />
            <label htmlFor="map_canada" className="calcBoxDelivery__map__button">
              {mock.map__button__canada}
            </label>
          </div>

          {/* different maps render */}
          {mapComponent}

          <p className="calcBoxDelivery__map__title">
            {mock.port__title}
          </p>

          <div className="calcBoxDelivery__map__ports">
            <span className="calcBoxDelivery__map__port">
              <input
                id="port_german"
                type="radio"
                name="port"
                value={MAP_CONFIG.german}
                hidden
                onChange={e => {handleChangePort(e.target.value)}}
              />
              <label htmlFor="port_german" >
                <MapGerman color={port === MAP_CONFIG.german ? "#223C2B" : "#C4C4C4"} />
              </label>

              <p className="calcBoxDelivery__map__port__country">
                {mock.port__country__german}
              </p>
              <p className="calcBoxDelivery__map__port__city">
                {mock.port__city__german}
              </p>
            </span>

            <span className="calcBoxDelivery__map__port">
              <input
                id="port_poland"
                type="radio"
                name="port"
                value={MAP_CONFIG.poland}
                hidden
                onChange={e => {handleChangePort(e.target.value)}}
              />
              <label htmlFor="port_poland">
                <MapPoland color={port === MAP_CONFIG.poland ? "#223C2B" : "#C4C4C4"} />
              </label>

              <p className="calcBoxDelivery__map__port__country">
                {mock.port__country__poland}
              </p>
              <p className="calcBoxDelivery__map__port__city">
                {mock.port__city__poland}
              </p>
            </span>
          </div>
        </div>

        <div className="calcBoxDelivery__resultsCont">
          <CalcBox text={`${mock.calc__box__local__divivery} ${map === MAP_CONFIG.usa ? mock.calc__box__local__divivery__usa : mock.calc__box__local__divivery__canada}`} value={localStateDelivery} />

          <CalcBox text={mock.calc__box__divivery__to__port} value={Number(localStateDelivery) ? toPortDelivery : "0.00"} />

          <CalcBox text={mock.calc__box__divivery__container__and__broker} value={containerAndBroker} />
        </div>

        <div className="calcBoxDelivery__resultsCont">
          <CalcBox text={mock.calc__box__divivery__documents} value={(Number(localStateDelivery) && Number(toPortDelivery) && documentsDelivery) || "0.00"} />

          <CalcBox text={mock.calc__box__divivery__complex__service} value={(Number(localStateDelivery) && Number(toPortDelivery) && complex) || "0.00"} />
        </div>
      </div>


      <div className="calcBoxDelivery__footer">
        <p>
          {mock.footer}
        </p>

        <p>
          {`$${totalDeliveryPrice}`}
        </p>
      </div>
    </div>
  );
};
