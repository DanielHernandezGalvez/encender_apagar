import React from "react";
import styled from "styled-components";



const Container = styled.footer`
  margin-top: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-top: 5px;
  background-color: #1a1a1a;
  box-shadow: -2px 5px 20px rgba(0, 0, 0, 0.6);
  color: #e6e6e6;
`;

const Nombre = styled.b`
color: #e3b041;
`

const Footer = () => {
  return (
    <Container>

   <p>© 2022 - Desarrollado por <Nombre>Daniel Gálvez</Nombre></p>
    </Container>
  );
};

export default Footer;
