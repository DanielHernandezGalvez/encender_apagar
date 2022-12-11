import React from "react";
import Logo from "../img/logo-amarillo_1.png";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #1a1a1a;
  color: #e3b041;
  position: relative;
  width: 100%;
  padding: 5px;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
const Navbar = () => {
  return (
    <Bg>
      <nav>
        <Nav>
          <img src={Logo} width="30px" />

          <li>Skills</li>
          <li>CV</li>
          <li>Proyects</li>
          <li>Gift</li>
          <li>Contact</li>
        </Nav>
      </nav>
    </Bg>
  );
};

export default Navbar;
