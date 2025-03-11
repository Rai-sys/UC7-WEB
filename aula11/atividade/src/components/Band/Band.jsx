import React from "react"
import style from "./Band.module.css"

function Band() {
    return(
        <div className={style.band}>
            <section className={style.section}>
            <div class={style.band}>
                <img src="https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg" alt="Banda 1" />
                <div class={style.band-info}>
                    <h2>Banda 1</h2>
                    <p>Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        
            <div class={style.band}>
                <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                <div class={style.band-info}>
                    <h2>Banda 2</h2>
                    <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class={style.band}>
                <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                <div class={style.band-info}>
                    <h2>Banda 3</h2>
                    <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class={style.band}>
                <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2" />
                <div class={style.band-info}>
                    <h2>Banda 4</h2>
                    <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
        </div>
    )
};

export default Band;