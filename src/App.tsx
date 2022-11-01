import React from "react";
import { Routes, Route } from "react-router-dom";
import FooterApp from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <FooterApp /> */}
    </>
  );
}

export default App;
