import React, { useState } from "react";
import copart from '../../images/calculator/auctions/copart.png';
import manheim from '../../images/calculator/auctions/manheim.png';
import aiia from '../../images/calculator/auctions/aiia.png';
import cars from '../../images/calculator/cars.png';
import category_1 from '../../images/calculator/categories/category_1.png'
import category_2 from '../../images/calculator/categories/category_2.png'
import category_3 from '../../images/calculator/categories/category_3.png'
import map from '../../images/calculator/map.png';
import ukraine from '../../images/calculator/ports/ukraine.png';
import german from '../../images/calculator/ports/german.png';
import georgia from '../../images/calculator/ports/georgia.png';

export const Calculator: React.FC = () => {
  const [categoryImage, setCategoryImage] = useState(category_1);

  const handleChangeCategory = (value: string) => {
    switch (value) {
      case "first":
        setCategoryImage(category_1);
        break;
      case "second":
        setCategoryImage(category_2);
        break;
      case "third":
        setCategoryImage(category_3);
        break;
      default:
        setCategoryImage(category_1);
    }
  }

  return (
    <div className="calculator">


      {/* header */}
      <div className="calculator__header calcH">
        <p className="calcH__location">
          Головна
        </p>

        <div className="calcH__form">
          <p className="calcH__form__title">
            Вставте посилання з Copart або IAAI:
          </p>

          <div className="calcH__form__container">
            <input
              type="text"
              placeholder="https://www.copart.com/lot/50811178"
              className="calcH__form__container__input"
            />

            <button type="button" className="calcH__form__container__button">
              Сканувати
            </button>
          </div>
        </div>

        <p className="calcH__footer">
          Або введіть дані самостійно:
        </p>
      </div>


      {/* box 1 */}

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
                  value="petrol"
                  hidden
                />
                <label htmlFor="engine_petrol" className="calcBoxCustoms__infoCont__engine__button">
                  Бензин
                </label>
              
                <input
                  id="engine_disel"
                  type="radio"
                  name="engine"
                  value="disel"
                  hidden
                />
                <label htmlFor="engine_disel" className="calcBoxCustoms__infoCont__engine__button">
                  Дизель
                </label>

                <input
                  id="engine_hybrid"
                  type="radio"
                  name="engine"
                  value="hybrid"
                  hidden
                />
                <label htmlFor="engine_hybrid" className="calcBoxCustoms__infoCont__engine__button">
                  Гібрид
                </label>
             
                <input
                  id="engine_electro"
                  type="radio"
                  name="engine"
                  value="electro"
                  hidden
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
                  value="copart"
                  hidden
                />
                <label htmlFor="auction_copart" className="calcBoxCustoms__infoCont__auction__button">
                  <img src={copart} alt="copart" className="calcBoxCustoms__infoCont__auction__button--copart" />
                </label>
          
                <input
                  id="auction_manheim"
                  type="radio"
                  name="auction"
                  value="manheim"
                  hidden
                />
                <label htmlFor="auction_manheim" className="calcBoxCustoms__infoCont__auction__button">
                  <img src={manheim} alt="manheim" className="calcBoxCustoms__infoCont__auction__button--manheim" />
                </label>
          
                <input
                  id="auction_aiia"
                  type="radio"
                  name="auction"
                  value="aiia"
                  hidden
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

                <input type="text" placeholder="2016" className="calcBoxCustoms__infoCont__addition__box__input"/>
              </div>

              <div className="calcBoxCustoms__infoCont__addition__box">
                <p className="calcBoxCustoms__infoCont__addition__box__title">
                  Вартість:
                </p>

                <input type="text" placeholder="10000" className="calcBoxCustoms__infoCont__addition__box__input" />
              </div>

              <div className="calcBoxCustoms__infoCont__addition__box">
                <p className="calcBoxCustoms__infoCont__addition__box__title">
                  Об'єм двигуна:
                </p>

                <input type="text" placeholder="2.6" className="calcBoxCustoms__infoCont__addition__box__input" />
              </div>
            </div>
          </div >

          <div className="calcBoxCustoms__imageCont">
            <img src={cars} alt="cars" className="calcBoxCustoms__imageCont__image" />
          </div>

          <div className="calcBoxCustoms__resultsCont">
            <div className="calcBoxCustoms__resultsCont__box">
              <p className="calcBoxCustoms__resultsCont__box__name">
                Вартість лоту
              </p>

              <p className="calcBoxCustoms__resultsCont__box__cost">
                $0.00
              </p>
            </div>

            <div className="calcBoxCustoms__resultsCont__box">
              <p className="calcBoxCustoms__resultsCont__box__name">
                Збори аукціону
              </p>

              <p className="calcBoxCustoms__resultsCont__box__cost">
                $0.00
              </p>
            </div>
          </div>

          <div className="calcBoxCustoms__resultsCont">
            <div className="calcBoxCustoms__resultsCont__box">
              <p className="calcBoxCustoms__resultsCont__box__name">
                Акциз
              </p>

              <p className="calcBoxCustoms__resultsCont__box__cost">
                $0.00
              </p>
            </div>

            <div className="calcBoxCustoms__resultsCont__box">
              <p className="calcBoxCustoms__resultsCont__box__name">
                Мито
              </p>

              <p className="calcBoxCustoms__resultsCont__box__percent">
                10%
              </p>

              <p className="calcBoxCustoms__resultsCont__box__cost">
                $0.00
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
                $0.00
              </p>
            </div>
          </div>
        </div>



        <div className="calcBoxCustoms__footer">
          <p>
            Сума митних платежів
          </p>

          <p>
            $0.00
          </p>
        </div>
      </div>


      {/* box 2 */}

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
                value="first"
                hidden
                onChange={e => {handleChangeCategory(e.target.value)}}
              />
              <label htmlFor="category_1" className="calcBoxDelivery__category__button">
                <p className="calcBoxDelivery__category__button__title">І категорія</p>
                <p className="calcBoxDelivery__category__button__text">седан хетчбек універсал</p>
              </label>

              <input
                id="category_2"
                type="radio"
                name="category"
                value="second"
                hidden
                onChange={e => {handleChangeCategory(e.target.value)}}
              />
              <label htmlFor="category_2" className="calcBoxDelivery__category__button">
                <p className="calcBoxDelivery__category__button__title">ІІ категорія</p>
                <p className="calcBoxDelivery__category__button__text">кросовер позашляховик мінівен</p>
              </label>

              <input
                id="category_3"
                type="radio"
                name="category"
                value="third"
                hidden
                onChange={e => {handleChangeCategory(e.target.value)}}
              />
              <label htmlFor="category_3" className="calcBoxDelivery__category__button">
                <p className="calcBoxDelivery__category__button__title">ІІІ категорія</p>
                <p className="calcBoxDelivery__category__button__text">пікап мікроавтобус та ін.</p>
              </label>
            </div>

            <img src={categoryImage} alt="category"  className="calcBoxDelivery__category__image"/>
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
                value="usa"
                hidden
              />
              <label htmlFor="map_usa" className="calcBoxDelivery__map__button">
                США
              </label>

              <input
                id="map_canada"
                type="radio"
                name="map"
                value="canada"
                hidden
              />
              <label htmlFor="map_canada" className="calcBoxDelivery__map__button">
                Канада
              </label>
            </div>

            {/* map */}
            <img src={map} alt="map" className="calcBoxDelivery__map__image" />

            <p className="calcBoxDelivery__map__title">
              Порт доставки:
            </p>

            <div className="calcBoxDelivery__map__ports">
              <span className="calcBoxDelivery__map__port">
                <img src={ukraine} alt="ukraine" className="calcBoxDelivery__map__port__image__ukraine" />

                <p className="calcBoxDelivery__map__port__country">
                  Україна
                </p>
                <p className="calcBoxDelivery__map__port__city">
                  (Одеса)
                </p>
              </span>

              <span className="calcBoxDelivery__map__port">
                <img src={german} alt="german" className="calcBoxDelivery__map__port__image__german" />

                <p className="calcBoxDelivery__map__port__country">
                  Німеччина
                </p>
                <p className="calcBoxDelivery__map__port__city">
                  (Бремен)
                </p>
              </span>

              <span className="calcBoxDelivery__map__port">
                <img src={georgia} alt="georgia" className="calcBoxDelivery__map__port__image__georgia"/>

                <p className="calcBoxDelivery__map__port__country">
                  Грузія
                </p>
                <p className="calcBoxDelivery__map__port__city">
                  (Батумі)
                </p>
              </span>
            </div>
          </div>

          <div className="calcBoxDelivery__resultsCont">
            <div className="calcBoxDelivery__resultsCont__box">
              <p className="calcBoxDelivery__resultsCont__box__name">
                Доставка по Америці
              </p>

              <p className="calcBoxDelivery__resultsCont__box__cost">
                $0.00
              </p>
            </div>

            <div className="calcBoxDelivery__resultsCont__box">
              <p className="calcBoxDelivery__resultsCont__box__name">
                Доставка у порт призначення
              </p>

              <p className="calcBoxDelivery__resultsCont__box__cost">
                $0.00
              </p>
            </div>
          </div>

          <div className="calcBoxDelivery__resultsCont">
            <div className="calcBoxDelivery__resultsCont__box">
              <p className="calcBoxDelivery__resultsCont__box__name">
                Надсилання міжнародної пошти
              </p>

              <p className="calcBoxDelivery__resultsCont__box__cost">
                $0.00
              </p>
            </div>

            <div className="calcBoxDelivery__resultsCont__box">
              <p className="calcBoxDelivery__resultsCont__box__name">
                Експедирування + Брокер
              </p>

              <p className="calcBoxDelivery__resultsCont__box__cost">
                $0.00
              </p>
            </div>
          </div>
        </div>


        <div className="calcBoxDelivery__footer">
          <p>
            Вартість доставки
          </p>

          <p>
            $0.00
          </p>
        </div>
      </div>


      {/* box 3 */}

      <div className="calculator__box calcBoxTotalCost">
        <p className="calcBoxTotalCost__title">
          Загальна сума
        </p>

        <div className="calcBoxTotalCost__form calcGrid">
          <div className="calcBoxTotalCost__resultsCont">
            <span className="calcBoxTotalCost__resultsCont__box">
              <p className="calcBoxTotalCost__resultsCont__box__name">
                Вартість лоту
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>

            <span className="calcBoxTotalCost__resultsCont__box">
              <p className="calcBoxTotalCost__resultsCont__box__name">
                Збори аукціону
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>

            <span className="calcBoxTotalCost__resultsCont__box">
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
                2.5%, хв $200
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>
          </div>

          <div className="calcBoxTotalCost__resultsCont">
            <span className="calcBoxTotalCost__resultsCont__box">
              <p className="calcBoxTotalCost__resultsCont__box__name">
                Вартість розмитнення
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>

            <span className="calcBoxTotalCost__resultsCont__box">
              <p className="calcBoxTotalCost__resultsCont__box__name">
                Вартість доставки
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>

            <span className="calcBoxTotalCost__resultsCont__box">
              <p className="calcBoxTotalCost__resultsCont__box__name">
                Експедирування + Брокер
              </p>

              <p className="calcBoxTotalCost__resultsCont__box__cost">
                $0.00
              </p>
            </span>
          </div>
        </div>

        <div className="calcBoxTotalCost__footer">
          <div className="calcBoxTotalCost__footer__box">
            <p className="calcBoxTotalCost__footer__box__name">
              Підсумкова вартість з усіма платежами
            </p>

            <p className="calcBoxTotalCost__footer__box__cost">
              $0.00
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


    </div>
  );
};
