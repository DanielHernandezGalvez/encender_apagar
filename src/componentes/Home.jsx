import React from "react";
import styled from "styled-components";
import bg from "../img/home.png";
import foto from "../img/foto.png";

const Bg = styled.div`
  background-image: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: 100vmax;
  height: 55vmax;
`;
const Section = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 0;
`;

const H1 = styled.h1`
  font-size: 6vmax;
  color: #e6e6e6;
  margin-bottom: 1px;
`;

const H2 = styled.h2`
  margin-top: 1px;
  color: #e6e6e6;
  font-style: italic;
  font-weight: lighter;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const SubTitulo = styled.h2`
  color: #e3b041;
  margin-left: 10%;
`;
const Parrafo = styled.p`
  color: #e6e6e6;
  font-size: 1.5vmax;
  margin-left: 7%;
`;

const Img = styled.img`
  padding: 5%;
  border-radius: 20px;
`;
const Home = () => {
  return (
    <Bg>
      <Section>
        <Img src={foto} width="40%" />

        <div>
          <H1>Daniel Gálvez</H1>
          <H2>FrontEnd Developer</H2>
        </div>
      </Section>
      <SubTitulo>Sobre mí</SubTitulo>
      <Block>
        <Parrafo>
          soy una persona que la neta es bien buena
          ondajhdhjskalkasjdhflaksdhflkdjfhglskdfghlskdfghlskdjfghl
          <br />
          skdjfhgslkdjfghslkdfjghslkdfjghlskdfj
          ghlskdjfghslkdfjhglskdfjhglskdjfhglskdfhgl skdjfhglskdjfhglskjdfhgl
        </Parrafo>
      </Block>
    </Bg>
  );
};

export default Home;
