import React from "react";
import { Link } from "react-router-dom";
import style from "./Main.module.css";
import Band from "../Band/Band";
import bandas from "../../data/bancoBands";

function Main() {
    return (
        <main className={style.main}>
            {
                bandas.map((banda, index) => ( /* index para buscar o componente(banda) na const*/
                    
                        <section>
                            <Link key={banda.id} to={`band/${banda.id}`}>
                            <Band key={index} {...banda} />
                            </Link>
                        </section>
                  
                ))
            }

            {/* <section>
                <Band imagem="https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg" nome="banda 01" descricao="banda ok" />
            </section> */}
        </main>
    )
};

export default Main;