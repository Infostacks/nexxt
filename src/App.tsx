import React from "react";
import { Routes, Route } from "react-router-dom";
import FooterApp from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <FooterApp /> */}
      </ParallaxProvider>
    </>
  );
}

export default App;
