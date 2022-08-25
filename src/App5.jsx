import './App.css'
import Blum from "./components/Blum5";
import { useState } from "react";

function App() {
  const [cambio, Change] = useState(true);
  const cambioEstado = () => {
    Change(!cambio)
  };
  return (
    <div>
      < Blum cambio={cambio} cambioEstado={cambioEstado} />
    </div>
  );
}

export default App;