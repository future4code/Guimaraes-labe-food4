import React from "react";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ClickButton from '../../components/Button/ClickButton'



const HomePage = () => {
    return (
        <>
            <Header/>
            <h1>HomePage</h1>
            <ClickButton >Criar</ClickButton>
            <Footer/>
        </>
    )
}

export default HomePage;