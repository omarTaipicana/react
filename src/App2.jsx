import './App.css'
import { useState } from "react";

function App() {
    const [mensaje, setCounter] = useState("Estado inicial...!");
    const cambioEstado = () => {
        if (mensaje="Estado inicial...!"){
            setCounter("El estado cambio...!")
        }else{
            setCounter("El estado cambio...!")
        }
    };

    return (
        <div className="App">
            <h1>{mensaje}</h1>
            <button onClick={cambioEstado}>Cambia mensaje</button>
        </div>
    );
}

export default App;