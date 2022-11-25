import React from "react";
import MOCK from "./mock.json";

export const LanguageContext = React.createContext('polish');

export const getMock = (language: string) => {
  // @ts-ignore
  return MOCK[language];
}