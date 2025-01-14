import project1 from "../assets/projects/cv-generator.png";
import project2 from "../assets/projects/snake.png";
import project3 from "../assets/projects/clima.png";
import project4 from "../assets/projects/voice.png";

export const HERO_CONTENT = `I am a passionate web developer with a knack for building robust and scalable web applications. With over 2 years of professional experience, I have honed my skills in front-end technologies such as React and Next.js, as well as back-end technologies such as PHP, Node.js, and MySQL. My goal is to leverage my experience to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, PHP, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Developer",
    company: "Wolf Marketing 360",
    description: `I manage and develop customized web projects, designing and building websites and web applications tailored to each client’s specific needs. I coordinate meetings to identify and propose personalized digital solutions, and I design functional and visually appealing user interfaces, always prioritizing the user experience (UX/UI).`,
    technologies: ["Javascript", "React.js", "PHP", "MySql"],
  },
  {
    year: "2022 - 2023",
    role: "Programmer Analyst",
    company: "Nucleo de Diagnóstico",
    description: `I focused on the development and design of frontends for internal process software, specializing in creating user interfaces for microservices to ensure scalability and usability. My role also included supporting system maintenance from a frontend perspective, addressing issues related to user-facing functionality. Additionally, I contributed to the design and planning of systems by collaborating with teams to align interface solutions with organizational goals.`,
    technologies: ["Next.js", "Bootstrap", "React", "Typescript"],
  },
];

export const PROJECTS = [
  {
    title: "Resume Generator",
    image: project1,
    description:
      "An automatic resume generator where users input their information, and the application creates a professionally formatted PDF that can be downloaded.",
    technologies: ["Typescript","React", "Bootstrap"],
    link: "https://cvgenetator-dg.netlify.app/"
  },
  {
    title: "Snake Game",
    image: project2,
    description:
      "A classic Snake game built entirely with frontend technologies, featuring intuitive gameplay and game logic implemented from scratch.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://snake-game-dani-galvez.netlify.app/"
  },
  {
    title: "Weather app",
    image: project3,
    description:
      "A weather application that uses a REST API to provide real-time weather information for cities around the world. Users can search for any location and get accurate weather details instantly.",
    technologies: ["React", "CSS", "PWA"],
    link: "https://weather-app-danielgalvez.netlify.app/"
  },
  {
    title: "Convert voice to text",
    image: project4,
    description:
      "An application that allows users to record voice notes and converts them into text, storing the results in local storage. Additionally, it features a text-to-speech functionality, enabling users to listen to the stored text with a bot-generated voice.",
    technologies: ["React", "Bootstrap", "Typescript"],
    link: "https://chat-voice.netlify.app/"
  },
];

export const CONTACT = {
  address: "Zapopan Jalisco, México",
  phoneNo: "Send me an email by clicking the link below.",
  email: "hernandezgalvezalejandro@gmail.com",
};
