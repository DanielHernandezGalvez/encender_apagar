import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
`;

const H2 = styled.h2`
  color: #e3b041;
  margin-left: 10%;

  text-shadow: 2px 2px 10px black;
  margin-bottom: 5%;
`;

const Gift = () => {
  return (
    <div>
      <H2>Gift</H2>
      <Container>
        <div className="iframe">
          <iframe
            src="https://danielhernandezgalvez.github.io/snakeGame/"
            width="600%"
            height="300%"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Gift;
