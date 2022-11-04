import React from 'react'
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
const ConsultForm = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end", margin: 2, marginTop: 10 }}>
            <Box sx={{ width: "350px", height: "max", borderRadius: 5, padding: 1, marginRight: 10, marginTop: 5, boxShadow: 5 }}>
                <Box sx={{ padding: 2 }}>
                    <Typography variant="h3" sx={{ fontWeight: "bolder" }}>Book a Free </Typography>
                    <Typography variant="h3" sx={{ fontWeight: "bolder", color: "orange" }}>Consultation</Typography>
                </Box>
                <Box sx={{ marginX: 3, marginY: 2 }}>
                    <TextField
                        id="standard-helperText"
                        label="Full Name"
                        defaultValue=""
                        // helperText="Some important text"
                        variant="standard"
                        sx={{ width: "100%" }}
                        color="warning"
                    />
                </Box>
                <Box sx={{ marginX: 3, marginY: 2 }}>
                    <TextField
                        id="standard-helperText"
                        label="Email"
                        defaultValue=""
                        // helperText="Some important text"
                        variant="standard"
                        sx={{ width: "100%" }}
                        color="warning"
                    />
                </Box>
                <Box sx={{ marginX: 3, marginY: 2 }}>
                    <TextField
                        id="standard-helperText"
                        label="Phone Number"
                        defaultValue=""
                        // helperText="Some important text"
                        variant="standard"
                        sx={{ width: "100%" }}
                        color="warning"
                    />
                </Box>
                <Box sx={{ marginX: 3, marginY: 2 }}>
                    <TextField
                        id="standard-helperText"
                        label="Description"
                        defaultValue=""
                        // helperText="Some important text"
                        variant="standard"
                        sx={{ width: "100%" }}
                        color="warning"
                    />
                </Box>
                <Box sx={{ marginX: 3 }}>
                    <FormControlLabel control={<Checkbox sx={{ color: "orange" }} />} label="Share Non Disclosure Agreement" />
                </Box>
                <Box sx={{ margin: 3 }} >
                    <Button variant="outlined" color="warning" sx={{ paddingX: 2, "&:hover": {backgroundColor: "#FD841F", color: "white"} }} >
                        <Typography variant="h5" sx={{ fontWeight: "bolder", color: "orange", "&:hover": {color: "white"} }}>Lets Connect!</Typography></Button>
                </Box>
            </Box>
        </Box >

    )
}

export default ConsultForm