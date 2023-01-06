import React from "react";
import RecipeReviewCard from "../Card/Card";
import { Box, Typography, useTheme } from "@mui/material";
// import MobileFriendlyIcon from "@mui/icons-material/Android";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import TerminalIcon from "@mui/icons-material/Terminal";
// import AppleIcon from "@mui/icons-material/Apple";
import AirIcon from '@mui/icons-material/Air';
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CustomButton from "../Global Components/CustomButton";
const Services = () => {
  const theme = useTheme()
  const servicesData = [
    {
      icon: <TerminalIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "40px", }} />,
      title: "Web Application Development",
      description: "We design and build stunning, modern web applications from scratch with the latest technologies that are fast, performant, secure and scalabale.",
      linkText: "Get a Demo"
    }, {
      icon: <MobileFriendlyIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "40px", }} />,
      title: "Mobile Application Development",
      description: "Nexxt have brilliant Mobile Expert Teams that can build cross platform mobile apps blazing fast, saving development time and cost.",
      linkText: "Learn More"
    }, {
      icon: <AirIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "40px", }} />,
      title: "AI First Development",
      description: "The future is Artificially Super Intelligent and so are We, AI Experts that creates application for Automation, Accuracy and Correctness.",
      linkText: "Talk to an AI Expert"
    }, {
      icon: <FingerprintIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "40px", }} />,
      title: "BlockChain and Financial Technology",
      description: "Our experts combine cutting edge AI and blockchain technology to bring you platforms capable of handling the complex financial tasks of tomorrow, today.",
      linkText: "Get More Info"
    },
  ]
  return (
    <Box
      sx={{ backgroundColor: "#282526", flexDirection: { xs: "column-reverse", md: "row", xl: "row" }, height: { xl: "600px", xs: "auto", md: "650px" } }}
      padding="140px 0 0 0"
      display="flex"
      justifyContent="center"
      alignItems='center'

    >
      <Box display="flex" justifyContent="center"
        alignItems='center' sx={{ flexWrap: "wrap", maxWidth: "800px" }}>
        {servicesData.map((servicesObj, index) => (
          <Box padding="10px" key={index}>
            <RecipeReviewCard

              icon={
                servicesObj.icon
              }
              title={servicesObj.title}
              description={servicesObj.description}
              linkText={servicesObj.linkText}
            />

          </Box>
        ))}

      </Box>
      <Box color="white" sx={{ width: { xl: "500px", md: "400px", xs: "85%" }, height: "auto" }} >
        <Box display="flex" justifyContent="start" alignItems="center" position="relative" mb="20px">
          <Box
            sx={{
              "&::before": {
                bgcolor: "#ee3824",
                content: '""',
                height: "2px",
                position: "absolute",
                marginBottom: "20px",
                width: "70px",
              },
            }}
          ></Box>
          <Typography sx={{ color: "white", left: "80px", position: "absolute", fontWeight: "bold" }}>Services</Typography>
        </Box>
        <Box sx={{ width: { md: "400px", xl: "500px" } }}>
          <Typography variant="h4" fontWeight="bold" lineHeight="45px" className="font-bold" sx={{ fontSize: { md: "35px" } }}>
            An AI-First Web and Mobile Development Company
          </Typography>
        </Box>
        <Box sx={{ width: { md: "350px", xl: "500px", xs: "90%" } }}>
          <Typography variant="body1" mt="10px" textAlign={"justify"}>
            This is an era of a digital future & technology is getting polished everyday. Every digital touchpoint offers the chance to construct connections with customers and establish a brand with its target market. Nexxt AI is an AI First company, Our expert team workout the most complex problems with technology expertise knowledge and AI Strategies that creates Top of the line digital products for web, mobile and desktop.
          </Typography>
        </Box>
        {/* <Button
          sx={{
            fontWeight: "bold",
            borderRadius: "10px",
            mt: "20px",
            color: "white",
            padding: "10px 30px 10px 30px",
            background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
          }}
          className="font-bold"
        >
          Lets Start
        </Button> */}
        <CustomButton text="LET'S START" buttonSize="8px 30px" margin="10px" background={`${theme.palette.background.default}`} />
      </Box>
    </Box>
  );
};
export default Services;
