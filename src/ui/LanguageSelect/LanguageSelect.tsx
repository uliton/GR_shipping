import React, { useState } from "react";
import { LANGUAGE_CONFIG } from "../../framework/LanguageContext";
import flag_ua from "../../images/nav/flag_ua.svg";
import flag_pl from "../../images/nav/flag_pl.svg";
import arrow from "../../images/nav/arrow.svg";

import "./LanguageSelect.scss";

type Props = {
  language: string,
  setLanguage: (_: string) => void,
}

export const LanguageSelect: React.FC<Props> = ({ language, setLanguage }) => {
  const [flag, setFlag] = useState<string>(flag_pl);
  const [select, setSelect] = useState<boolean>(false);

  const handleSelect = () => {
    setSelect(!select);
  }

  const handleSelectLanguage = (language: string) => {
    if (language === LANGUAGE_CONFIG.polish) {
      setFlag(flag_pl);
      setLanguage('polish');
      setSelect(!select);
    }

    if (language === LANGUAGE_CONFIG.ukrainian) {
      setFlag(flag_ua);
      setLanguage('ukrainian');
      setSelect(!select);
    }
  }

  return (
    <div className="languageSelect">
      <button
        type="button"
        className="languageSelect__button"
        onClick={handleSelect}
      >
        <img src={flag} alt="pl" className="languageSelect__flag" />
        
        {language === LANGUAGE_CONFIG.polish ? "Język" : "Мова"}
        
        <img src={arrow} alt="" />
      </button>

      {select && (
        <div className="languageSelect__container">
          <button
            type="button"
            className="languageSelect__button languageSelect__button--flag"
            onClick={() => handleSelectLanguage(LANGUAGE_CONFIG.polish)}
          >
            <img src={flag_pl} alt="pl" className="languageSelect__flag" />
            Polski
          </button>

          <button
            type="button"
            className="languageSelect__button languageSelect__button--flag"
            onClick={() => handleSelectLanguage(LANGUAGE_CONFIG.ukrainian)}
          >
            <img src={flag_ua} alt="ua" className="languageSelect__flag" />
            Українська
          </button>
        </div>
      )}
    </div>
  );
};
