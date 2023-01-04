import React from "react";
import { Button, useTheme } from "@mui/material";

interface ButtonProps {
  text: string;
  buttonSize: string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ text, onClick, buttonSize, margin }: ButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      sx={{
        fontWeight: "bold",
        // borderRadius: "10px",
        color: "white",
        padding: buttonSize,
        marginY: margin,
        background: `${theme.palette.background.default}`,
      }}
      // color="primary"
      className="font-bold"
    >
      {text}
    </Button>
  );
};
export default CustomButton;
