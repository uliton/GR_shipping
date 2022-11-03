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
        Калькулятор ДОСТАВКИ
      </p>


      <div className="calcBoxDelivery__form calcGrid">
        <div className="calcBoxDelivery__category">
          <p className="calcBoxDelivery__category__title">
            Кузов:
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
              <p className="calcBoxDelivery__category__button__title">І категорія</p>
              <p className="calcBoxDelivery__category__button__text">седан хетчбек універсал</p>
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
              <p className="calcBoxDelivery__category__button__title">ІІ категорія</p>
              <p className="calcBoxDelivery__category__button__text">кросовер позашляховик мінівен</p>
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
              <p className="calcBoxDelivery__category__button__title">ІІІ категорія</p>
              <p className="calcBoxDelivery__category__button__text">пікап мікроавтобус та ін.</p>
            </label>
          </div>

          <img src={categoryImage} alt="category" className="calcBoxDelivery__category__image"/>
        </div>

        <div className="calcBoxDelivery__map">
          <p className="calcBoxDelivery__map__title">
            Штат аукціону:
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
              США
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
              Канада
            </label>
          </div>

          {/* different maps render */}
          {mapComponent}

          <p className="calcBoxDelivery__map__title">
            Порт доставки:
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
                Німеччина
              </p>
              <p className="calcBoxDelivery__map__port__city">
                (Бремен)
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
                Польща
              </p>
              <p className="calcBoxDelivery__map__port__city">
                (Варшава)
              </p>
            </span>
          </div>
        </div>

        <div className="calcBoxDelivery__resultsCont">
          <CalcBox text={`Доставка з аукціону до порту в ${map === MAP_CONFIG.usa ? "Америці" : "Канаді"}`} value={localStateDelivery} />

          <CalcBox text="Доставка у порт призначення" value={+localStateDelivery ? toPortDelivery : "0.00"} />

          <CalcBox text="Загрузка, вигрузка контейнера + Брокер" value={containerAndBroker} />
        </div>

        <div className="calcBoxDelivery__resultsCont">
          <CalcBox text="Доставка документів" value={(+localStateDelivery && +toPortDelivery && documentsDelivery) || "0.00"} />

          <CalcBox text="Комплексні послуги" value={(+localStateDelivery && +toPortDelivery && complex) || "0.00"} />
        </div>
      </div>


      <div className="calcBoxDelivery__footer">
        <p>
          Вартість доставки
        </p>

        <p>
          {`$${(+localStateDelivery && +toPortDelivery && documentsDelivery && complex && +totalDeliveryPrice)}.00`}
        </p>
      </div>
    </div>
  );
};
