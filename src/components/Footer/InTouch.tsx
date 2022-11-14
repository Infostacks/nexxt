import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
const InTouch = () => {
  const btnTitle = " LET'S GET IN TOUCH ";
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Got an idea?
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Let’s get in touch!
        </Typography>
      </Box>
      <Box>
        <Select
          labelId="label"
          id="select"
          value="Web"
          sx={{
            width: 500,
            maxWidth: "90%",
            marginTop: 3,
          }}
        >
          <MenuItem value="Web">Web Development</MenuItem>
          <MenuItem value="Android">Android Development</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "90%",
          marginTop: 1,
        }}
      >
        <TextField fullWidth label="Enter email" id="fullWidth" />
      </Box>

      <Box sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            borderRadius: "10px",
            color: "white",
            padding: "10px 30px 10px 30px",
            letterSpacing: 2,
            background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
          }}
        >
          {btnTitle}
        </Button>
      </Box>
    </Box>
  );
};

export default InTouch;
