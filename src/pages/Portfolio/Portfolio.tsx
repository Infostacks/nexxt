import React from 'react'
import { Box, Typography } from "@mui/material"
import img from "../../assets/images/logo/NX black A.png"
import Header from '../../components/Header/Header'
import PortfolioIntroBanner from '../../components/Global Components/PortfolioIntroBanner'
import PortfolioProjects from '../../components/Global Components/PortfolioProjects'
import { portfoliosprops } from '../../assets/Strings/PortfolioProjectsStrings';

const Portfolio = () => {
    return (
        <>
            <Header logourl={img} />
            <PortfolioIntroBanner />
            <PortfolioProjects {... portfoliosprops}/>
        </>
    )
}

export default Portfolio