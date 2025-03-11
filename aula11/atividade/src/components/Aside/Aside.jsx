import React from "react";
import style from "./Aside.module.css";

function Aside() {
    return (
        <div className={style.aside}>
            <h2>Notícias do Mundo do Rock</h2>
            <p>Leia as últimas notícias, lançamentos e eventos do mundo do rock.</p>
        </div>
    )
};

export default Aside;