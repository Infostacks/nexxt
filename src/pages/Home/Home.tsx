import React from "react";
import FooterApp from "../../components/Footer/Footer";
import SideBanner from "../../components/Global Components/SideBanner";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Home = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(13,19,38,1) 0%, rgba(252,26,5,1) 23%, rgba(246,29,7,1) 61%)",
      }}
    >
      {/* <Header /> */}
      <Main />

      {/* <FooterApp /> */}
    </div>
  );
};
export default Home;
