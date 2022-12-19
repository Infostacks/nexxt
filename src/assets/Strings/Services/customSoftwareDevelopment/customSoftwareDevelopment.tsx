import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import teamImage from "../../../images/images/teamImage.png"
import { WhyUsProps } from "../../../../components/WhyUsSection";
import { WorkNumbersProps } from "../../../../components/Global Components/WorkNumbers";
import { BuildAndVisualizeProps } from "../../../../components/Global Components/BuildAndVisualize";
import { EmergingTechnologiesProps } from "../../../../components/Global Components/EmergingTechnologies";
import { BusinessProps } from "../../../../components/Global Components/Business";
import { IntroProps } from "../../../../components/Global Components/IntroBanner";
import { CustomDevIndustriesProps } from "../../../../components/Custom Dev Industries/CustomDevIndustries";
import { CustomDevIndustriesBannerProps } from "../../../../components/Custom Dev Industries/CustomDevIndustriesBanner";
import { BusinessCustomCardProps } from "../../../../components/Global Components/BusinessCustomCard";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const introBannerProps: IntroProps = {
  heading1: "Custom Software Development Services for", heading2: "Businesses of All Sizes", subtitle1: "We create custom, high-impact software solutions that empower businesses and enable them to lead with automation.", subtitle2: "Our custom software development services provide our partners and clients with the freedom to grow and scale at unprecedented rates. We help startups, medium-sized businesses, and enterprise-grade organizations to build performance-oriented systems.", btnTitle: "Let’s Talk About Your Software!"
}
export const businessProps: BusinessProps = {
  heading1: "Industry-Leading Custom Software Development Solutions", heading2: "Enable Companies to Establish & Expand Their", heading3: "Digital Footprint", subtitle1: "With the necessary tools and technologies, our committed team of iPhone app developers taps into the slashing world of iPhone mobile applications, giving you the edge you have to succeed in the hyper competitive iOS mega-market.", subtitle2: "Our customized software solutions at Nexxt are designed to assist established companies and organizations extend their global reach while also allowing modern firms to develop their digital footprints.", subtitle3: "We are adept at understanding the rapidly moving demands in both the private and public sectors because of our experience with all of these businesses. The test of time has not failed our solutions. We develop software solutions that ensure your success."
}

export const emergingTechnologiesProps: EmergingTechnologiesProps = {
  heading1: "Operating Your Solutions with", heading2: "Emerging Technologies", subtitle1: "Some of the innovative, emerging technologies enable our custom software development solutions. With a futuristic mindset, these programming languages and technologies enable us to create ground-breaking software solutions.", images: ["https://www.tekrevol.com/assets/images-new/services/custom-software/2.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/4.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon3.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/6.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/8.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/10.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/12.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/13.png"]
}

export const customDevIndustriesBannerStrings: CustomDevIndustriesBannerProps = {
  heading1: "Company’s expertise in Software Development",
  heading2: "That Ignite the World",
  subtitle1: "We can utilize the experiences we have learned from building long run, on-budget software systems owing to our expertise in working with renowned institutions and organizations around the world. Nexxt is aware of the complexities involved in creating upper edge software.",
  subtitle2: "When designing and developing software systems, our professional custom software developers analyze every possible cause. We provide specialized software solutions that are solid, efficient, and unmatched while keeping your requirements in mind.",
  subtitle3: "We deploy agile approaches, our expertise, and skills to enhance the design and development phases so that we can quickly test and deploy software solutions that not only meet your needs but also go above and beyond them.",
  btntitle: "LET'S TALK ABOUT CUSTOM SOFTWARE"
}

