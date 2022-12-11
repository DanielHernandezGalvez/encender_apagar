import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Gift = () => {
  return (
    <Container>
      <h2>Gift</h2>
      <div className="iframe">
        <iframe
          src="https://danielhernandezgalvez.github.io/snakeGame/"
          width="600"
          height="600"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Gift;
