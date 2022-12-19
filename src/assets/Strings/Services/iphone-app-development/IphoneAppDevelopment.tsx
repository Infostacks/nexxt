import React from "react";
import HeadsetIcon from "@mui/icons-material/Headset";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import WatchIcon from "@mui/icons-material/Watch";
import { WhyUsProps } from "../../../../components/WhyUsSection";
import { WorkNumbersProps } from "../../../../components/Global Components/WorkNumbers";
import { BuildAndVisualizeProps } from "../../../../components/Global Components/BuildAndVisualize";
import { CustomDevIndustriesProps } from "../../../../components/Custom Dev Industries/CustomDevIndustries";
import { IntroProps } from "../../../../components/Global Components/IntroBanner";
import { CustomDevIndustriesBannerProps } from "../../../../components/Custom Dev Industries/CustomDevIndustriesBanner";
import { BusinessProps } from "../../../../components/Global Components/Business";
import { BusinessCustomCardProps } from "../../../../components/Global Components/BusinessCustomCard";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { EmergingTechnologiesProps } from "../../../../components/Global Components/EmergingTechnologies";

export const customDevIndustriesBannerStrings: CustomDevIndustriesBannerProps = {
  heading1: "Services for Custom Cross Platform Development",
  heading2: "That Advance Industries",
  subtitle1: "With more than 7 years of expertise in the field of cross platform application development, we have mastered the art of creating outstanding cross platform applications",
  subtitle2: "Our cross platform app developers take your cross platform app concept and transform it into a real, functional, and instantly appealing cross platform application.",
  subtitle3: "In order to get your app on the market as soon as possible, we can speed up the creation of cross platform applications by utilizing our technical know-how and agile methodologies",
  btntitle: "LET'S TALK ABOUT CROSS PLATFORM APP"
}
export const introBannerProps: IntroProps = {
  heading1: "Cross PlatformApp Development Company That Builds",
  heading2: "Disruptive Apps",
  subtitle1:
    "Nexxt creates cutting-edge cross platform apps for organizations that ensure market disruption, expansion, and scalability.",
  subtitle2:
    "For a long time, our app developers have been developing enterprise-grade cross platform apps. They are aware of regulated technology stacks and provide end-to-end cross platform app development solutions that guarantee cutting-edge performance, features, and experiences.",
  btnTitle: "BUILD MY cross platform APP"
};


export const customDevIndustriesProps: CustomDevIndustriesProps = {
  devCardTitles: [
    "Cross Platform Application Development",
    "Cross Platform Software Testing",
    "Cross Platform App Development Consultation",
    "Cross Platform App UI/UX Design",
  ],
  devCardDetails: [
    "An experienced team of strategists, designers, and cross platform app developers simplify technologies, features, and experiences and bring them together in the best way possible for iPhone app development, native cross platform apps, or cross platform solutions development.",
    "In order to ensure that your cross platform projects are developed to be extremely useful, safe, functional, and customized to meet your organization's specific objectives in every manner, we thoroughly test, validate, and protect business-critical cross platform app software",
    "As a firm that develops cross platform mobile apps, Nexxt focuses on the particular qualities and requirements that your cross platform application should have. After analyzing the requirements, we offer insightful input supported by statistics and facts that assist you in developing a complete cross platform solution for your company.",
    "The whole purpose of iPhone applications is to give users a cutting-edge, seamless experience. To develop an innovative and inspiring cross platform app design that aligns your company with what cross platform customers anticipate from Apple's ecosystem, our iPhone app developers unleash their creativity",
  ],
  CustomDevIndustriesBannerstrings : customDevIndustriesBannerStrings
};

export const faqsSummaries: string[] = [
  "I want to keep the details of my cross platform app idea confidential. Are there any security measures you take",
  "Do I fully own the code and data for the cross platform app I've developed after it's finished?",
  "Do you offer frequent updates while developing an cross platform app?",
  "Do you help with Apple App Store uploading of the app?",
  "What is the price of developing an cross platform application?",
];

