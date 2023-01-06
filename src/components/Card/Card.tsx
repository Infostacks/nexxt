import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement<SvgIconProps>;
  linkText: string;
}

export default function ServicesCard({
  title,
  description,
  icon,
  linkText,
}: CardProps) {
  //   const [hover, setHover] = React.useState({ color: "#ee3824" });
  //   const [out, setOut] = React.useState({});

  //   const onMouseOver = () => console.log(setHover({ color: "white" }));
  return (
    <Box position="relative">
      <Card
        //   onMouseOver={onMouseOver}
        onMouseOut={() => console.log("out")}
        sx={{
          maxWidth: 340,
          height: 290,
          ":hover": {
            background:
              "linear-gradient(-138deg, #f37a20 0, #ef5123 55%, #ee3824 100%)",
            color: "white",
            transition: "0.3s",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "55px",
          },
          borderRadius: "0px",
        }}
      >
        <CardHeader
          sx={{ paddingLeft: "40px", paddingTop: "50px" }}
          avatar={icon}
          title={
            <Typography
              variant="h5"
              fontSize="17px"
              fontWeight="bold"
              className="font-bold"
            >
              {title}
            </Typography>
          }
        />
        <CardContent>
          <Typography
            sx={{ padding: "0 40px 0px 40px" }}
            fontWeight="400"
            lineHeight="20px"
            fontSize="14px"
            variant="body2"
            className="font-medium"
          >
            {description}
          </Typography>
          <Typography
            display="flex"
            sx={{
              fontWeight: "bold",
              position: "absolute",
              right: "80px",
              lineHeight: 2.5,
            }}
            className="font-bold"
          >
            {linkText}{" "}
          </Typography>
          <EastIcon
            sx={{
              mt: "8px",
              position: "absolute",
              right: "35px",
              height: "25px",
            }}
          />
        </CardContent>
        {/* <Box display="flex" justifyContent="end" alignItems="center" sx={{ color: "#ee3824" }}> */}

        {/* </Box> */}
      </Card>
    </Box>
  );
}
