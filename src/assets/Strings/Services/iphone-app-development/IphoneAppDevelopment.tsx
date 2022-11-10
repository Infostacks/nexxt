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

export const introBannerProps: IntroProps = {
  heading1: "Custom iOS Development Services",
  heading2: "That Move Industries Forward",
  subtitle1:
    "With 7+ years of experience in the iOS application development domain, we’ve learned the alchemy of building great iOS applications.",
  subtitle2:
    "Our iOS app developers take your iOS app idea and convert it into a tangible and functional iOS application that is super-impressive from the get-go.",
};

export const customDevIndustriesProps: CustomDevIndustriesProps = {
  devCardTitles: [
    "iPhone Application Development",
    "iPhone Application Development",
    "iPhone Application Development",
    "iPhone Application Development",
  ],
  devCardDetails: [
    "iPhone applications are all about offering a revolutionary and seamless experience to the users. Our iPhone app developers ignite their creativity to develop an innovative and inspiring iOS app design that aligns your business with what iOS users expect from Apple’s ecosystem.",
    "iPhone applications are all about offering a revolutionary and seamless experience to the users. Our iPhone app developers ignite their creativity to develop an innovative and inspiring iOS app design that aligns your business with what iOS users expect from Apple’s ecosystem.",
    "iPhone applications are all about offering a revolutionary and seamless experience to the users. Our iPhone app developers ignite their creativity to develop an innovative and inspiring iOS app design that aligns your business with what iOS users expect from Apple’s ecosystem.",
    "iPhone applications are all about offering a revolutionary and seamless experience to the users. Our iPhone app developers ignite their creativity to develop an innovative and inspiring iOS app design that aligns your business with what iOS users expect from Apple’s ecosystem.",
  ],
  introBannerProps: { ...introBannerProps },
};

export const faqsSummaries: string[] = [
  "What is custom software development?",
  "How much does it cost to develop custom software?",
  "What collaboration model is the best for custom development?",
  "What are the signs that my business needs custom software?",
  "What is the right technology stack for my requirements?",
  "Do you provide support services after the launch of my custom software?",
];

export const faqsDetails: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
];

export const whyUsProps: WhyUsProps = {
  whyUsImgLink:
    "https://www.tekrevol.com/assets/images-new/services/ios/sec04_img.png",
  whyUsImgwidth: { xs: "355px", md: "457px" },
  whyUsImgheight: { xs: "433px", md: "560px" },
  whyUsTittle: "Why Choose Tekrevol",
  whyUsSubTittle: "As Your iOS app development Partner?",
  WhyUsdescs: [
    "iPhone application developers challenge the boundaries and go beyond to deliver impeccable to businesses of all sizes. And that’s exactly what we envision for your iPhone applications.",
    "Whether it’s about choosing the right app development approach and the technology stack or going beyond the conventional development aspects to create a significant impact, we are well-versed in all of them.",
    "Here are some of the most prominent reasons for choosing Tekrevol as your iPhone app and iOS software development company:",
  ],
  whyUsReasons: [
    "We understand conventional and emerging technologies and their use cases.",
    "We have a team of experienced iPhone app developers and Q/A personnel. Our sprint sessions ensure quality products before delivery.",
    "We know how to ensure robust performance and scalability of digital assets.",
    "We enable organizations in meeting the ever-evolving manifest and latent needs of their customers.",
    "We build apps that deliver great experiences to users instead of just features.",
  ],
};

export const buildAndVisualizeProps: BuildAndVisualizeProps = {
  rightTitle:
    "iPhone App Development Company That Caters To Enterprise-Level Organizations",
  rightDescs: [
    "We provide top-notch iOS app development services that help organizations unlock their true potential.",
    "Tapping into leading iOS app development niches, we design and develop industry-specific iOS solutions that redefine the conventional ways and yield revolutionary outcomes.",
  ],
  rightListTitle: "Here are the industries that we serve:",
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
  leftTitle: ["Powerful iOS solutions That", "Ensure Digital Growth"],
  leftDescs: [
    "Our iPhone app development services transform your business and pivot it to a whole new digitally stable level that leverages mobile applications to ensure optimal market penetration and value deliverance.",
    "Our ultimate goal is to deliver impeccable iOS app development services to our clients. What sets us apart is our determination to continuously iterate, ideate, and pivot towards being the most advanced iOS service providers in the market.",
    "In addition to that, when your app goes through numerous ingenious stages that are specifically designed to make sure that the app makes a significant impact on the market, the iOS app not only makes an impact but becomes a revenue-generating machine.",
  ],
};

export const workNumbersProps: WorkNumbersProps = {
  title: "Select An Experienced and Agile iOS App Development Company",
  desc: "With hundreds of successful iOS and Android projects and years of experience at hand, we not only offer you agile iOS app development services, but our dedication, expertise, and commitment towards your iOS app project drive impeccable results and massive impact.",
  statCounts: ["250+", "500+", "30+"],
  statDescs: [
    "IOS Developers In-House",
    "IOS Projects Developed",
    "Industries Brought on Android",
  ],
};
