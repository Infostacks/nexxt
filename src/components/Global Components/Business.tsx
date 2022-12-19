import React from 'react'
import { Box, Typography, Stack } from "@mui/material"

export interface BusinessProps {
    heading1: string, heading2: string, heading3: string, subtitle1: string, subtitle2: string, subtitle3: string
}

const Business = ({ heading1, heading2, heading3, subtitle1, subtitle2, subtitle3 }: BusinessProps) => {
    return (
        <Box sx={{ height: "auto", backgroundColor: "#F8F8FB", paddingY: 10, paddingX: { xs: 2, md: 8, xl: "350px" }, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Box>
                <Typography variant='h5' sx={{ color: "#B2B2B2" }}>
                    {heading1}
                </Typography>
                <Typography variant='h3' sx={{}}>  {heading2} </Typography>
                <Typography variant='h3' sx={{ color: "#F57328", }}>{heading3}</Typography>
            </Box>
            <Stack spacing={2} sx={{ mt: 4 }} textAlign={"justify"}>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle1}
                </Typography>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle2}
                </Typography>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle3}
                </Typography>
            </Stack>

        </Box>
    )
}

export default Business