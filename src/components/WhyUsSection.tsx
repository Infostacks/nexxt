import { Grid, List, ListItem, Typography, Box } from "@mui/material";
import React from "react";
import CustomButton from "./Global Components/CustomButton";
import teamImage from "../assets/images/images/teamImgB.png"

export interface WhyUsProps {
  whyUsImgwidth: object;
  whyUsImgheight: object;
  whyUsTittle: string;
  whyUsSubTittle: string;
  WhyUsdescs: string[];
  whyUsReasons?: string[];
  btnTitle: string
}

const WhyUsSection = ({
  whyUsImgwidth,
  whyUsImgheight,
  whyUsTittle,
  whyUsSubTittle,
  WhyUsdescs,
  whyUsReasons,
  btnTitle
}: WhyUsProps) => {
  return (
    <Grid
      container
      sx={{
        py: "95px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row-reverse",
        paddingX: { md: "10px", xl: "50px" }
      }}
    >
      <Grid md={6} xs={11} >
        <Typography variant="h3" mb="20px" >
          {whyUsTittle}
          <Typography variant="h6" color="#7a7a7a" sx={{ }}>
            {whyUsSubTittle}
          </Typography>
        </Typography>
        <Box >
          {WhyUsdescs.map((descs, index) => (
            <Typography mb="20px" key={index} textAlign={"justify"}>{descs}</Typography>
          ))}

        </Box>

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
                <Typography variant="subtitle1" mb="15px">{whyUsReason}</Typography>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography></Typography>
        )}
        <CustomButton
          text={btnTitle}
          buttonSize={"6px 35px"}
        ></CustomButton>
      </Grid>

      <Grid
        sx={{
          px: "15px",
          height: whyUsImgheight,
          width: whyUsImgwidth,
        }}
        md={5}
        xs={12}
        component="img"
        src={teamImage}
      ></Grid>
    </Grid>
  );
};

export default WhyUsSection;
