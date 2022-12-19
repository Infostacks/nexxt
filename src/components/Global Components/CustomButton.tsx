import React from "react";
import { Button, useTheme } from "@mui/material";


interface ButtonProps {
  text: string;
  buttonSize: string;
  margin? : string
}

const CustomButton = ({ text, buttonSize, margin }: ButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      sx={{
        fontWeight: "bold",
        // borderRadius: "10px",
        color: "white",
        padding: buttonSize,
        marginY: margin,
        background: `${theme.palette.background.default}`
      }}
      // color="primary"
      className="font-bold"
    >
      {text}
    </Button>
  );
};
export default CustomButton;
