import React, { useState } from "react";
import { Routes, Route } from 'react-router';
import { LanguageContext } from "./framework/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Introduction } from "./pages/Introduction";
import { Main } from "./pages/Main";
import { Admin } from "./pages/Admin";

import { Test } from "./components/Test/Test";

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
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Introduction />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}
