import Ejerciciodos from "./components/Ejerciciodos";
import Ejerciciotres from "./components/Ejerciciotres";
import Ejerciciouno from "./components/Ejerciciouno";
import TituloPrincipal from "./components/TituloPrincipal";

// para importar hoja de estilo
import "../src/style/style.css"


function App() {
  //logica
  const saludo = "my friend";
  return (
    <>
    <TituloPrincipal />
    <Ejerciciouno />
    <Ejerciciodos saludarAmigo={saludo}/>
    <Ejerciciotres saludarAmigo={saludo}/>
    </>
    
  );
}

export default App;
