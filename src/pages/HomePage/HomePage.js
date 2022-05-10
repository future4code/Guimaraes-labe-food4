import React from "react";
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



const HomePage = () => {
    const navigate = useNavigate()
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




            <SliderComponent/>
   
            <CardRestaurant/>  
                   
            </Container> 
        <Footer/>          
        </Tela>
    )
}

export default HomePage;