import React from "react";
import Header from "../components/Header"
import Principal from "../components/Principal";
import "../styles/Home.css"
export default function Home(){
    return(
        <div className="home_Div">
            <Header />
            <Principal />
        </div>
    )
}