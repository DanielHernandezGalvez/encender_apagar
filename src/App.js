import Cv from "./componentes/Cv";
import Gift from "./componentes/Gift";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
        <Cv />
      <Gift />
    </div>
  );
}

export default App;
