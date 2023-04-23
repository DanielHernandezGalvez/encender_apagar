import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import reacciona from "../img/reactjs.png";
import js from "../img/js.png";
import git from "../img/git.png";
import redux from "../img/redux.png";
import node from "../img/nodejs.png";
import sass from "../img/sass.png";
import sql from "../img/sql.png";
import posgres from "../img/postgresql.png";
import bootstrap from "../img/bootstrap.png";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* padding: 1%; */
  
`;

const Img = styled.img`
  width: 100%;
  margin-bottom:20px;
  padding:5px;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e6e6e6;
  font-weight: bold;
  border-radius: 10px;
  padding:5px;
  &:hover{
    transform:scale(1.03);
    transition: 0.2s ease-out;
    box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.6);
  }
`;
const SubTitulo = styled.h2`
  color: #e3b041;
  margin-left: 10%;
  margin-top:-70px;
  padding: 5%;
  text-shadow: 2px 2px 10px black;
  @media only screen and (max-width: 1400px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
    padding: 10%;
  }
`;
const SpanContainer = styled.div`
  width: 90vw;
  display: block;
  justify-content:center ;
  align-items: center;
  box-shadow: 2px 2px 10px black;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: rgba(227, 176, 65, 0.3);
  border-radius: 10px;
  border: none;
  
`;

const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 10%;
margin-bottom: 10%;
`
const Skills = () => {
  return (
    <Div id="skills">
      <SpanContainer>
        <SubTitulo >Tech Skills</SubTitulo>

       
          <Container>
            <Span>
              <Img src={html} />
              HTML
            </Span>
            <Span>
              <Img src={css} />
              CSS
            </Span>
            <Span>
              <Img src={js} />
              JavaSript
            </Span>
            <Span>
              <Img src={reacciona} />
              React Js
            </Span>
            <Span>
              <Img src={redux} />
              Redux
            </Span>
            <Span>
              <Img src={sass} />
              Sass
            </Span>
          </Container>
          <Container>
            <Span>
              <Img src={git} />
              Git
            </Span>
            <Span>
              <Img src={node} />
              Node Js
            </Span>
            <Span>
              <Img src={sql} />
              SQL
            </Span>
      
            <Span>
              <img src={bootstrap} width="75%" />
              Bootstrap
            </Span>
          </Container>
        
      </SpanContainer>
    </Div>
  );
};

export default Skills;
