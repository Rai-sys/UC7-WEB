import React from "react";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
        <h1> Senac </h1>
        <nav> 
            <ul>
                <li> <a href=""> Home </a> </li>
                <li> <a href=""> Sobre </a> </li>
                <li> <a href=""> Contato </a> </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;