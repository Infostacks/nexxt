import React from 'react'
import { Box, Typography, Stack } from "@mui/material"

import { businessProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'

const Business = ({ heading1, heading2, heading3, subtitle1, subtitle2, subtitle3 }: businessProps) => {
    return (
        <Box sx={{ height: "auto", backgroundColor: "#F8F8FB", paddingY: 10, paddingX: 12, }}>
            <Box>
                <Typography variant='h4' sx={{ color: "#B2B2B2" }}>
                    {heading1}
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "bold", fontSize: "50px" }}>  {heading2}<Typography variant='h6' sx={{ color: "#F57328", fontWeight: "bold", fontSize: "50px" }}>{heading3}</Typography> </Typography>
            </Box>
            <Stack spacing={2} sx={{}}>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle1}
                </Typography>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle1}
                </Typography>
                <Typography variant="subtitle1" sx={{}}>

                    {subtitle1}
                </Typography>
            </Stack>

        </Box>
    )
}

export default Business