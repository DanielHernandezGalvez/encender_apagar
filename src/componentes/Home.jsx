import React from "react";
import styled from "styled-components";
import bg from "../img/home.png"


const Bg = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height:1000px;
  width: 100%;
`;

const H1 = styled.h1`
font-size:54px ;
color:#E6E6E6;
margin-bottom:1px;
`

const H2 = styled.h2`
margin-top: 1px;
color: #E6E6E6 ;

`
const Home = () => {
  return (
    <Bg>
    
    <div>
      <H1>Daniel Gálvez</H1>
      <H2>FontEnd Developer</H2>
    </div>
    </Bg>
  );
};

export default Home;
