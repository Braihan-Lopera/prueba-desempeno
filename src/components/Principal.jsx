import React from "react";
import "../styles/Principal.css"
import ContenedorUno from "./ContenedorUno";
import ContenedorDos from "./ContenedorDos";
import ContenedorTres from "./ContenedorTres";
import ContenedorCuatro from "./contenedorCuatro";


export default function Principal(){
    return(
        <div className="div_Main">
            <div className="cards">
            <ContenedorUno />
            <ContenedorDos />
            <ContenedorTres />
            <ContenedorCuatro/>
            </div>
            <h2 className="titulo_componente">COMPONENTE DOS</h2>
        </div>
    )
}