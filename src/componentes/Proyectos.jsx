import rick from "../img/ryck-and-morty.png";
import clima from "../img/clima.png";
import marvel from "../img/marvel.png";
import styled from "styled-components";

const H2 = styled.h2`
  color: #e3b041;
  margin-left: 10%;
  text-shadow: 2px 2px 10px black;
  margin-bottom: 10%;
  margin-top:20%;
`;

const ContenedorUno = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 10%;
  
`;

const Cajas = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 200%;
  font-weight: bolder;
  color: #e6e6e6;
  /* margin-bottom: 40%; */
`;

const Img = styled.img`
  padding-top: 5%;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const A = styled.a`
  color: #e6e6e6;
  text-decoration: none;
  font-size: large;
`;

const Proyectos = () => {
  return (
    <>
      <H2 id="proyectos">Proyectos</H2>
      <ContenedorUno>
        <div>
          <Cajas>
            App de Rick y Morty
            <a
              href="https://www.linkedin.com/in/-daniel-g%C3%A1lvez-70a897230/"
              target="_blank"
            >
              {" "}
              <Img src={rick} />
            </a>
            <A href="https://github.com/DanielHernandezGalvez">Repositorio</A>
          </Cajas>
        </div>

        <div>
          <Cajas>
            App del clima
            <a
              href="https://www.linkedin.com/in/-daniel-g%C3%A1lvez-70a897230/"
              target="_blank"
            >
              {" "}
              <Img src={clima} />
            </a>
            <A href="https://github.com/DanielHernandezGalvez">Repositorio</A>
          </Cajas>
        </div>

        <div>
          <Cajas>
            App de Marvel 
            <a
              href="https://www.linkedin.com/in/-daniel-g%C3%A1lvez-70a897230/"
              target="_blank"
            >
              <Img src={marvel} />
            </a>
            <A href="https://github.com/DanielHernandezGalvez">Repositorio</A>
          </Cajas>
        </div>
      </ContenedorUno>
    </>
  );
};

export default Proyectos;
