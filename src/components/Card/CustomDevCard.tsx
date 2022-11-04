import React from "react";
import { Box, Typography } from "@mui/material";

interface CardProps{
  devCardTitles: string[];
  devCardDetails: string[];
  }

const CustomDevCard = ({devCardTitles, devCardDetails}: CardProps) => {
  return (
    <Box px="15px">
      {devCardTitles.map((title, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            my: { xs: "45px" },
            mb: "60px",
            width: { md: "435px", xs: "auto" },
            height: { md: "380px", xs: "210px" },
            px: { md: "60px", xs: "40px" },
            display: "flex",
            justifycontent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 59px 0px rgb(0 0 0 / 10%)",
            "&::before": {
              bgcolor: "#f37a20",
              content: '""',
              height: "3px",
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "20px",
            },

            "&::after": {
              bgcolor: "#f37a20",
              content: '""',
              height: "20px",
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "3px",
            },
          }}
        >
          <Box>
            <Typography variant="h5" mb="20px" width="auto">
              {title}
            </Typography>
            <Typography width="auto" fontSize="16px">
              {devCardDetails[index]}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CustomDevCard;
