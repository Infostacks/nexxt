import React from "react"
import { StartUpIntroBannerProps } from "../../../../components/Global Components/StartUpIntroBanner";
import { GetStartUpAppComponentProps } from "../../../../components/Global Components/GetStartUpAppComponent";
import { StartupChallengesComponentsProps } from "../../../../components/Global Components/StartupChallengesComponents";
import { StartupsOtherConcernsProps } from "../../../../components/Global Components/StartupsOtherConcerns";
import { HelpStartupsComponentsProps } from "../../../../components/Global Components/HelpStartupsComponents";
import { GrowthFocusedStartupAppProps } from "../../../../components/Global Components/GrowthFocusedStartupApp";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export const StartUpIntroBannerprops: StartUpIntroBannerProps = {
    heading1: "Providing Support for Startups with Innovative App Development",
    heading2: "We focus on our upgraded core to assist startups in realizing their app ideas. We can build a useful and flawless experience on every platform owing to our deep knowledge in utilizing the greatest technology. Therefore, we can assist startups aiming to profit from cutting-edge technologies.",
    btnTitle: "GET IN TOUCH TODAY"
}

export const GetStartUpAppComponentprops: GetStartUpAppComponentProps = {
    heading1: "Some Apps That Broke The Conventional Experience Clutter",
    subtitle1: "All of the above apps were only startups when they were created, but by offering something unique to the market, they grew successful. These apps presently rule their online presence and have made a name for themselves as industry innovators.",
    subtitle2: "The same is what Nexxt seeks for your new startup app. We have developed apps for a number of startup firms that are currently leading the market over the years. And we would be delighted to repeat the process for you.",
    heading2: "Why Should You Get An App For Your Startup?",
    subtitle3: "Users now spend 3 hours per day using mobile apps, and this number has grown over the past five years.",
    subtitle4: "The majority of your audience chooses mobile apps today, and apps are considered to be a practical way to engage clients, particularly for startups.",
    subtitle5: "You can disrupt your business by connecting and engaging your brand with its audience by deploying a mobile application clarifying your vision and digitizing your startup with the ideal app solution.",
    btnTitle: "LET'S START BUILDING AN APP TOGETHER"
}

export const StartupChallengesComponentsprops: StartupChallengesComponentsProps = {
    heading: "A Startup App's Challenges",
    startupChallengesArray: [
        {
            title: "The Tough Competition",
            subtitle1: "It can be difficult to stand out in today's competitive market. Research indicates that in August 2020, 31.8 thousand mobile apps were released on the Apple Store and 111 thousand apps were released on the Google Play Store.",
            subtitle2: "You may immediately get a sense of the competitive market your new app would face using these figures. Additionally, it can be difficult to keep your audience interested in utilizing your app.",
            relatedIcon: <AttachMoneyIcon />

        },
        {
            title: "Financing Your Startup",
            subtitle1: "Apps might be very expensive for your new brand. And while you are primarily focusing on developing a compelling product or ensuring a unique service, it's vital to manage the money and investment.",
            subtitle2: "You can guarantee a trouble-free app development process by getting your app's finances in order. Additionally, if you want to find an investor for your app,",
            relatedIcon: <ShowChartIcon />

        },
        {
            title: "It Takes Time",
            subtitle1: "Getting an app out to the general public might take a long time, depending on its functionality, complexity, and structure.",
            subtitle2: "Additionally, contracting out the creation of your app will undoubtedly be the superior choice because, to start with, a team of experts will be working on it. Furthermore, you'll have all the tools necessary to release your app on schedule.",
            relatedIcon: <AccessTimeIcon />
        },
    ],
    btnTitle: "WE CAN HELP"
}

export const StartupsOtherConcernsprops: StartupsOtherConcernsProps = {
    heading: "Other Concerns",
    subtitle: "Consider that the difficulties listed above are merely the beginning. In addition to these, developing an app involves a variety of other choices and obstacles, such as marketing, distribution, market shifts, scalability, etc."
}

export const HelpStartupsComponentsprops: HelpStartupsComponentsProps = {
    heading: "How Nexxt Helps Startup Apps Standout",
    subtitle1: "We reevaluate innovation and create the ideal mobile design from the scratch. Your startup app's early development and a designing plan are thoroughly mapped-out and provided to you in a matter of weeks.",
    subtitle2: "For the development of your Startup app, our methodology and procedure largely rely on market and competitor research, gap analysis, the integration of cutting-edge functionalities, and the use of contemporary technologies.",
    subtitle3: "With that, you’ll have everything you need to bring your vision to life!",
    btnTitle: "GET A QUOTE"
}

export const GrowthFocusedStartupAppprops: GrowthFocusedStartupAppProps = {
    heading: "Looking To Get An Growth Focused Startup App?",
    subtitle: "The advantages of digitalization can benefit your startup brand in a variety of ways, according to Nexxt. We did study and discovered what goes into developing top-notch apps. Due to this, our apps are growth-focused, and scalable, and let you give your audience an omnichannel experience."
}