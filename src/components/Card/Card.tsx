import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement<SvgIconProps>;
}

export default function ServicesCard({ title, description, icon }: CardProps) {
  //   const [hover, setHover] = React.useState({ color: "#ee3824" });
  //   const [out, setOut] = React.useState({});

  //   const onMouseOver = () => console.log(setHover({ color: "white" }));
  return (
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
        },
        borderRadius: "0px",
      }}
    >
      <CardHeader
        sx={{ paddingLeft: "40px", paddingTop: "50px" }}
        avatar={icon}
        title={
          <Typography fontSize="17px" fontWeight="bold">
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Typography
          sx={{ padding: "0 40px 40px 40px" }}
          fontFamily="Gilroy-Regular"
          fontWeight="400"
          //   color="#061327"
          lineHeight="22px"
          fontSize="14px"
          variant="body2"
          //   color="text.secondary"
        >
          {description}
        </Typography>

        {/* <Grid
          container
          direction="row"
          alignItems="center"
          fontSize="12px"
          sx={{ float: "right" }}
        >
          <Typography icon flexDirection="row" alignItems="center">
          Get More Info <ArrowForwardIcon fontSize="small" />
          </Typography>
        </Grid> */}

        {/* <Button
          //   sx={{
          //     float: "right",
          //     // color: out,
          //     fontSize: "10px",
          //     fontWeight: "bold",
          //   }}
          variant="text"
          endIcon={<ArrowForwardIcon />}
        >
          Get More Info
        </Button> */}
        {/* <Link
            sx={{ float: "right" }}
            color="#ee3824"
            href="#"
            underline="none"
            
          >
            {"Get More Info"}
            <ArrowForwardIcon />
          </Link> */}
      </CardContent>
    </Card>
  );
}
