import {
  faSnapchatGhost,
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
  faJs,
  faPython,
  faSwift,
  faJava,
  faCss3,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { faCode, faDatabase, faWifi } from "@fortawesome/free-solid-svg-icons"

export function getIcon(language) {
  switch (language) {
    case "Python":
      return { icon: faPython, class: "python" }
    case "JavaScript":
      return { icon: faJs, class: "js" }
    case "Swift":
      return { icon: faSwift, class: "swift" }
    case "Java":
      return { icon: faJava, class: "java" }
    case "CSS":
      return { icon: faCss3, class: "css" }
    case "HTML":
      return { icon: faHtml5, class: "html" }
    default:
      return { icon: faCode, class: "default" }
  }
}

export const social_links = [
  {
    color: "grey",
    image: faGithub,
    url: "https://www.github.com/abdulrahimiliasu",
  },
  {
    color: "#0a66c2",
    image: faLinkedinIn,
    url: "https://www.linkedin.com/in/abdulrahimiliasu",
  },
  {
    color: "#3b5998",
    image: faFacebookF,
    url: "https://www.facebook.com/in/abdulrahimiliasu",
  },
  {
    color: "#c32aa3",
    image: faInstagram,
    url: "https://www.instagram.com/in/abdulrahimiliasu",
  },
  {
    color: "#1da1f2",
    image: faTwitter,
    url: "https://www.twitter.com/in/illo_abdulrahim",
  },
  {
    color: "#fffc00",
    image: faSnapchatGhost,
    url: "https://www.snapchat.com/add/illo_abdool",
  },
]
export const data = {
  program_langs: [
    "C",
    "C++",
    "java",
    "JavaScript,PHP",
    "Python",
    "Swift/SwiftUI",
    "SQL/PLSQL",
  ],
  web_langs: [
    "HTML",
    "CSS",
    "XML",
    "Node.js",
    "Flask",
    "React.js",
    "Next.js, Gatsby",
    "NoSQL,CMS",
  ],
  design: [
    "UI/UX",
    "Logo Design",
    "Sketch",
    "Adobe XD",
    "Gravit",
    "Vectonator",
  ],
}

export const featured_projects = [
  {
    title: "Roompeer",
    description:
      "A website for helping international students find flatmates and apartments based on their preference.",
    url: "http://www.roompeer.com",
    github: "https://github.com/abdulrahimiliasu/roompeer",
    logo: "/images/logos/roompeer.JPG",
  },
  {
    title: "Face Mask Detection Software",
    description:
      "Covid-19 Face Mask Detection Software that helps detect people not wearing face-mask in public areas.",
    url: null,
    github: "https://github.com/abdulrahimiliasu/Face-Mask-Detection.git",
    logo: "/images/logos/python.png",
  },
  {
    title: "Boardgame",
    description:
      "This is a board game. Initially, a piece of stone is placed on the top left square of the board. The goal of the puzzle game is to move the stone to the bottom right square (green square).",
    url: null,
    github: "https://github.com/abdulrahimiliasu/stone-boardgame.git",
    logo: "/images/logos/java.png",
  },
]

export const programming_logos = [
  { src: "/images/logos/c.png", alt: "c-programming" },
  { src: "/images/logos/c++.png", alt: "c-programming" },
  { src: "/images/logos/swift.png", alt: "c-programming" },
  { src: "/images/logos/react.png", alt: "c-programming" },
  { src: "/images/logos/python.png", alt: "c-programming" },
  { src: "/images/logos/java.png", alt: "c-programming" },
  { src: "/images/logos/javascript.png", alt: "c-programming" },
  { src: "/images/logos/nextjs.png", alt: "c-programming" },
  { src: "/images/logos/maven.png", alt: "c-programming" },
  { src: "/images/logos/php.png", alt: "c-programming" },
  { src: "/images/logos/selenium.png", alt: "c-programming" },
  { src: "/images/logos/cucumber.png", alt: "c-programming" },
  { src: "/images/logos/android-studio.png", alt: "c-programming" },
  { src: "/images/logos/xcode.png", alt: "c-programming" },
  { src: "/images/logos/gatsby.png", alt: "c-programming" },
  { src: "/images/logos/sketch-logo.svg", alt: "c-programming" },
  { src: "/images/logos/figma-logo.svg", alt: "c-programming" },
  { src: "/images/logos/firebase.png", alt: "c-programming" },
  { src: "/images/logos/node.png", alt: "c-programming" },
  { src: "/images/logos/html.png", alt: "c-programming" },
  { src: "/images/logos/css3.png", alt: "c-programming" },
  { src: "/images/logos/nodejs.png", alt: "c-programming" },
]

export const menuData = [
  {
    title: "Projects",
    icon: "/images/icons/tutorials.svg",
    link: "/projects",
  },
  {
    title: "Certificates",
    icon: "/images/icons/courses.svg",
    link: "/certificates",
  },
]

export const tooltipData = menuData
export const certificatesData = [
  {
    name: "CCNA 1",
    org: "Cisco Networking Academy",
    id: "CCNA_RS1_ENG_201",
    url: "https://www.netacad.com/",
    icon: faWifi,
  },
  {
    name: "CCNA 2",
    org: "Cisco Networking Academy",
    id: "CCNA_RS1_ENG_201",
    url: "https://www.netacad.com/",
    icon: faWifi,
  },
  {
    name: "Python",
    org: "HackerRank",
    id: "F617F004CE21",
    url: "https://www.hackerrank.com/certificates/f617f004ce21",
    icon: faPython,
  },
  {
    name: "Java",
    org: "HackerRank",
    id: "EB8BC75265FF",
    url: "https://www.hackerrank.com/certificates/eb8bc75265ff",
    icon: faJava,
  },
  {
    name: "SQL",
    org: "HackerRank",
    id: "5B17CA07BBC4",
    url: "https://www.hackerrank.com/certificates/5b17ca07bbc4",
    icon: faDatabase,
  },
  {
    name: "Build an app with SwiftUI",
    org: "Design+Code",
    id: "DC-1624229922920",
    url: "https://designcode.io/certificate/1624229922920",
    icon: faSwift,
  },
  {
    name: "SwiftUI for iOS 14",
    org: "Design+Code",
    id: "DC-1624229353841",
    url: "https://designcode.io/certificate/1624229353841",
    icon: faSwift,
  },
  {
    name: "IOS 13 and Swift 5",
    org: "Udemy",
    id: "UC-ba3f8dbc-50ef-4382-b1d3-cc19c250962d",
    url: "https://www.ude.my/UC-ba3f8dbc-50ef-4382-b1d3-cc19c250962d",
    icon: faSwift,
  },
  {
    name: "Web app with React Hooks",
    org: "Design+Code",
    id: "DC-1623445596424",
    url: "https://designcode.io/certificate/1623445596424",
    icon: faReact,
  },
]
