import React from 'react'
import { Box, Typography } from "@mui/material"
import otherConcernsImg from "../../assets/images/Startups/otherConcerns.png"
export interface StartupsOtherConcernsProps {
    heading: string,
    subtitle: string
}
const StartupsOtherConcerns = ({ heading, subtitle }: StartupsOtherConcernsProps) => {
    return (
        <Box marginTop={5} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ backgroundColor: "#EEEEEE",  }}>
            <Box width={"60vw"} display={"flex"} marginY={5} sx={{flexDirection: {xs: "column-reverse", md: "row", xl: "row"}}}>
                <Box>
                    <img src={otherConcernsImg} alt="" style={{ height: "317px", width: "238px" }} />
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} marginX={2} sx={{width: {xs: "100%", md: "40vw"}}}>
                    <Typography variant='h4' my={2}>
                        {heading}
                    </Typography>
                    <Typography variant='body1'>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StartupsOtherConcerns