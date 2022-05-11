import React, { useContext } from "react";
import { ContainerCard, ContainerPrincipal, Tela } from "./styled";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant'
import CardProduct from "../../components/CardProduct/CardProduct";
import { Title } from "../../components/CardProduct/styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
const RestaurantPage = () => {
    const {restaurants,setRestaurants}=useContext(GlobalStateContext)
    return (
        <Tela>
            <ContainerPrincipal>
                <Header title="Restaurante"/>
                <ContainerCard>
                <CardRestaurant categoria="Burger" endereco="R. Fradique Coutinho, 1136 - Vila Madalena"/> 
                <Title>Principais</Title>
                <CardProduct/> 
                <CardProduct/> 
               
                <Title>Acompanhamentos</Title>
                <CardProduct/>
                <CardProduct/>
            </ContainerCard>
            </ContainerPrincipal>
            <Footer/>
        </Tela>
    )
}

export default RestaurantPage;