export const faqsDetails: string[] = [
  "We are recognized for our credibility and honesty in cross platform app development, in addition to our responsive applications and intuitive approach towards app development. We have a comprehensive process in place to maintain privacy and confidentiality, which includes signing Non-Disclosure Agreements (NDAs), in order to prevent confusion and inconvenience over time.",
  "We provide the source code and all relevant data to our client after the cross platform app project is finished and launched successfully on the App Store. At the project's inception, this approach is adequately covered.",
  "Yes! Since the main objective of our cross platform app development process is client satisfaction, we make sure to keep them informed with regular updates and progress reports.",
  "Since app deployment is a crucial component of our comprehensive approach to developing cross platform apps, we not only help you get your app live in the app store but also offer post-launch app maintenance services.",
  "A lot of technical and non-technical factors, such as the amount of features, the tech stack deployed, the size of the team, the location of the app development team, etc., can affect how much it costs to develop an app.",
];

export const whyUsProps: WhyUsProps = {
  whyUsImgwidth: { xs: "355px", md: "457px" },
  whyUsImgheight: { xs: "433px", md: "560px" },
  whyUsTittle: "Why Consider Nexxt",
  whyUsSubTittle: "As Your Partner in cross platform App Development?",
  WhyUsdescs: [
    "Developers of cross platform apps push the boundaries and go beyond in order to provide flawless service to companies of all sizes. That's precisely what we expect your cross platform applications will achieve",
    "We are knowledgeable about all of them, whether it's selecting the best app development strategy and technology stack or going far beyond the typical development aspects to make a big effect.",
    "Choose Nexxt among others as your iPhone app and cross platform software development firm for the following reasons:",
  ],
  whyUsReasons: [
    "We are familiar with both established and developing technology, as well as application cases",
    "We know how to make sure that digital assets work well and can scale.",
    "We have a staff of experienced Q/A experts and cross platform app developers. Before use, our sprint sessions guarantee high-quality items.",
    "We help companies fulfill the evolving manifest and hidden requirements of their clients.",
    "Instead of simply focusing on features, we develop apps that provide customers with fantastic experiences",
  ],
  btnTitle: "GET AN cross platform APP FOR YOUR BUSINESS"
};

export const buildAndVisualizeProps: BuildAndVisualizeProps = {
  rightTitle:
    "Company That Develops Apps For Enterprise-Level Organizations",
  rightDescs: [
    "We offer outstanding cross platform app development services that assist businesses in realizing their full potential.",
    "We design and develop industry-specific cross platform solutions that reimagine standard approaches and produce ground-breaking results by carving from the most potential cross platform app development niches.",
  ],
  rightListTitle: "These are the domains we serve:",
  rightListItems: [
    "Entertainment",
    "Health & Fitness",
    "Music",
    "Lifestyle",
    "Education",
    "Ecommerce",
    "Real Estate",
  ],
  rightListItemIcons: [
    <TheaterComedyIcon key={1} color="warning" sx={{ marginRight: 2 }} />,
    <HealthAndSafetyIcon key={2} color="warning" sx={{ marginRight: 2 }} />,
    <HeadsetIcon key={3} color="warning" sx={{ marginRight: 2 }} />,
    <WatchIcon key={4} color="warning" sx={{ marginRight: 2 }} />,
    <SchoolIcon key={5} color="warning" sx={{ marginRight: 2 }} />,
    <ShoppingCartIcon key={6} color="warning" sx={{ marginRight: 2 }} />,
    <HomeIcon key={7} color="warning" sx={{ marginRight: 2 }} />,
  ],
  leftTitle: ["cross platform developments are competent and facilitate digital growth", ""],
  leftDescs: [
    "Our iPhone app development services transform your business and pivot it to a whole new digitally stable level that leverages mobile applications to ensure optimal market penetration and value deliverance.",
    "Our ultimate goal is to deliver impeccable cross platform app development services to our clients. What sets us apart is our determination to continuously iterate, ideate, and pivot towards being the most advanced cross platform service providers in the market.",
    "In addition to that, when your app goes through numerous ingenious stages that are specifically designed to make sure that the app makes a significant impact on the market, the cross platform app not only makes an impact but becomes a revenue-generating machine.",
  ],
};

