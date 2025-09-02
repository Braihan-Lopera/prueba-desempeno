import React from "react";
import "../styles/Principal.css"
import ContenedorUno from "./ContenedorUno";
import ContenedorDos from "./ContenedorDos";
import ContenedorTres from "./ContenedorTres";


export default function Principal(){
    return(
        <div className="div_Main">
            <ContenedorUno />
            <ContenedorDos />
            <ContenedorTres/>
        </div>
    )
}