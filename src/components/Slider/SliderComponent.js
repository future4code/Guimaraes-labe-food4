import React, { useState } from 'react';

import {Text, Container} from './styles'

const SliderComponent = () => {
  
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
          //onClick={() => handleType("Hamburguer")}
          >
            Hamburguer
          </Text>
          <Text 
          //onClick={() => handleType("Asiática")}
          >
            Asiática
          </Text>
          <Text 
          //onClick={() => handleType("Árabe")}
          >
            Árabe
          </Text>
          <Text 
          //onClick={() => handleType("Italiana")}
          >
            Italiana
          </Text>
          <Text 
          //onClick={() => handleType("Sorvetes")}
          >
            Sorvetes
          </Text>
          <Text 
          //onClick={() => handleType("Carnes")}
          >
            Carnes
          </Text>
          <Text 
          //onClick={() => handleType("Baiana")}
          >
            Baiana
          </Text>
          <Text 
          //onClick={() => handleType("Petiscos")}
          >
            Petiscos
          </Text>
          <Text 
          //onClick={() => handleType("Mexicana")}
          >
            Mexicana
          </Text>
          </Container>  
    )
}

export default SliderComponent;