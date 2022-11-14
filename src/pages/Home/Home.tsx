import React from "react";
import FooterApp from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Home = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #ee3824, #f24920, #f5591b, #f86717, #fb7412, #f97418, #f8751d, #f67521, #ef692a, #e75e32, #dd5437, #d34a3c)",
      }}
    >
      <Header />
      <Main />
      <FooterApp />
    </div>
  );
};

export default Home;
