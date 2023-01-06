const requiredSkills = [
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd6820179a0a3c4d_Ellipse%20157.svg",
    label: "React",
    value: "React",
    id: "react",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd6820e2330a3c75_Figma.svg",
    label: "Figma",
    value: "Figma",
    id: "figma",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd6820f29d0a3c7b_Java-Script.svg",
    label: "JS",
    value: "JS",
    id: "js",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682023b70a3c5a_AWS.svg",
    label: "AWS",
    value: "AWS",
    id: "aws",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682008a20a3c76_Node.js.svg",
    label: "Node.js",
    value: "Node.js",
    id: "node_js",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd6820721c0a3c52_Ellipse%20159.svg",
    label: "Python",
    value: "Python",
    id: "python",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682042f80a3c77_React-native.svg",
    label: "React Native",
    value: "React Native",
    id: "react_native",
  },
  {
    icon: "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd68204d770a3c7e_Blockchains.svg",
    label: "Blockchain",
    value: "Blockchain",
    id: "blockchain",
  },
];
const hourlyRate = [
  {
    rate: "$15-$20",
  },
  {
    rate: "$20-$30",
  },
  {
    rate: "$30-$50",
  },
  {
    rate: "$50-$80",
  },
  {
    rate: "$80+",
  },
];

const findUS = [
  {
    platform: "Linkedin",
  },
  {
    platform: "Clutch",
  },
  {
    platform: "Google",
  },
  {
    platform: "Other",
  },
];
const memberData = [
  {
    name: "Alina Jia 1",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic1.jpg",
  },
  {
    name: "Suresh Doe",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic2.jpg",
  },
  {
    name: "Domina Li",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic3.jpg",
  },
  {
    name: "Alina Jia",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic1.jpg",
  },
  {
    name: "Suresh Doe",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic2.jpg",
  },
  {
    name: "Domina Li",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic3.jpg",
  },
  {
    name: "Alina Jia",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic1.jpg",
  },
  {
    name: "Suresh Doe",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic2.jpg",
  },
  {
    name: "Domina Li",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic3.jpg",
  },
  {
    name: "Alina Jia",
    designation: "SENIOR DESIGNER",
    img: "https://samartheme1.vercel.app/images/team/pic1.jpg",
  },
];
const proudProjects = [
  {
    id: 1,
    category: "web design",
    img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    link: `lorem10`,
  },
  {
    id: 2,
    category: "mobile app",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: `lorem10`,
  },
  {
    id: 3,
    category: "Branding",
    img: "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: `lorem10`,
  },
  {
    id: 4,
    category: "mobile app",
    img: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: `lorem10`,
  },
  {
    id: 5,
    category: "Web development",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: `lorem10`,
  },
  {
    id: 6,
    category: "SEO",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    link: `lorem10`,
  },
  {
    id: 7,
    category: "web design",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: `lorem10`,
  },
  {
    id: 8,
    category: "Web development",
    img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: `lorem10`,
  },
  {
    id: 9,
    category: "Branding",
    img: "https://images.unsplash.com/photo-1634449278211-eca7f696940e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: `lorem10`,
  },
];
const companiesList = [
  {
    width: "250",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/logo-microsoft.png",
  },
  {
    width: "250",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/12/cheetah.png",
  },
  {
    width: "250",
    height: "80",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/UCSD.png",
  },
  {
    width: "250",
    height: "120",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/kayak-logo.png",
  },
  {
    width: "240",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/06/tenmarks.png",
  },
  {
    width: "230",
    height: "140",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/payperks.png",
  },
  {
    width: "230",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/mit-1.png",
  },
  {
    width: "230",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/Indeed_logo.png",
  },
  {
    width: "220",
    height: "120",
    icon: "https://arbisoft.com/wp-content/uploads/2019/06/parktag.png",
  },
  {
    width: "230",
    height: "130",
    icon: "https://arbisoft.com/wp-content/uploads/2019/11/stanford.png",
  },
  {
    width: "230",
    height: "120",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/edx-logo-registered.png",
  },
  {
    width: "200",
    height: "140",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/wanderu.png",
  },
  {
    width: "200",
    height: "140",
    icon: "https://arbisoft.com/wp-content/uploads/2019/05/logo-world-bank.png",
  },
  {
    width: "200",
    height: "100",
    icon: "https://arbisoft.com/wp-content/uploads/2019/06/mcdonalds.png",
  },
];
const previewTextData = [
  {
    heading: "WE CREATE IDEAS",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 2",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 3",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 4",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 5",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 6",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 7",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 8",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 9",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 10",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEA 11",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 12",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 13",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 14",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEA 15",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 16",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 17",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
  {
    heading: "WE CREATE IDEAS 18",
    subHeading: "Build Stunning Website InfoStack Tech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellendus nihil fuga unde voluptas voluptates perspiciatis aspernatur.",
  },
];
const animList = [
  "https://assets9.lottiefiles.com/packages/lf20_hcwpcdew.json",
  "https://assets2.lottiefiles.com/packages/lf20_01jwptn4.json",
  "https://assets8.lottiefiles.com/packages/lf20_1xxojoir.json",
  "https://assets4.lottiefiles.com/packages/lf20_pwohahvd.json",
  "https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json",
  "https://assets8.lottiefiles.com/packages/lf20_s72aydoa.json",
  "https://assets4.lottiefiles.com/packages/lf20_8q1bhU.json",
  "https://assets6.lottiefiles.com/packages/lf20_xsicerbj.json",
  "https://assets4.lottiefiles.com/packages/lf20_wqd1jwoz.json",
  "https://assets10.lottiefiles.com/packages/lf20_fnmgxut7.json",
  "https://assets10.lottiefiles.com/packages/lf20_ls97Nu.json",
  "https://assets4.lottiefiles.com/packages/lf20_2lruogho.json",
  "https://assets4.lottiefiles.com/packages/lf20_xfx6wio6.json",
  "https://assets4.lottiefiles.com/packages/lf20_6YVCqP.json",
  "https://assets8.lottiefiles.com/packages/lf20_yjkyGT.json",
  "https://assets8.lottiefiles.com/private_files/lf30_vAtD7F.json",
  "https://assets8.lottiefiles.com/private_files/lf30_FQVNNa.json",
  "https://assets8.lottiefiles.com/private_files/lf30_51QyOY.json",
];

export {
  animList,
  previewTextData,
  requiredSkills,
  proudProjects,
  companiesList,
  memberData,
  hourlyRate,
  findUS,
};
