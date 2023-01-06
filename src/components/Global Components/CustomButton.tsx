import React from "react";
import { Button, useTheme } from "@mui/material";


interface ButtonProps {
  text: string;
  buttonSize: string;
  margin?: string
  handleClick?: any
  background?: string
}

const CustomButton = ({ text, buttonSize, margin, handleClick, background }: ButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      sx={{
        fontWeight: "bold",
        // borderRadius: "10px",
        color: "white",
        padding: buttonSize,
        marginY: margin,
        background: `${background}`
      }} 
      // color="primary"
      className="font-bold"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
export default CustomButton;
