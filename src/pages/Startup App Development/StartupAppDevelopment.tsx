import React from 'react'
import { Box } from "@mui/material"
import Header from '../../components/Header/Header'
import img from "../../assets/images/logo/NX black A.png"
import StartUpIntroBanner from '../../components/Global Components/StartUpIntroBanner'
import GetStartUpAppComponent from '../../components/Global Components/GetStartUpAppComponent'
import StartupStacksComponent from '../../components/Global Components/StartupStacksComponent'
import StartupChallengesComponents from '../../components/Global Components/StartupChallengesComponents'
import StartupsOtherConcerns from '../../components/Global Components/StartupsOtherConcerns'
import HelpStartupsComponents from '../../components/Global Components/HelpStartupsComponents'
import StartupClientsServed from '../../components/Global Components/StartupClientsServed'
import SideBanner from '../../components/Global Components/SideBanner'
import GrowthFocusedStartupApp from '../../components/Global Components/GrowthFocusedStartupApp'
import MakeAppsBanner from '../../components/Global Components/MakeAppsBanner'
import { StartUpIntroBannerprops, GetStartUpAppComponentprops, StartupChallengesComponentsprops, StartupsOtherConcernsprops, HelpStartupsComponentsprops, GrowthFocusedStartupAppprops } from '../../assets/Strings/Services/startupAppDevelopmentStrings/startupAppDevelopmentStrings'
const StartupAppDevelopment = () => {
    return (
        <Box>
            <Header logourl={img} />
            <StartUpIntroBanner {...StartUpIntroBannerprops} />
            <GetStartUpAppComponent {...GetStartUpAppComponentprops} />
            <StartupStacksComponent />
            <StartupChallengesComponents {...StartupChallengesComponentsprops} />
            <StartupsOtherConcerns {...StartupsOtherConcernsprops} />
            <HelpStartupsComponents {...HelpStartupsComponentsprops} />
            <StartupClientsServed />
            <GrowthFocusedStartupApp {...GrowthFocusedStartupAppprops} />
            <MakeAppsBanner />
            <SideBanner />
        </Box>
    )
}

export default StartupAppDevelopment