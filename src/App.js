import Cv from "./componentes/Cv";
import Footer from "./componentes/Footer";
import Gift from "./componentes/Gift";
import Home from "./componentes/Home";
import Proyectos from "./componentes/Proyectos";
import Skills from "./componentes/Skills";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Contacto from "./componentes/Contacto";
function App() {
  return (
    
    <>
   
    <div className="App">
       <Navbar />
      
      <Home />
      <Skills />
      <Proyectos />
      <Gift />
      <Contacto />
    </div>
    <Footer />
    </>
  );
}

export default App;
