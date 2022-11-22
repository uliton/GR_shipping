import React, { useState } from "react";
import "./AdminCalc.scss";

export const AdminCalc: React.FC = () => {
  const [year, setYear] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [engineVolume, setEngineVolume] = useState<string>('');
  const [engine, setEngine] = useState<string>('');
  const [auction, setAuction] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  // const [state, setState] = useState<string>();
  // const [city, setCity] = useState<string>();
  // const [, ] = useState();

  const integer = '1234567890';
  const handeChangeYear = (e: string) => {
    console.log(e);
    
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

  return (
    <div className="">
      <h3>
        Lot Info
      </h3>

      <input
        type="text"
        placeholder="year"
        className="input"
        value={year}
        onChange={e => handeChangeYear(e.target.value)}
      />

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

      {year && price && engineVolume && (
        <select className="input" onChange={e => setEngine(e.target.value)}>
          <option selected disabled >двигун</option>
          <option value="бензин">бензин</option>
          <option value="дизель">дизель</option>
          <option value="гібрид">гібрид</option>
          <option value="електро">електро</option>
        </select>
      )}

      {engine && (
        <select className="input" onChange={e => setAuction(e.target.value)}>
          <option selected disabled >аукціон</option>
          <option value="copart">copart</option>
          <option value="aiia">aiia</option>
        </select>
      )}
      
      {auction && (
        <select className="input" onChange={e => setCategory(e.target.value)}>
          <option selected disabled >категорія</option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
        </select>
      )}

      {category && (
        <select className="input" onChange={e => setCountry(e.target.value)}>
          <option selected disabled >країна</option>
          <option value="usa">usa</option>
          <option value="canada">canada</option>
        </select>
      )}
    </div>
  );
};
