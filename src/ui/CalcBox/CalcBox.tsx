import React from "react";
import "./CalcBox.scss";

type Props = {
  text: string,
  // percent?: number | string,
  value: number | string,
}

export const CalcBox: React.FC<Props> = ({ text, value}) => (
  <span className="calcBox">
    <p className="calcBox__text">
      {text}
    </p>

    {/* <p className="calcBox__percent">
      {percent}
    </p> */}

    <p className="calcBox__value">
      {`$${value}`}
    </p>
  </span>
)