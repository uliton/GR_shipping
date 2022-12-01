import React, { useState } from "react";
import { Routes, Route } from 'react-router';
import { Calculator } from "./components/Calculator";
import { Navigation } from "./components/Navigation";

import { Test } from "./components/Test/Test";
import { Admin } from "./components/Admin";
import { AdminCalc } from "./components/AdminCalc";
import { LanguageContext } from "./framework/LanguageContext";
import { Introduction } from "./pages/Introduction";
import { Main } from "./pages/Main";

export const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('polish');

  return (
    <LanguageContext.Provider value={language}>
      <div className="app">
        <Navigation language={language} setLanguage={setLanguage} />

        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/main" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/calculator" element={<AdminCalc />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Introduction />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}
