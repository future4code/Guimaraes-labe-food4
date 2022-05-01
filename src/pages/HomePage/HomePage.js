import React from "react";
import HeaderHome from '../../components/Header/HeaderHome'
import Footer from '../../components/Footer/Footer'
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Container from '@material-ui/core/Container';

const HomePage = () => {
    return (
        <div style={{paddingBottom: "56px"}}>
            
            <HeaderHome/>
            <Container maxWidth="sm"  style={{paddingTop: '60px'}}>
            <p>Seach</p>
            <CardRestaurant/>          
            </Container>
            <Footer/>
            
           
                   
                   
                   
        </div>
    )
}

export default HomePage;