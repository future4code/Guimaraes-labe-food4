import React, {useEffect, useState} from "react";
import HeaderHome from '../../components/Header/HeaderHome'
import Footer from '../../components/Footer/Footer'
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Tela, ButtonSubmit, SubmitLine } from "./styled";
import {goToSearchPage} from '../../routes/coordinator'
import TextField from '@material-ui/core/TextField'
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import SliderComponent from "../../components/Slider/SliderComponent";
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import GlobalState from "../../global/GlobalState";
import axios from "axios";
import {BASE_URL} from '../../constants/url'

const HomePage = () => {
    const navigate = useNavigate()
    const [restaurants,setRestaurants]=useState([])
    const [filtroRestaurants,setFiltorRestaurants]=useState([])
    
    useEffect(()=>{
        getRestaurants()
       
    },[])
  const getRestaurants=()=>{
    axios.get(`${BASE_URL}/restaurants`,{
        headers:{
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlPdXY4TWNzTXdLVGUzYktRT09rIiwibmFtZSI6Imxlb25hcmRvIiwiZW1haWwiOiJsZW9uYXJkb0Bob3RtYWlsLmNvbSIsImNwZiI6IjEyMS4yMjEuMTExLTk5IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxMDAgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjUyNjM5MDgwfQ.HhlQTvUHHDqda3ffLeEmvYyJ7A-GJJuBH5CEncUS0c0"
        }
    }).then((response)=>{
        setRestaurants(response.data.restaurants)
        setFiltorRestaurants(response.data.restaurants)
      
    }).catch((error)=>{
      console.log(error.response)

    })
    
  }
  const renderRestaurants=(props)=>{
      
         const restaurantes= restaurants.map((restaurant,index)=>{
             return(
                 <CardRestaurant key={index} imagem={restaurant.logoUrl} name={restaurant.name} deliveryTime={restaurant.deliveryTime} frete={restaurant.shipping}/>
             )
         })
         return restaurantes
      
  }
  const filtroRestaurant=(category)=>{
    
      const restaurantes=[...filtroRestaurants]
      const filtro=restaurantes.filter((restaurante)=>{
          return(
            restaurante.category===category
          )

      }) 
      setRestaurants(filtro)
  }
  
    return (
        
        <Tela>
            
            <HeaderHome/>
            <Container maxWidth="sm"  style={{paddingTop: '60px', paddingBottom: '50px'}}>

            <FormControl fullWidth sx={{ m: 1 }}
            onClick={()=>goToSearchPage(navigate)}>
          <OutlinedInput
            startAdornment={<InputAdornment position="start">
                <SearchIcon/> Restaurante
                </InputAdornment>}
          />
        </FormControl>
        
        


            <SliderComponent filtroRestaurant={filtroRestaurant} />
            
            {renderRestaurants()}
            </Container> 
        <Footer/>
                  
        </Tela>
    )
}

export default HomePage;