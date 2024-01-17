import Navegacion from "./components/Navegacion";
import Cuerpo from "./components/Cuerpo";
import "./App.css";
import Imagenes from "./components/Imagenes/imagenes";

const App = () => {
  return (
    <main>
      <div className="main"></div>
      <div className="app">
        <Navegacion />
        <Cuerpo />
        <Imagenes />
      </div>
    </main>
  );
};

export default App;
