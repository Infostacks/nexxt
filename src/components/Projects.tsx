import React from "react";
import CustomButton from "./CustomButton";

import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

interface ProjectsProps {
    imagesLinks: string;
    color: string;
    description:string;
    catList: string[];
    logoLink: string;
  }

const Projects = ({description, color, imagesLinks, catList, logoLink}: ProjectsProps) => {
  const styles = {
    bgcolor: color,
  }
  
  return (
    <Box height={"100vh"} display={"flex"}>
      <Box width={1/2}
        sx={
          styles
        }
      >
        <img src={imagesLinks}></img>
      </Box>

      <Box
        sx={{
          height: "100vh",
          width: 1 / 2,
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width={"500px"}>
          <img
            width={"170px"}
            height={"50px"}
            src={logoLink}
          ></img>

          <Stack direction="row" spacing={1} my={"30px"}>
            {catList.map(cat=><Chip key={cat} label={cat}/>)}
          </Stack>

          <Typography fontSize="17px" mt="10px" mb="40px">
            {description}
          </Typography>

          <CustomButton text={"LEARN MORE"} buttonSize={"10px 30px 10px 30px"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
