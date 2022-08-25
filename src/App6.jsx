import React from 'react';
import './App.css'
import { useState } from "react";

const App6 = () => {

    const [isVisible , setIsVisible]=useState(true)
    const togleVisibility = ()=>{
        setIsVisible (!isVisible)
    }

        const mostrar="https://flyclipart.com/thumbs/file-svg-password-eye-icon-1168029.png"
        const noMostrar="https://thumbs.dreamstime.com/b/sin-ojos-icono-negro-cruzado-de-globo-ocular-concepto-evitar-mirar-secreto-como-contrase%C3%B1a-s%C3%ADmbolo-vector-aislado-en-fondo-206835221.jpg"

    return (
        <div className='App'>
            <input type={isVisible ? "text":"password"} />
            <img onClick={togleVisibility} src={isVisible?mostrar:noMostrar} alt="" />
            <button className='btn' onClick={togleVisibility}>{isVisible?"No Mostrar":"Mostrar"}</button>
           
            
        </div>
    );
};

export default App6;