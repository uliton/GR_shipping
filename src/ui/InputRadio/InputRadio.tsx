import React from "react";
import "./InputRadio.scss";

type Props = {
  name: string,
  id: string,
  text: string,
  value: string,
  setValue: (_: string) => void,
}

export const InputRadio: React.FC<Props> = ({ name, id, text, value, setValue }) => {

  const handleChangeInsurance = (value: string) => {
    setValue(value);
  }

  return (
    <div className="input__radio__box">
      <input
        id={id}
        type="radio"
        name={name}
        className="input__radio__box__item"
        hidden
        value={value}
        onChange={e => {handleChangeInsurance(e.target.value)}}
      />
      <label htmlFor={id} className="input__radio__box__label">
        {text}
      </label>
    </div>
  );
};
