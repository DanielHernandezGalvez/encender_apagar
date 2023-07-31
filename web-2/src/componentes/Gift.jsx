import React from "react";
import styled from "styled-components";

const Bg = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 0.89)'%3e%3c/rect%3e%3cpath d='M1286.949%2c386.402C1314.25%2c386.468%2c1340.239%2c373.278%2c1353.959%2c349.675C1367.746%2c325.957%2c1366.683%2c296.629%2c1352.929%2c272.892C1339.213%2c249.22%2c1314.306%2c233.665%2c1286.949%2c234.021C1260.162%2c234.37%2c1237.251%2c251.359%2c1223.877%2c274.571C1210.526%2c297.743%2c1207.363%2c326.056%2c1220.501%2c349.35C1233.854%2c373.025%2c1259.768%2c386.336%2c1286.949%2c386.402' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M654.3158285198323 487.84613890932224L564.8125111629646 377.1031165556865 518.1848174876302 492.51070817662884z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1142.8514997448644 190.95796682455577L1230.8445539622762 93.23177959265459 1133.118366730375 5.238725375242865 1045.1253125129633 102.96491260714403z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M292.8281332736075 363.86728880084235L221.1587357644259 358.8556763191131 249.47601579642281 468.86557882375007z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M157.04510686580275 423.71977533992487L60.82261015413367 546.8789548347518 183.98178964896059 643.1014515464209 280.2042863606297 519.9422720515939z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M628.5947235714233 4.203051924807205L487.9922118875651 55.37818104079754 679.7698526874136 144.80556360866538z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M694.0796531452529 392.9382774503311L645.0937032414614 520.5510398683366 772.706465659467 569.536989772128 821.6924155632585 441.92422735412254z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M26.785%2c186.748C51.752%2c185.482%2c71.676%2c167.759%2c83.465%2c145.714C94.529%2c125.025%2c95.798%2c100.234%2c83.846%2c80.046C72.106%2c60.217%2c49.81%2c50.917%2c26.785%2c49.975C1.664%2c48.947%2c-25.095%2c54.061%2c-38.98%2c75.021C-54.176%2c97.96%2c-54.773%2c128.305%2c-40.815%2c152.018C-27.042%2c175.417%2c-0.332%2c188.124%2c26.785%2c186.748' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M64.2555099263976 513.3258043462617L24.79203787944268 472.4601827542132-16.77465848515277 552.0882016206699z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M374.5697118938191 19.320380527726833L352.04745519203345 103.37458683989948 458.62391820599174 41.84263722951247z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1026.41574706154 276.2064548504784L1130.0357620404106 198.1231728914383 1051.9524800813706 94.5031579125677 948.3324651024999 172.5864398716078z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M783.8383316821034 300.7495940175601L790.1262340791344 228.87854074483812 679.175702971536 255.38221378565277z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M590.6090542110113 457.97212240599066L504.158178451569 471.66459597871597 517.8506520242943 558.1154717381582 604.3015277837366 544.422998165433z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M98.414%2c140.294C132.592%2c141.769%2c163.2%2c118.454%2c178.553%2c87.883C192.531%2c60.05%2c184.858%2c27.64%2c168.207%2c1.319C152.831%2c-22.986%2c127.164%2c-39.552%2c98.414%2c-38.796C70.838%2c-38.07%2c48.434%2c-19.095%2c34.705%2c4.832C21.05%2c28.63%2c17.742%2c56.62%2c29.419%2c81.448C43.207%2c110.765%2c66.047%2c138.898%2c98.414%2c140.294' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M24.44338383594146 358.02991471317443L113.17717904419156 240.2761912793401-93.31033959789286 269.2961195049243z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M428.48547149747316 150.540973775941L516.9401299337351 95.26836868551311 373.2128664070452 62.08631533967912z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M73.77217554408409 526.1880348555345L160.57948094891862 607.1371567325019 241.52860282588605 520.3298513276675 154.72129742105153 439.38072945069996z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M341.714%2c375C376.246%2c374.251%2c403.391%2c349.147%2c420.71%2c319.263C438.088%2c289.276%2c444.712%2c254.066%2c429.978%2c222.695C412.714%2c185.935%2c382.323%2c151.592%2c341.714%2c151.063C300.475%2c150.526%2c267.693%2c183.391%2c249.372%2c220.341C233.067%2c253.225%2c237.732%2c291.311%2c256.548%2c322.825C274.841%2c353.463%2c306.039%2c375.774%2c341.714%2c375' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M51.71834764678382 441.09627317733543L-53.16484632595101 459.59001009760806 70.21208456705644 545.9794671500703z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1225.0356920462482 190.90806749647618L1367.277858077032 121.53192765506687 1297.9017182356226-20.710238375716983 1155.659552204839 48.66590146569234z' fill='rgba(223%2c 222%2c 27%2c 0.76)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  margin-bottom: 15%;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Container = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  width: 90vw;
  height: 25vh;
  margin-left: 4.5%;

  /* background-size: cover; */
`;

const H2 = styled.h2`
  color: #e3b041;
  margin-left: 10%;
  margin-top: 20%;
  text-shadow: 2px 2px 10px black;
  margin-bottom: 5%;
`;

const H3 = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #e6e6e6;
  margin-bottom: 5%;
  flex-direction: column;
`;

const Iframe = styled.iframe`
  border: none;
  margin: 20px;
`;

const Bottom = styled.p`
  margin-bottom: -50%;
  @media screen and (max-width: 1408px) {
    margin-bottom: -10rem;
  }
`;

const Gift = () => {
  return (
    <>
      <H2>Gift</H2>
      <H3>
        Es agotador trabajar todo el día, date un breack para jugar y relajarte
      </H3>
      <Bg>
        <Container>
          <Iframe
            src="https://danielhernandezgalvez.github.io/snakeGame/"
            width="600%"
            height="300%"
            allowfullscreen
          ></Iframe>
        </Container>
      </Bg>

      {/* <Bottom></Bottom> */}
    </>
  );
};

export default Gift;