export const customDevIndustriesProps: CustomDevIndustriesProps = {
  devCardTitles: [
    "Ideation and Strategy",
    "Design and Development",
    "Testing",
    "Deployment and Installation",
  ],
  devCardDetails: [
    "We discuss the client’s expectations, set project deliverables, and mark timelines for project budgeting and scope. The business analysis includes a research phase where our R&D teams conduct a thorough competitor analysis and check if the existing products in the industry match the expectations set by the clients, the unique features and the cost of existing software solutions.",
    "Our design and development teams work together during the wireframing and prototyping stages. The technical development starts with steps like backend, frontend, access, and API integration.",
    "Once a custom software is ready, QA and beta testing departments induct data, demonstrate the working of different user panels, generate reports and test the product in every way possible to understand how it will function in different situations and for different users.",
    "Once all boxes in the product development lifecycle are checked, and our clients have approved, we release the product for real-time functioning. The final product provides a humanized experience of all that’s virtually possible!",],
    CustomDevIndustriesBannerstrings : {...customDevIndustriesBannerStrings}
    
}

export const faqsSummaries: string[] = [
  "What is custom software development?",
  "How much does it cost to develop custom software?",
  "What collaboration model is the best for custom development?",
  "What are the signs that my business needs custom software?",
  "What is the right technology stack for my requirements?",
  "Do you provide support services after the launch of my custom software?"
];

export const faqsDetails: string[] = [
  "The development of uniquely tailored digital solutions that address the needs of a business or audience is known as custom software development. For personalization, efficiency, strong security and dependability, ongoing support and maintenance, flexibility and scalability, and seamless integration, businesses engage in custom software development solutions.",
  "The cost of developing custom software relies on a number of variables, including the size and complexity of your project as well as additional variables like the number of systems supported and the type of software (web, desktop, and mobile), The number and complexity of the new features Uniqueness of the design. The quantity and complexity of system integrations. Infrastructure needs, such as latency capacity, performance, security, and scalability.",
  "Outsourcing or staff augmentation is the two collaboration models that businesses typically use. When a project is outsourced, the customer puts together a team and hands it off entirely to a vendor. To cover the abilities and gaps in a project, the customer temporarily hires a team of specialized personnel through staff augmentation.",
  "You need specialized software for your company if you must respond to client inquiries more quickly. You have to automatically notify clients on a regular basis. A large number of operational processes must be automated and your client contact and support channels should be more diverse.",
  "The technology stack is determined by a number of elements, such as scalability requirements, platforms, infrastructure, data types, and more. The client's business needs and the features they want to include in the application will largely determine the choice. For all big app development projects, for instance, the Microsoft.NET framework is typically employed, although other projects call for specialized tech stacks like PHP/MySQL.",
  "Yes, we do provide technical support for unique software after determining whether your tool will require future updates and releases.",
];


export const whyUsProps: WhyUsProps = {
  whyUsImgwidth: { xs: "355px", md: "500px" },
  whyUsImgheight: { xs: "433px", md: "400px" },
  whyUsTittle: "Why Choose Nexxt",
  whyUsSubTittle: "As Your Partner with a Team, That Values Impact?",
  WhyUsdescs: [
    "We help international businesses—from sole proprietors and start-ups to well-established corporations—achieve a competitive edge. All of our digital tactics, from MVPs to major product development, are designed to increase engagement and generate revenue.",
    "We are a comprehensive custom software development firm that prioritizes impact; our values and vision reflect who we are. We value accessibility and provide 24/7 help for both technical and non-technical aspects of any project we operate on.",
    "We have built a software company that employs the most esteemed engineers, development experts, and business strategists in order to assure that we surpass our commitments."
  ],
  btnTitle: "GET CUSTOM SOFTWARE FOR YOUR BUSINESS"
}

