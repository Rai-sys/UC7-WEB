import React from "react";
import style from "./Main.module.css";
import Band from "../Band/Band";

const bandas = [
    {
        nome:'Banda 01',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        nome:'Banda 02',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        nome:'Banda 03',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        nome:'Banda 04',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
];

function Main() {
    return (
        <main className={style.main}>
            {
                bandas.map((banda, index) => ( /* index para buscar o componente(banda) na const*/
                    <section>
                        <Band key={index} {...banda}/>
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