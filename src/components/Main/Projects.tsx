import React from "react";
import CustomButton from "../CustomButton";

import { Parallax } from "react-scroll-parallax";

import { Box, Chip, Stack, Typography } from "@mui/material";

interface ProjectsProps {
  imagesLinks: string;
  color: string;
  description: string;
  catList: string[];
  logoLink: string;
}

const Projects = ({
  description,
  // color,
  imagesLinks,
  catList,
  logoLink,
}: ProjectsProps) => {
  return (
    <Box height={"100vh"} display={"flex"} sx={{ overflowX: "hidden" }}>
      <Parallax translateX={[-50, 210]}>
        <Box
          width={1 / 2}
          sx={{
            // backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imagesLinks}
            style={{ height: "550px", width: "600px" }}
          ></img>
        </Box>
      </Parallax>

      <Parallax translateX={[110, -50]}>
        <Box
          sx={{
            height: "100vh",
            width: 1 / 2,
            // bgcolor: "white",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width={"100%"}>
            <img width={"170px"} height={"50px"} src={logoLink}></img>

            <Stack fontWeight="bold" direction="row" spacing={1} my={"30px"}>
              {catList.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  sx={{
                    color: "white",
                    letterSpacing: 3,
                  }}
                />
              ))}
            </Stack>

            <Typography fontSize="17px" mt="10px" mb="40px">
              {description}
            </Typography>

            <CustomButton
              text={"LEARN MORE"}
              buttonSize={"10px 30px 10px 30px"}
            />
          </Box>
        </Box>
      </Parallax>
    </Box>
  );
};

export default Projects;
