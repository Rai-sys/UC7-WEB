import React from 'react'
import style from './Home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Aside from '../../components/Aside/Aside'
import Main from '../../components/Main/Main'

function Home() {
    return (
        <div className={style.home}>
            <Header />
            <Main />
            <Aside />
            <Footer />
        </div>
    )
};

export default Home;