import { useTheme } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import Services from "./pages/Services/Services";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import StartupAppDevelopment from "./pages/Startup App Development/StartupAppDevelopment";
import { customTheme } from "./assets/CustomThemes/CustomTheme";
import PromoBanner from "./components/Global Components/PromoBanner";
import FooterApp from "./components/Footer/Footer";
import CustomSoftwareDevelopment from "./components/CustomSoftwareDevelopment.tsx/CustomSoftwareDevelopment";
import IphoneAppDevelopment from "./components/iphone-app-development/IphoneAppDevelopment";
import RecruitmentInfo from "./components/Recruitment";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import AuthRoute from "./AuthRoute";
import LoginPage from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";
import { Logout } from "@mui/icons-material";

initializeApp(config.firebaseConfig);

function App() {
  // const theme = useTheme()
  // console.log(theme);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <PromoBanner />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="/custom_software"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/crossplatform" element={<IphoneAppDevelopment />} />
          <Route
            path="/startup_app_development"
            element={<StartupAppDevelopment />}
          />
          <Route path="/Recruitment" element={<RecruitmentInfo />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <FooterApp />
      </ThemeProvider>
    </>
  );
}

export default App;
