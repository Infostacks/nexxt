import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CustomSoftwareDevelopment from "./components/CustomSoftwareDevelopment.tsx/CustomSoftwareDevelopment";
import FooterApp from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IphoneAppDevelopment from "./components/iphone-app-development/IphoneAppDevelopment";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom_software" element={<CustomSoftwareDevelopment />} />
        <Route path="/iphone" element={<IphoneAppDevelopment />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
