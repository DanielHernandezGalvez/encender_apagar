import React from "react";
import styled from "styled-components";
import bg from "../img/home.png";
import foto from "../img/foto.png";

const Bg = styled.div`
  background-image: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw;
  height: auto;
`;
const Section = styled.div`
  display: flex;
  flex-flow: row ;
  padding: 2%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 0;
`;

const H1 = styled.h1`

  font-size: 6vmax;
  color: #e6e6e6;
  margin-bottom: 1px;
  text-shadow: 2px 2px 10px black;
`;

const H2 = styled.h2`
  margin-top: 1px;
  color: #e6e6e6;
  font-style: italic;
  font-weight: lighter;
  text-shadow: 2px 2px 10px black;
`;


const SubTitulo = styled.h2`
  color: #e3b041;
  margin-left: 10%;
  text-shadow: 2px 2px 10px black;
`;
const Parrafo = styled.p`
  color: #e6e6e6;
  font-size: 1.5vmax;

  text-shadow: 2px 2px 10px black;
`;

const Img = styled.img`
  padding: 5%;
  border-radius: 20px;
`;
const Home = () => {
  return (
    <>
      {" "}
      <Bg>
        <Section>

        
          <Img src={foto} width="40%" />

          <div>
            <H1>Daniel Gálvez</H1>
            <H2>FrontEnd Developer</H2>
          </div>
        </Section>
        <SubTitulo>Sobre mí</SubTitulo>
        <Section>
       
          <Parrafo>
            Soy un desarrollador FrontEnd de Zapopan, México, me gusta to
          </Parrafo>
        </Section>
      </Bg>
    </>
  );
};

export default Home;
