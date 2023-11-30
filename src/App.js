import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/HomePage.js";
import SignIn from "./pages/SignIn.js";
import Login from "./pages/Login.js";


function App() {
 
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contactus" element={<ContactUs />} />   */}
      </Routes>
      {/* <TopHeader />
      <Main/> */}
    </div>
  );
}

export default App;

