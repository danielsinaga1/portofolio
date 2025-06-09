// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
// import profile from "./assets/profile.jpg";
import profile from "./assets/profile-photos.png"
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Daniel Giovanni Sinaga",
  tagline: "Software Engineer",
  img: profile,
  about: `Results-oriented Software and Application Development with excellent technical skills, and enthusiastic
about learning digital development. Proven track record of success in project management, problemsolving,
and cross-functional collaboration. Adept at utilising cutting-edge technologies to optimise
processes and enhance overall efficiency.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/danielgiovannisinaga/",
  github: "https://github.com/danielsinaga1",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software & Development Officer",
    Company: `PT Kaltim Parna Industri`,
    Location: "Bontang, Kalimantan Timur",
    Type: "Full Time",
    Duration: "Mei 2019 - Now",
  },
  {
    Position: "Java Developer",
    Company: `PT Danamon Tbk `,
    Location: "Jakarta",
    Type: "Contract",
    Duration: "Sep 2018 - Mei 2019",
    
  },
  {
    Position: "Internship",
    Company: `PT Global Visi Media (GVM Networks)`,
    Location: "Jakarta, Indonesia",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  
  {
    Position: "Bachelor of Computer Science",
    Company: `Institut Teknologi Del`,
    Location: "Sitoluama, Sumatera Utara",
    Type: "Graduated",
    Duration: "Aug 2014 - Jul 2018",
    
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Push Notification FCM Android",
    image: projectImage1,
    description: `Implement a scalable and efficient push notification system to enhance user engagement on the Womantalk mobile applications (Android).`,
    techstack: "Java Spring Boot, Firebase Cloud Messaging (FCM)",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Payment Gateway Service (EDC, etc) for Cash Management Digital Banking",
    image: projectImage2,
    description: `Design and implement secure and reliable payment gateway service endpoints to support various transaction types and business operations for PT Bank Danamon.`,
    techstack: "Angular, Java Spring Boot, PostgreSQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Incident Report Monitoring System",
    image: projectImage3,
    description: `Build and sustain a centralized Incident Report Monitoring System (IRMS) to streamline the tracking, escalation, and resolution of incidents across the organization.Build and sustain a centralized Incident Report Monitoring System (IRMS) to streamline the tracking, escalation, and resolution of incidents across the organization.`,
    techstack: "React, Java Spring Boot, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Laboratory Information Management System",
    image: projectImage4,
    description: `Design, implement, and maintain a Laboratory Information Management System (LIMS) to support end-to-end workflows in chemical sample analysis, laboratory data reporting, and inventory tracking`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "PT KPI’s Main Corporate Website",
    image: projectImage5,
    description: `uild and sustain a responsive, secure, and user-friendly corporate website to represent PT KPI’s brand, deliver up-to-date company information, and support public communications.`,
    techstack: "React, Laravel, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "MG Store Topup Website",
    image: projectImage6,
    description: `Build a user-friendly web platform for MG Store to enable seamless digital top-up transactions such as multiple payment gateways (e.g., QRIS, e-wallets, virtual accounts) for secure and flexible payments.`,
    techstack: "React, Java Spring Boot, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "Threebond Sales and Marketing Website",
    image: projectImage6,
    description: `Create an official web platform for ThreeBond to support digital marketing initiatives, showcase product offerings, and generate sales leads.`,
    techstack: "React, Java Spring Boot, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sinagadaniel012@gmail.com",
  phone: "+62 821-9821-9265",
};
