import React from "react";
import CustomButton from "./CustomButton";

import {
  Box,
  Chip,
  Stack,
  Typography,
  Grid,
  useTheme,
  useMediaQuery
} from "@mui/material";

interface ProjectsProps {
  imagesLinks: string;
  color: string;
  description: string;
  catList: string[];
  logoLink: string;
}

const Projects = ({ description, color, imagesLinks, catList, logoLink }: ProjectsProps) => {
  const theme = useTheme()
  console.log("theme", theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  const styles = {
    bgcolor: color,

  }

  return (

    <Grid container height={"90vh"} position="relative" sx={{height: {}, background: `${color}`}}>

      <Grid item xl={6} md={6} xs={12}
        display={"flex"} justifyContent={"center"} alignItems={"center"} 
        sx={{ backgroundImage: `url(${imagesLinks})`, backgroundRepeat: "no-repeat", backgroundAttachment: { xs: "scroll", md: "fixed", xl: "fixed" },  backgroundOrigin: "content-box", backgroundSize: { xs: "350px 300px ", md: "630px 600px", xl: "930px 900px" }, height: {xs: "300px", md: "90vh"} , }}
      >
      </Grid>

      <Grid container xl={6} md={6} xs={12} position={isMatch ? "relative" : "sticky"} sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "20px", height: {xs: "500px", md: "90vh"}
      }}>
        <Grid item>
          <img
            width={"170px"}
            height={"50px"}
            src={logoLink}
          ></img>

          <Stack direction="row" spacing={1} my={"30px"}>
            {catList.map(cat => <Chip key={cat} label={cat} />)}
          </Stack>

          <Box sx={{ width: { xs: "100%", md: "500px" ,xl: "400px" } }} >

            <Typography variant="body1" mt="10px" mb="40px" position="sticky" textAlign={"justify"}>
              {description}
            </Typography>
          </Box>

          <CustomButton text={"LEARN MORE"} buttonSize={"8px 40px 8px 40px"} />
        </Grid>
      </Grid>

    </Grid>




    // <Box height={"100vh"} display={"flex"} position="relative" top="0" width="100%">
    //   <Box width="50%"
    //     height="100vh"
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     position={"absolute"}
    //     zIndex="990"
    //     textAlign={"center"}
    //     // border={2}
    //     sx={{ backgroundImage: `url(${imagesLinks})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundPositionY: "center", bgcolor: `${color}` }}
    //   >

    //     {/* <img src={imagesLinks} style={{ zIndex: "1" }}></img> */}
    //     {/* <Box  bgcolor = "white">Hello</Box> */}

    //   </Box>

    //   <Box
    //     sx={{
    //       height: "100vh",
    //       width: "50%",
    //       bgcolor: "white",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",


    //     }}

    //     border={2}
    //     position={"absolute"}
    //     // zIndex={"0"}

    //     right={0}
    //   >
    //     <Box width={"50%"}  >
    //       <img
    //         width={"170px"}
    //         height={"50px"}
    //         src={logoLink}
    //       ></img>

    //       <Stack direction="row" spacing={1} my={"30px"}>
    //         {catList.map(cat => <Chip key={cat} label={cat} />)}
    //       </Stack>

    //       <Typography fontSize="17px" mt="10px" mb="40px" zIndex={"1000"}>
    //         {description}
    //       </Typography>

    //       <CustomButton text={"LEARN MORE"} buttonSize={"8px 40px 8px 40px"} />
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Projects;
