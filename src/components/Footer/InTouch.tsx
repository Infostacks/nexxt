import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import CustomButton from "../Global Components/CustomButton";
const InTouch = () => {

  const [value, setValue] = useState("Web");

  const handleChange = (e : any) => {
        setValue(e.target.value)
  }

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
          value={value}
          onChange={handleChange}
          sx={{
            width: 500,
            maxWidth: "90%",
            marginTop: 3,
          }}
        >
          <MenuItem value="Web">Web Development</MenuItem>
          <MenuItem value="Android">Android Development</MenuItem>
          <MenuItem value="Cross Platform App">Cross Platform App</MenuItem>
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
        <CustomButton text="LET'S GET IN TOUCH" buttonSize="10px 30px" />
      </Box>
    </Box>
  );
};

export default InTouch;
