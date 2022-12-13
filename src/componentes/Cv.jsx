import React from "react";
import styled from "styled-components";
import CV from "../curriculum/curriculum.pdf";
import pagina from "../img/html.png"


const H2 = styled.h2`
  color: #e3b041;
  margin-left: 10%;
  text-shadow: 2px 2px 10px black;
`;

const Cv = () => {
  return (
    <div>
      <H2>Curriculim Vitae</H2>

      <a download href={CV} target="_blank">
        <img src={pagina} />
      </a>
    </div>
  );
};

export default Cv;
