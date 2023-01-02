import React from 'react'
import { Box, Typography } from "@mui/material"
import img from "../../assets/images/logo/NX black A.png"
import Header from '../../components/Header/Header'
import IntroBanner from '../../components/Global Components/IntroBanner'
import { introBannerProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'
import ConsultForm from '../../components/Global Components/ConsultForm'
import EcommerenceApps from '../../components/Global Components/EcommerenceApps'
import BestEcommerenceApps from '../../components/Global Components/BestEcommerenceApps'
import EcommerceTransaction from '../../components/Global Components/EcommerceTransaction'
import EcommerceAppFeatures from '../../components/Global Components/EcommerceAppFeatures'
import EcommerceShop from '../../components/Global Components/EcommerceShop'
import EcommerceWork from '../../components/Global Components/EcommerceWork'
import EcommerceAppDev from '../../components/Global Components/EcommerceAppDev'

const Ecommerence = () => {
    return (
        <Box>
            <Header logourl={img} />
            <Box
                // border={2}
                sx={{
                    pt: { xs: "0px", md: "70px", xl: "100px" },
                    pb: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // bgcolor: "#f8f8fb",
                    backgroundColor: "#f8f8fb",
                    flexDirection: { xs: "column", md: "row", xl: "row" }
                }}
            >

                <IntroBanner {...introBannerProps} />
                <ConsultForm />
            </Box>
            <BestEcommerenceApps />
            <EcommerenceApps />
            {/* <EcommerceTransaction /> */}
            <EcommerceAppFeatures />

            <EcommerceShop />
            <EcommerceWork />
            <EcommerceAppDev />
        </ Box>
    )
}

export default Ecommerence