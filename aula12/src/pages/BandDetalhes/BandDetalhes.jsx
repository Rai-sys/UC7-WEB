import React from "react";
import { useParams } from "react-router-dom";
import style from "./BandDetalhes.module.css"
import bandas from "../../data/bancoBands";
import Band from "../../components/Band/Band";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";

function BandDetalhes() {
    const { id } = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));

    if (!band) return (<h2> Banda não encontrada. </h2>)
    return (
        <>
            <div>
                <Header />
                <Band className={style.banda} {...band} />
                <Aside />
                <Footer />
            </div>
        </>
    );
}

export default BandDetalhes;