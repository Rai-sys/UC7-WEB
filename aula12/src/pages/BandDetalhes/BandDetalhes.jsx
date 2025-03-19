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

    if (!band) {
        return (
            <>
                <Header />
                <h2> Nenhuma banda encontrada </h2>
                <Aside />
            </>
        );
    }
    return (
        <>
            <Header />
            <div className={style.band}>
                <Band {...band} />
            </div>
            <Aside />
            <Footer />
        </>
    )

}



export default BandDetalhes;