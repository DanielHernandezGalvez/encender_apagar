import Cv from "./componentes/Cv";
import Gift from "./componentes/Gift";
import Home from "./componentes/Home";
import Skills from "./componentes/Skills";
// import Navbar from "./componentes/Navbar";
// import BgAnimado from "./componentes/BgAnimado";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Cv />
      <Skills />
      <Gift />

      {/* <BgAnimado /> */}
    </div>
  );
}

export default App;
