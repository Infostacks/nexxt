import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FooterApp from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [window.location.pathname])
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
