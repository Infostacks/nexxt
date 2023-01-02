import React from "react";
import RecipeReviewCard from "../Card/Card";
import { Box, Typography, useTheme } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import TerminalIcon from "@mui/icons-material/Terminal";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CustomButton from "../Global Components/CustomButton";
const Services = () => {
  const theme = useTheme()
  const servicesData = [
    {
      icon: <TerminalIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "50px", }} />,
      title: "Software Development",
      description: "Our committed teams have diverse developers and technical staff who can understand and develop your desired software."
    }, {
      icon: <AndroidIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "50px", }} />,
      title: "Android Application Development",
      description: "We have experienced android developers who are devoted to building and launching android applications."
    }, {
      icon: <AppleIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "50px", }} />,
      title: "IPhone Application Development",
      description: "We develop ios apps to provide the best user experience, We will help in your business needs to achieve your business goals."
    }, {
      icon: <SportsEsportsIcon sx={{ marginLeft: "10px", color: "#f37a20", fontSize: "50px", }} />,
      title: "Game Development",
      description: "We are capable of building complicated games. We provide game development solutions that hold and delight users."
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
            Customized Software Programs and Mobile App Development
          </Typography>
        </Box>
        <Box sx={{ width: { md: "350px", xl: "500px", xs: "90%" } }}>
          <Typography variant="body1" mt="10px" textAlign={"justify"}>
            This is an era of a digital future & technology is getting polished everyday. Every digital touchpoint offers the chance to construct connections with customers and establish a brand with its target market. Nexxt offers digitalization, our developers are able to build customized software and complicated mobile apps in multiple languages and platforms.
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
