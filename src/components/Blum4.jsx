import React from 'react';
import { useState } from "react";

const Blum = () => {
    const [cambio, Change] = useState(true);
    const cambioEstado = () => {
        Change (false)
    };
    const cambioEstado2 = () => {
        Change (true)
    };

    return (
        <div className="App">
            <div className='bombillo' style={cambio ? { backgroundColor: "yellow" }:{ backgroundColor: "black", color:"white"}}>{cambio?"ON":"OFF"}</div>
            <button onClick={cambio?cambioEstado:cambioEstado2}
            >{cambio? "off":"on"}</button>
        </div>
    );
}

export default Blum;