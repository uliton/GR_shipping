import React, { useState } from "react";
import { Routes, Route } from 'react-router';
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
import { Navigation } from "./components/Navigation";

import { Test } from "./components/Test/Test";
import { Admin } from "./components/Admin";
import { AdminCalc } from "./components/AdminCalc";
import { LanguageContext } from "./framework/LanguageContext";

// import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('polish');
  // const store = useSelector(store => store);
  // console.log(store);
  
  return (
    <LanguageContext.Provider value={language}>
      <div className="app">
        <Navigation language={language} setLanguage={setLanguage} />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/calculator" element={<AdminCalc />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Header />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}
