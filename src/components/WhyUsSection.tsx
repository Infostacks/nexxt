import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./Global Components/CustomButton";

export interface WhyUsProps {
  whyUsImgLink: string;
  whyUsImgwidth: object;
  whyUsImgheight: object;
  whyUsTittle: string;
  whyUsSubTittle: string;
  WhyUsdescs: string[];
  whyUsReasons?: string[];
}

const WhyUsSection = ({
  whyUsImgLink,
  whyUsImgwidth,
  whyUsImgheight,
  whyUsTittle,
  whyUsSubTittle,
  WhyUsdescs,
  whyUsReasons,
}: WhyUsProps) => {
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
          {whyUsTittle}
          <Typography color="#7a7a7a" sx={{ fontSize: "28px" }}>
            {whyUsSubTittle}
          </Typography>
        </Typography>

        <Typography mb="20px">{WhyUsdescs[0]}</Typography>
        <Typography mb="20px">{WhyUsdescs[1]}</Typography>
        <Typography mb="20px">{WhyUsdescs[2]}</Typography>


        {whyUsReasons ? (
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
        ) : (
          <Typography></Typography>
        )}
        <CustomButton
          text={"Get Custom Software For your Business!"}
          buttonSize={"6px 35px"}
        ></CustomButton>
      </Grid>

      <Grid
        sx={{
          px: "15px",
          height: whyUsImgheight,
          width: whyUsImgwidth,
        }}
        md={4}
        xs={6}
        component="img"
        src={whyUsImgLink}
      ></Grid>
    </Grid>
  );
};

export default WhyUsSection;
