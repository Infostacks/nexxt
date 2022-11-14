import React from "react";
import RecipeReviewCard from "../../Card/Card";
import { Box, Button, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import TerminalIcon from "@mui/icons-material/Terminal";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const Services = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "#282526" }}
      paddingTop="120px"
      paddingBottom="0px"
      height="100%"
      minHeight="screen"
      width="screen"
    >
      {/* Service Cards */}
      <Box display="flex" sx={{ flexWrap: "wrap", maxWidth: "800px" }}>
        <Box padding="10px">
          <RecipeReviewCard
            icon={
              <TerminalIcon
                sx={{
                  fontSize: "50px",
                  color: "#f37a20",
                  ":hover": {
                    color: "ffffff",
                  },
                }}
              />
            }
            title="Software Development"
            description="Our dedicated teams onboard versatile developers and technical personnel capable of acknowledging your project’s custom requirements."
          />
        </Box>
        <Box padding="10px">
          <RecipeReviewCard
            icon={
              <AndroidIcon
                sx={{
                  color: "#f37a20",
                  fontSize: "50px",
                }}
              />
            }
            title="Android Application Development"
            description="A team of certified android developers dedicated to building successful
        applications."
          />
        </Box>
        <Box padding="10px">
          <RecipeReviewCard
            icon={
              <AppleIcon
                sx={{
                  color: "#f37a20",
                  fontSize: "50px",
                }}
              />
            }
            title="IPhone Application Development"
            description="Building applications that generate the best user experience and achieve business goals."
          />
        </Box>
        <Box padding="10px">
          <RecipeReviewCard
            icon={
              <SportsEsportsIcon
                fontSize="large"
                sx={{
                  color: "#f37a20",
                  fontSize: "50px",
                }}
              />
            }
            title="Game Development"
            description="We create cross platform game development solutions that engage and captivate users."
          />
        </Box>
      </Box>

      {/* Text Section  */}
      <Box color="white" width="500px">
        <Typography fontFamily="Gilroy-Bold" fontSize="42px" fontWeight="bold">
          Customized Software Programs and Mobile App Development
        </Typography>
        <Typography fontSize="17px" mt="10px">
          The future is digital, there’s no doubt about it. At TekRevol, we
          believe that each digital touch-point is an opportunity to create
          meaningful interactions and build a mutually beneficial connection
          between a brand and its audience. We offer digital products and
          customized software development services with intelligent
          functionalities and appealing visual aesthetics for multiple
          platforms.
        </Typography>
        <Button
          sx={{
            fontWeight: "bold",
            borderRadius: "10px",
            mt: "50px",
            color: "white",
            padding: "10px 30px 10px 30px",
            letterSpacing: 3,
            background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
          }}
        >
          Lets Start
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
