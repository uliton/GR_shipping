import React, { useState } from "react";
import light from "../../images/nav/light.svg"
import dark from "../../images/nav/dark.svg"
import "./ModeSelect.scss";

export const ModeSelect: React.FC = () => {
  const [mode, setMode] = useState<boolean>(true);

  return (
    <>
      {mode
        ? (
          <button
            type="button"
            className="modeSelect modeSelect--light"
            onClick={() => setMode(!mode)}
          >
            <div className="modeSelect__circle"></div>
            <img src={light} alt="light" />
          </button>
        )
        : (
          <button
            type="button"
            className="modeSelect modeSelect--dark"
            onClick={() => setMode(!mode)}
          >
            <img src={dark} alt="dark" />
            <div className="modeSelect__circle"></div>
          </button>
        )
      }
    </>
  )
}