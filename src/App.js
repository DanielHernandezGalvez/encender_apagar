import Cv from "./componentes/Cv";
import Footer from "./componentes/Footer";
import Gift from "./componentes/Gift";
import Home from "./componentes/Home";
import Proyectos from "./componentes/Proyectos";
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
      <Proyectos />
      <Gift />

      <Footer />
      {/* <BgAnimado /> */}
    </div>
  );
}

export default App;
