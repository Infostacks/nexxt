import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { WhyUsProps } from "../../../../components/WhyUsSection";
import { WorkNumbersProps } from "../../../../components/Global Components/WorkNumbers";
import { BuildAndVisualizeProps } from "../../../../components/Global Components/BuildAndVisualize";
import { EmergingTechnologiesProps } from "../../../../components/Global Components/EmergingTechnologies";
import { BusinessProps } from "../../../../components/Global Components/Business";
import { IntroProps } from "../../../../components/Global Components/IntroBanner";
import { CustomDevIndustriesProps } from "../../../../components/Custom Dev Industries/CustomDevIndustries";

export const introBannerProps : IntroProps = {
  heading1:"Custom Software Development Services for", heading2: "Businesses of All Sizes", subtitle1: "We create custom, high-impact software solutions that empower businesses and enable them to lead with automation.", subtitle2: "Our custom software development services provide our partners and clients with the freedom to grow and scale at unprecedented rates. We help startups, medium-sized businesses, and enterprise-grade organizations to build performance-oriented systems." 
}
export const businessProps: BusinessProps = {
  heading1: "Industry-Leading Custom Software Development Solutions", heading2: "Enabling Businesses to Set Up & Expand Their", heading3: "Digital Footprint", subtitle1: "Our dedicated team of iPhone app developers taps into the innovative world of iPhone mobile applications with the right development tools and technologies to enable you to thrive in the competitive iOS mega-market.", subtitle2: "At TekRevol, our custom software solutions are focused on providing modern businesses to set up their digital footprint and help established businesses and organizations expand their reach around the globe.", subtitle3: "Our experience with all these industries has made us understand the ever-changing demands in the private and public sectors. Our solutions have passed the test of time. We build software programs that ensure your success."
}

export const emergingTechnologiesProps: EmergingTechnologiesProps = {
  heading1: "Powering Your Solutions With", heading2: "Emerging Technologies", subtitle1: "Our custom software development solutions are powered by some of the disruptive, emerging technologies. These programming languages and technologies help us build revolutionary software solutions with a forward-thinking approach.", images: ["https://www.tekrevol.com/assets/images-new/services/custom-software/2.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/4.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon3.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/6.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/8.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/10.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/12.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/13.png"]
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
    "Once all boxes in the product development lifecycle are checked, and our clients have approved, we release the product for real-time functioning. The final product provides a humanized experience of all that’s virtually possible!", ],
  introBannerProps: {...introBannerProps}
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
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem, error illum voluptatibus maiores odio! Voluptate minima voluptatum repellat. Unde animi laborum, debitis error eveniet ducimus! Cum, veritatis. Obcaecati, libero?",
];


export const whyUsProps: WhyUsProps = {
  whyUsImgLink: "https://www.tekrevol.com/assets/images-new/services/custom-software/software-development.png",
  whyUsImgwidth: { xs: "355px", md: "400px" },
  whyUsImgheight: { xs: "433px", md: "auto" },
  whyUsTittle: "Why Choose Tekrevol",
  whyUsSubTittle: "As Your Partner with an Impact-Oriented Team?",
  WhyUsdescs: [
    "We enable global organizations – solopreneurs and startups to established corporates to achieve competitive advantage. All our digital strategies, covering MVPs to large-scale product development, aim to deliver strong engagement and business value.",
    "Our values and vision make us who we are – a full-cycle custom software development company prioritizes impact. We value transparency and stay supportive round the clock for all technical and non-technical aspects of every project we undertake.",
    "To ensure we exceed our commitments, we have established a software company that houses the most acclaimed engineers, development specialists, and business strategists."
  ]
}

export const buildAndVisualizeProps: BuildAndVisualizeProps = {
  rightTitle: "Result-driven Software Solutions",
  rightDescs: [
    "To keep pace with intelligent automation and digital transformation, your business has two practical options: be the first mover or follow the existing models at scale for disruption.",
    "And both of these approaches need vital programs, backend systems, analysis tools, and applications."
  ],
  rightListTitle: "Our software programs assist our partner clients in:",
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
    "What you can visualize,",
    "we can build"
  ],
  leftDescs: [
    "TekRevol has a record of bringing world-changing ideas to digital reality. And our technical solid partnerships and affiliations give us an edge in creating digital breakthroughs. Partnering with us guarantees you a specialized talent pool for your project – in addition, you get access to a contemporary technology stack for development success.",
    "Our technology stack has hundreds of emerging tools and technologies to power up your product and reduce development time and effort. To count a few, our typical day involves working with Blockchain strings, AR and VR frameworks, IoT embedded smart systems, and cloud infrastructure.",

  ]
}

export const workNumbersProps: WorkNumbersProps = {
  title: "Our Work in Numbers",
  desc: "We are more than a software services company designing and developing apps. To name a few software specialties, we love building SaaS programs, CRMs and lead generation tools, entrepreneurial apps and automation solutions, Enterprise Resource Programs, inventory management systems, financial management solutions, and database portals. In simplest words, TekRevol aims to engineer quality and code innovation.",
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






