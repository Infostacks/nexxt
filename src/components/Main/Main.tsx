import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/images/4.png";
import img2 from "../../assets/images/images/7.png";
import img3 from "../../assets/images/images/3.png";
import { Footer } from "../Footer/Footer.styles";
import FooterApp from "../Footer/Footer";
import AndroidIcon from "@mui/icons-material/Android";
import TerminalIcon from "@mui/icons-material/Terminal";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import RecipeReviewCard from "../Card/Card";
import { Box, Button, Typography } from "@mui/material";

const Main = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        // autoPlay={true}
        // interval={3000}
      >
        <div style={{ height: "700px", color: "white" }}>this is slide 1</div>
        <div style={{ height: "700px" }}>this is slide 2</div>
        <div style={{ height: "700px" }}>this is slide 3</div>
        {/* <div>
          <img style={{ height: "700px" }} src={img1} />
        </div>
        <div>
          <img style={{ height: "900px" }} src={img2} />
        </div> */}
        <Box display="flex">
          <div>
            <h2>Custom Software Development Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            style={{ height: "700px", width: "35%", float: "right" }}
            src={img3}
          />
        </Box>
      </Carousel>

      <Box
        justifyContent="center"
        sx={{ backgroundColor: "#282526" }}
        padding="100px 0 0 0"
        height="550px"
        width="screen"
        display="flex"
      >
        <Box display="flex" sx={{ flexWrap: "wrap", maxWidth: "800px" }}>
          <Box padding="10px">
            <RecipeReviewCard
              icon={
                <TerminalIcon
                  sx={{
                    color: "#f37a20",
                    fontSize: "50px",
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
        <Box color="white" width="500px">
          <Typography
            fontFamily="Gilroy-Bold"
            fontSize="42px"
            fontWeight="bold"
          >
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
              background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
            }}
          >
            Lets Start
          </Button>
        </Box>
      </Box>
      <Box
        justifyContent="center"
        sx={{ backgroundColor: "#f5f7fa" }}
        padding="100px 0 0 0"
        height="550px"
        width="screen"
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography pt="20px" variant="h2" fontWeight="bold" fontSize="20px">
            Making A Difference Through Strategic Technology Partnerships
          </Typography>
          <Typography>
            We contribute to these partnership programs, supported by global
            technology experts. Partnering with industry leaders, we offer
            quality technology solutions that meet your business needs.
          </Typography>
        </Box>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div style={{ height: "700px", color: "black" }}>this is slide 1</div>
          <div style={{ height: "700px" }}>this is slide 2</div>
          <div style={{ height: "700px" }}>this is slide 3</div>
        </Carousel>
      </Box>
    </>
  );
};

export default Main;