export const workNumbersProps: WorkNumbersProps = {
  title: "Pick a competent and agile cross platform app development company.",
  desc: "We also provide agile cross platform app development services, but our devotion, skill, and commitment to your cross platform app project drive impeccable outcomes and massive impact. We have hundreds of successful cross platform and Android projects under our heads, as well as years of experience.",
  statCounts: ["250+", "500+", "30+"],
  statDescs: [
    "cross platform Developers In-House",
    "cross platform Projects Developed",
    "Industries Brought on Cross Platform",
  ],
};

export const businessProps: BusinessProps = {
  heading1: "Custom Cross Platform Application Developers ", heading2: "Assisting companies flourish in their", heading3: "respective markets", subtitle1: "With the required tools and technologies, our committed team of iPhone app developers taps into the cutting-edge world of iPhone mobile applications, giving you the advantage that you need to succeed in the fierce cross platform mega-market.", subtitle2: "Our architects, iPhone app developers, strategists, and designers dive into the creation of your cross platform solution or iPhone app, carrying out designing, development, testing, Q/A, and feature integration simultaneously at scale and speed. We boast a culture of unity and structured chaos.", subtitle3: "The modern agile and scrum methods have been improved, and we've positioned them in line with our goal of maintaining efficiency while creating exceptional iPhone mobile applications that disrupt industries and establish their own success."
}


export const BusinessCustomCardprops: BusinessCustomCardProps = {
  businessCardProps: [
    {
      businessIcon: <SportsEsportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "game development",
      description: "We continuously work to develop games that redefine the genre. As a result, we develop games that perform incredibly well, are supported by cutting-edge technologies, and provide gamers with a unique experience."
    },
    {
      businessIcon: <MonitorHeartIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Health & Fitness apps",
      description: "By ensuring that users receive knowledgeable and practical recommendations based on their preferences or requirements, we develop intelligent health and fitness iPhone applications that pave the path for a healthier and stronger community."
    },
    {
      businessIcon: <HomeIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "On-demand apps",
      description: "The experienced iPhone mobile app developers at Nexxt understand the identified issue at its core and come up with winning product development strategies that lead to the creation of competitive iPhone applications that disrupt industries."
    },
    {
      businessIcon: <AutoStoriesIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Education app",
      description: "By aiming for a wider scope of innovation, utilizing the strength of both new and established technologies, and merging them with our exceptional iPhone app creation services, we ensure cutting-edge learning experiences."
    },
    {
      businessIcon: <ConnectingAirportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Travel apps",
      description: "We are experienced in developing seamless and predictive navigation and integrating it into your applications to make it simpler for users who have wanderlust, working as international travelers, and visitors from businesses to navigate."
    },
    {
      businessIcon: <GroupAddIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Socialzing/Messaging app",
      description: "When we see WhatsApp, Facebook, or Telegram, our thoughts change. Therefore, we are aware of what must be done to ensure that your consumers enjoy the same engaging experience with that app with more than a billion users."
    },
    {
      businessIcon: <EngineeringIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Support and Maintence",
      description: "To keep your app functional, updated, and connected with the newest trends and technology, our custom iPhone app development company includes a consistent app support and maintenance approach, just so it can always stay one step ahead of the competition."
    },
  ]
}

export const emergingTechnologiesProps: EmergingTechnologiesProps = {
  heading1: "Operating Your Solutions with", heading2: "Emerging Technologies", subtitle1: "Some of the innovative, emerging technologies enable our custom software development solutions. With a futuristic mindset, these programming languages and technologies enable us to create ground-breaking software solutions.", images: ["https://www.tekrevol.com/assets/images-new/services/ios/tech_icon1.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon2.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon3.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon4.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon5.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon6.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon7.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon8.png"]
}