import React, { useState } from 'react';

import {Text, Container} from './styles'

const SliderComponent = (props) => {
  
  //const [searchType, setSearchType] = useState("");

  //const handleType = (value) => {
    //if (value === searchType) {
    //  setSearchType("");
    //} else {
    //  setSearchType(value);
    //}
  //};

    return (
        <Container>
          
          <Text 
         onClick={()=>{props.filtroRestaurant("Hamburguer")}}
          >
            Hamburguer
          </Text>
          <Text 
          onClick={()=>{props.filtroRestaurant("Asiática")}}
          >
            Asiática
          </Text>
          <Text 
           onClick={()=>{props.filtroRestaurant("Árabe")}}
          >
            Árabe
          </Text>
          <Text 
          onClick={()=>{props.filtroRestaurant("Italiana")}}
          >
            Italiana
          </Text>
          <Text 
           onClick={()=>{props.filtroRestaurant("Sorvetes")}}
          >
            Sorvetes
          </Text>
          <Text 
           onClick={()=>{props.filtroRestaurant("Carnes")}}
          >
            Carnes
          </Text>
          <Text 
          onClick={()=>{props.filtroRestaurant("Baiana")}}
          >
            Baiana
          </Text>
          <Text 
          onClick={()=>{props.filtroRestaurant("Petiscos")}}
          >
            Petiscos
          </Text>
          <Text 
          onClick={()=>{props.filtroRestaurant("Mexicana")}}
          >
            Mexicana
          </Text>
          </Container>  
    )
}

export default SliderComponent;