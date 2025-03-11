import React from "react";
import style from "./Main.module.css";
import Band from "../Band/Band";

function Main() {
    return(
        <div className={style.main}>
            <Band />
        </div>
    )
};

export default Main;