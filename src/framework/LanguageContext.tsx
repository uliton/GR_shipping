import React from "react";
import MOCK from "./mock.json";

export const LANGUAGE_CONFIG: LanguageConfig = {
  polish: 'polish',
  ukrainian: 'ukrainian',
}
export const LanguageContext = React.createContext('polish');

export const getMock = (language: string) => {
  // @ts-ignore
  return MOCK[language];
}