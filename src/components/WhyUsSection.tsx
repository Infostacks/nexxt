import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./Global Components/CustomButton";
import { whyUsReasons } from "../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";

const WhyUsSection = () => {
  return (
    <Grid
      container
      sx={{
        py: "95px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row-reverse",
      }}
    >
      <Grid md={5} xs={12} sx={{ px: "15px" }}>
        <Typography variant="h3" mb="20px">
          Why Choose Tekrevol
          <Typography color="#7a7a7a" sx={{ fontSize: "28px" }}>
            As Your iOS app development Partner?
          </Typography>
        </Typography>

        <Typography mb="20px">
          iPhone application developers challenge the boundaries and go beyond
          to deliver impeccable to businesses of all sizes. And that’s exactly
          what we envision for your iPhone applications.
        </Typography>
        <Typography mb="20px">
          Whether it’s about choosing the right app development approach and the
          technology stack or going beyond the conventional development aspects
          to create a significant impact, we are well-versed in all of them.
        </Typography>
        <Typography mb="20px">
          Here are some of the most prominent reasons for choosing Tekrevol as
          your iPhone app and iOS software development company:
        </Typography>

        <List disablePadding>
          {whyUsReasons.map((whyUsReason, index) => (
            <ListItem
              key={index}
              sx={{
                p: "0px",
                pl: "36px",
                "&::before": {
                  backgroundImage:
                    "url(https://www.tekrevol.com/assets/images-new/services/ios/arrow.png)",
                  content: '""',
                  height: "20px",
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "29px",
                  backgroundRepeat: "no-repeat",
                },
              }}
            >
              <Typography mb="15px">{whyUsReason}</Typography>
            </ListItem>
          ))}
        </List>

        <CustomButton
          text={"GET AN IOS APP FOR YOU BUSINESS!"}
          buttonSize={"6px 35px"}
        ></CustomButton>
        {/* </Box> */}
      </Grid>

      <Grid
        sx={{
          px: "15px",
          height: { xs: "433px", md: "560px" },
          width: { xs: "355px", md: "457px" },
        }}
        md={4}
        xs={6}
        component="img"
        src="https://www.tekrevol.com/assets/images-new/services/ios/sec04_img.png"
      ></Grid>
    </Grid>
  );
};

export default WhyUsSection;
