import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  askyourpdf,
  threeWebApp,
  blog,
  metaverse,
  littleLemon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "AskYourPDF",
    icon: askyourpdf,
    iconBg: "#383E56",
    date: "September 2023",
    points: [
      "Developing and maintaining the front-end of the AskMyPDF web application using React, ensuring it is intuitive, responsive, and user-friendly.",
      "Collaborating closely with designers and back-end developers to implement and refine user interfaces that meet project requirements.",
      "Integrating APIs and enhancing the application's functionality through third-party libraries and services.",
      "Staying updated with the latest trends and best practices in the world of React development to continuously improve the user experience.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Timmy proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Timmy does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Timmy optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "My personal web blog is a platform where I share my thoughts, experiences, and expertise on various topics.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Sqlite",
        color: "orange-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Awo-Oosha/Blog.git",
  },
  {
    name: "LittleLemon",
    description:
      "The restaurant website I created is a dynamic online platform that beautifully represents a fictional restaurant, showcasing my skills in web design and development. This project illustrates my ability to craft visually appealing and user-friendly websites for businesses. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Sqlite",
        color: "orange-text-gradient",
      },
    ],
    image: littleLemon,
    source_code_link:
      "https://github.com/Awo-Oosha/LittleLemon-Cousera-Test.git",
  },
  {
    name: "MetaVersus",
    description:
      "MetaVersus is an innovative project that explores the emerging world of the metaverse, combining elements of virtual reality, augmented reality, and online interaction. This project showcases my creativity, technical skills, and forward-thinking approach to technology.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Awo-Oosha/metaverse.git",
  },
  {
    name: "3D Project",
    description:
      "My 3D modeling and visualization project is a testament to my proficiency in creating stunning 3D digital content. Through this project, I have demonstrated my skills in 3D modeling, texturing, and rendering.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: threeWebApp,
    source_code_link: "https://github.com/Awo-Oosha/project_three_js_ai.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
