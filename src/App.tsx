import React from "react";
import { Routes, Route } from 'react-router';
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
import { Navigation } from "./components/Navigation";

import { Test } from "./components/Test/Test";
import { Admin } from "./components/Admin";
import { AdminCalc } from "./components/AdminCalc";

// import { useSelector } from "react-redux";

export const App: React.FC = () => {
  // const store = useSelector(store => store);
  // console.log(store);
  
  return (
    <div className="app">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/calculator" element={<AdminCalc />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Header />} />
      </Routes>
    </div>
  );
}
