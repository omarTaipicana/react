import React from 'react';

const Blum = ({ cambio, cambioEstado, darClase, move }) => {

    return (
        <div className="App">
            <div className='bombillo' style={{ background: cambio ? "yellow" : "black", color: cambio ? "black" : "white" }} >{cambio ? "ON" : "OFF"}</div>
            <button className={ cambio ? "nosombra" : "sombra"} onClick={cambioEstado} >{cambio ? "OFF" : "ON"}</button>
        </div>
    );
}

export default Blum;