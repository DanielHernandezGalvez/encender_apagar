import project1 from "../assets/projects/cv-generator.png";
import project2 from "../assets/projects/snake.png";
import project3 from "../assets/projects/clima.png";
import project4 from "../assets/projects/voice.png";

export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like PHP, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Developer",
    company: "Wolf Marketing 360",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "PHP", "MySql"],
  },
  {
    year: "2022 - 2023",
    role: "Analist Programer",
    company: "Nucleo de Diagnóstico",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Next js", "Bootstrap", "React", "Typescript", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "Resume Generator",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Typescript","React", "Bootstrap"],
    link: "https://cvgenetator-dg.netlify.app/"
  },
  {
    title: "Snake Game",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://snake-game-dani-galvez.netlify.app/"
  },
  {
    title: "Weather app",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "CSS", "PWA"],
    link: "https://weather-app-danielgalvez.netlify.app/"
  },
  {
    title: "Convert voice to text",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React", "Bootstrap", "Typescript"],
    link: "https://chat-voice.netlify.app/"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
