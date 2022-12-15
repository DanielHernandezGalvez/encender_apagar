import React from "react";
import styled from "styled-components";
import CV from "../curriculum/curriculum.pdf";
import cvIcon from "../img/cv-icon.png";
import linked from "../img/linkedin.png";
import gitHub from "../img/github_1.png";

const Img = styled.img`
  height: 10vh;
`;

const Container = styled.footer`
  margin-top: 20%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-evenly;
  padding: 5%;
`;
const Footer = () => {
  return (
    <div>
      {/* <H2>Curriculim Vitae</H2> */}
      <Container>
        <a download href={CV} target="_blank">
          <Img src={cvIcon} />
        </a>

        <a href="https://github.com/DanielHernandezGalvez" target="_blank">
          <Img src={gitHub} />
        </a>
        <a
          href="https://www.linkedin.com/in/-daniel-g%C3%A1lvez-70a897230/"
          target="_blank"
        >
          <Img src={linked} />
        </a>
      </Container>
    </div>
  );
};

export default Footer;