export const buildAndVisualizeProps: BuildAndVisualizeProps = {
  rightTitle: "We will provide Result-driven Software Solutions",
  rightDescs: [
    "Your organization has two realistic options to stay up with intelligent automation and digital transformation: be the first to adopt new technology or scale up the use of current models in order to cause disruption.Additionally, both of these strategies require essential software, backend systems, tools for analysis, and applications."
  ],
  rightListTitle: "Our software solutions help our joint clients by:",
  rightListItems: [
    "Accelerating Their Business Processes",
    "Acquiring And Retaining Consumers",
    "Boosting Customer Engagement",
    "Increasing Their Revenue",
    "Maximizing Their Impact",
    "And Setting Industry Standards.",
  ],
  rightListItemIcons: [
    <AdjustIcon key={1} color='warning' sx={{ marginRight: 2 }} />,
    <AdjustIcon key={2} color='warning' sx={{ marginRight: 2 }} />,
    <AdjustIcon key={3} color='warning' sx={{ marginRight: 2 }} />,
    <AdjustIcon key={4} color='warning' sx={{ marginRight: 2 }} />,
    <AdjustIcon key={5} color='warning' sx={{ marginRight: 2 }} />,
    <AdjustIcon key={6} color='warning' sx={{ marginRight: 2 }} />,

  ],
  leftTitle: [
    "We can construct anything,",
    "you can imagine."
  ],
  leftDescs: [
    "Nexxt has a history of transforming ideas that could change the world into digital reality. Moreover, we have a competitive advantage in making technological advancements because of our strong technical relationships and connections. Working with us gives you access to a modern technological base for effective achievement as well as a skilled pool of experts for your project.",
    "Hundreds of cutting-edge tools and technologies are part of our technological stack, which can power up your product and speed up development. Our typical day involves working with blockchain strings, AR and VR frameworks, embedded smart systems for the Internet of Things, and cloud infrastructure, to list a few.",

  ]
}

export const workNumbersProps: WorkNumbersProps = {
  title: "Our Work in Numbers",
  desc: "We are more than just an app development and software services company. We enjoy developing SaaS applications, CRMs, and lead generation tools, business apps and automation solutions, Enterprise Resource Programs, inventory management systems, financial management solutions, and database portals, to name a few software specialties. Nexxt's mission may be summed up in two words: engineering quality and code innovation.",
  statCounts: [
    "55+",
    "34+",
    "11+"
  ],
  statDescs: [
    "Applications Delivered",
    "Businesses Transformed",
    "Industries Served"
  ]
}


export const BusinessCustomCardprops: BusinessCustomCardProps = {
  businessCardProps: [
    {
      businessIcon: <SportsEsportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Gaming",
      description: "Not everyone can develop the perfect game. Creating games that meet industry standards for cross-platform to cloud functionality, breathtaking graphics, and seamless player experience, Our developers complies to these standards. Our offerings, including our gaming platforms, and solutions are significant."
    },
    {
      businessIcon: <MonitorHeartIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Health & Fitness",
      description: "Nothing will stop us from developing cutting-edge software that will increase access to healthcare services. Nexxt develops technically competent, user-centered, and experience-focused digital solutions to effectively meet the needs of the healthcare and wellness sector."
    },
    {
      businessIcon: <HomeIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Real Estate",
      description: "We create technical solutions which aren't overloaded with features but still contribute to the achievement of organizational goals and provide actual benefit to users. The difficulties facing real estate business are unique and demand for a whole distinct strategy."
    },
    {
      businessIcon: <AutoStoriesIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Education",
      description: "Since e-learning & EdTech became famous. Educational institutions and students are choosing e-learning solutions because it has advantages over traditional learning. Advanced methods are integrated by Nexxt to build a high, end-to-end learning management system that ensures a better future."
    },
    {
      businessIcon: <ConnectingAirportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Music",
      description: "People stream music every day. In order to compete with the best apps in the market, Nexxt creates powerful, functionality music applications tailored to the needs of the users. We create applications that enhance your media online presence."
    },
    {
      businessIcon: <GroupAddIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Lifestyle",
      description: "A significant market uses a variety of lifestyle digital products, including Programming applications, smartwatch widgets, and web applications. These digital solutions give users useful content, information, & products while also offering enormous potential for profit through a variety of monetization models."
    },
    {
      businessIcon: <EngineeringIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "Entertainment",
      description: "The majority of traffic worldwide is generated by entertainment apps. Nexxt can help you take full advantage of this market potential by designing a platform that is specialized with features that help people fulfill their entertainment needs."
    },
    {
      businessIcon: <ShoppingCartIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
      title: "E commerence",
      description: "With or without brick-and-mortar enterprises, digitalization now allows you to enhance conversion rates. We develop e-commerce solutions that work flawlessly for you and assist you in taking full advantage & benefits of digitization, from good lead generation to positive customer experience."
    },
  ]
}



