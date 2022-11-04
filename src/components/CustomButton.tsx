import React from 'react'
import { Button } from "@mui/material";

interface ButtonProps{
  text: string;
  buttonSize: string;
}

const CustomButton = ({text, buttonSize}: ButtonProps) => {
  return (
    <Button

            sx={{
              fontWeight: "bold",
              borderRadius: "10px",
              color: "white",
              padding: buttonSize,
              background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
            }}
          >
            {text}
    </Button>
  )
}

export default CustomButton