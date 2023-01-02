import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {

        background: {
            default: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)"
        },
    },
    typography: {
        body1: {
            fontFamily: "Gilroy-Regular"
        },
        body2: {
            fontFamily: "Gilroy-Regular"
        },
        button: {
            fontFamily: "Gilroy-Regular"
        },
        h1: {
            fontFamily: "Gilroy-Bold"
        },
        h2: {
            fontFamily: "Gilroy-Bold"
        },
        h3: {
            fontFamily: "Gilroy-Bold"
        },
        h4: {
            fontFamily: "Gilroy-Bold"
        },
        h5: {
            fontFamily: "Gilroy-Bold"
        },
        h6: {
            fontFamily: "Gilroy-SemiBold"
        },
        subtitle1: {
            fontFamily: "Gilroy-Light"
        }
    },
    shape: {
        borderRadius: 10
    }
})