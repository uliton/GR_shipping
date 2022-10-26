import React from "react";
import { Routes, Route } from 'react-router';
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
// import { Navigation } from "./components/Navigation";

export const App: React.FC = () => {
  return (
    <div className="app">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Header />} />
      </Routes>
    </div>
  );
}
