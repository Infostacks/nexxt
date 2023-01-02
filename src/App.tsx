import { useTheme } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import StartupAppDevelopment from "./pages/Startup App Development/StartupAppDevelopment";
import { customTheme } from "./assets/CustomThemes/CustomTheme";
import PromoBanner from "./components/Global Components/PromoBanner";
import FooterApp from "./components/Footer/Footer";
import CustomSoftwareDevelopment from "./components/CustomSoftwareDevelopment.tsx/CustomSoftwareDevelopment";
import IphoneAppDevelopment from "./components/iphone-app-development/IphoneAppDevelopment";
import Contact from "./components/Global Components/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import NewYork from "./pages/Locations/NewYork";
import Ecommerence from "./pages/Solutions/Ecommerence";

function App() {
  // const theme = useTheme()
  // console.log(theme);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <PromoBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom_software" element={<CustomSoftwareDevelopment />} />
          <Route path="/crossplatform" element={<IphoneAppDevelopment />} />
          <Route path="/startup_app_development" element={<StartupAppDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/newyorkcity" element={<NewYork />} />
          <Route path="/ecommerence" element={<Ecommerence />} />
        </Routes>
        <FooterApp />
      </ThemeProvider>
    </>
  );
}

export default App;
