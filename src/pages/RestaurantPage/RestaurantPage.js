import React, { useContext, useEffect, useState } from "react";
import { ContainerCard, ContainerPrincipal, Tela } from "./styled";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant'
import CardProduct from "../../components/CardProduct/CardProduct";
import { Title } from "../../components/CardProduct/styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
const RestaurantPage = () => {
    useProtectedPage()
    const param=useParams()
    const token=localStorage.getItem("token")
    const [restauran,setRestaurante]=useState()
    useEffect(()=>{getRestaurantDetail()}
    ,[])
   const getRestaurantDetail=()=>{
    axios.get(`${BASE_URL}/restaurants/${param.id}`,{
        headers:{
            auth: token
        }
    }).then((response)=>{
        setRestaurante(response.data.restaurant)
        console.log(response.data.restaurant)
    }).catch((error)=>{
      console.log(error.response)
    })
   }
    return (
        <Tela>
           
            <ContainerPrincipal>
                <Header title="Restaurante"/>
                <ContainerCard>
                <CardRestaurant  /> 
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