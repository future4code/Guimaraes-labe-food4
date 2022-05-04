import React from "react";
import HeaderHome from '../../components/Header/HeaderHome'
import Footer from '../../components/Footer/Footer'
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Container from '@material-ui/core/Container';
import { ContainerPrincipal, Tela } from "./styled";

const HomePage = () => {
    return (

        <Tela>
            <HeaderHome/>
            <Container maxWidth="sm"  style={{paddingTop: '60px', paddingBottom: '50px'}}>
            <p>Seach</p>
            <CardRestaurant/>  
                   
            </Container> 
        <Footer/>          
        </Tela>
    )
}

export default HomePage;