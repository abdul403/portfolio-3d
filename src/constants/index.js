import {
  mobile,
  backend,
  creator,
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
  nullclass,
  jobfinder,
  aisass,
  cursesio,
  testimonial1,
  testimonial2,
  testimonial3,
  zustand,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
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
  {
    name: "Redux Toolkit",
    icon: zustand,
  },
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "NullClass",
    icon: nullclass,
    iconBg: "#383E56",
    date: "March 2022 - october 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdul proved me wrong.",
    name: "Matin Khan",
    designation: "Student",
    company: "Osmania university",
    image: testimonial1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdul does.",
    name: "Mohammed Irfan",
    designation: "worker",
    company: "sid's Farm",
    image: testimonial2,
  },
  {
    testimonial:
      "He is my college friend I proud him for his learning eagerness for new technologies and also he did lots of projects during last year major project",
    name: "Mohammed Adeeb",
    designation: "Student",
    company: "Osmania university",
    image: testimonial3,
  },
];

const projects = [
  {
    name: "Job Finder",
    description:
      "Mobile app that allows users search and apply for job openings in their desired industry and location, streamlining the job hunting process with features like personalized job recommendations and easy application tracking.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobfinder,
    source_code_link: "https://github.com/abdul403/Job-App",
  },
  {
    name: "Coursesio",
    description:
      "MERN app which offers online tech courses taught by experts, enabling users to learn and acquire new skills at their own pace through video lectures and interactive lessons.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "chakraUi",
        color: "pink-text-gradient",
      },
    ],
    image: cursesio,
    source_code_link: "https://github.com/abdul403/courseBundler",
  },
  {
    name: "babyBot",
    description:
      "This AI-powered app offers seamless video, audio, text, and image generation, empowering users to create diverse content types effortlessly with a subscription-based plan.",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "planetscale",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: aisass,
    source_code_link: "https://github.com/abdul403/botAI",
  },
];

export { services, technologies, experiences, testimonials, projects };
