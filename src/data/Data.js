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
} from "@fortawesome/free-brands-svg-icons"
import { faCode, faDatabase, faWifi } from "@fortawesome/free-solid-svg-icons"

export function getRepos() {
  var repo_list = []
  if (typeof XMLHttpRequest !== "undefined") {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        repo_list = JSON.parse(xhttp.responseText)
      }
    }
    xhttp.open(
      "GET",
      "https://api.github.com/users/abdulrahimiliasu/repos",
      false
    )
    xhttp.send(null)
  }

  return repo_list
}

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
    "JavaScript",
    "Python",
    "Swift/SwiftUI",
    "SQL/PLSQL",
  ],
  web_langs: ["HTML", "CSS", "XML", "Node.js", "React.js", "JQuery", "MongoDB"],
  design: [
    "UI/UX",
    "Logo Design",
    "Sketch",
    "Adobe XD",
    "Gravit",
    "Vectonator",
  ],
}

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
]
