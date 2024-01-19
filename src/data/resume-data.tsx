import {
  Amdocs,
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  JohnDeere,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vijay Chowdary Nelakurthi", //Vijay Chowdary Nelakurthi
  initials: "VCN", //VCN
  location: "Ongole, AP, India", //Ongole, AP, India
  locationLink: "https://www.google.com/maps/place/Ongole", 
  about:
  "Software Developer with experience in Automation Testing and Development field",
  summary:"", //add more summary
    // "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65058877?v=4",
  personalWebsiteUrl: "https://vijay2249.github.io",
  contact: {
    email: "vijaychowdary2249@protonmail.com",
    // tel: "+48530213401", //no mobile number display
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vijay2249",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/VijayCh0710",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Institute of Technology, Warangal", //National Institute of Technology, Warangal
      degree: "B.Tech in Computer Science and Engineering", //B.Tech in CSE
      start: "2019", //2019
      end: "2023", //2023
    },
  ],
  work: [
    {
      company: "Amdocs",
      link: "https://www.amdocs.com/",
      title: "Software Engineer → Automation Test Engineer → Software Developer",
      logo: Amdocs,
      badges: [],
      start: "2023",
      end: "2024",
      description: "Working on Playwright and TestNG framework to create UI automation custom. Working on Microservices implementation with technologies like SpringBoot, and integrated with Kafka, CouchbaseDB",
      // description: //add description
        // "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "John Deere", //Amdocs
      link: "https://www.deere.com/en/index.html", 
      badges: ["Intern"],
      title: "Automation Test Intern",
      logo: JohnDeere,
      start: "May-2022",
      end: "July-2022",
      description:
        "Created an automation framework for testing UI application. Technologies: Python",
    },
  ],
  skills: [
    "JavaScript",
    "ReactJs",
    "Java",
    "SpringBoot",
    "Linux",
    "Git",
    "Docker",
    "Python",
    "Selenium",
    "Playwright",
    "TestNG",
    "Postman",
    "C++"
  ],
  projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
  ],
} as const;
