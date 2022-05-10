import axios from "axios";
import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from '../constants/url'

const GlobalState = (props) => {
  const [cart,setCart]=useState([])
  const [restaurants,setRestaurants]=useState([])
  const getRestaurants=()=>{
    axios.get(`${BASE_URL}/restaurants`).then((response)=>{
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)

    })
  }
    return (
        <GlobalStateContext.Provider value={{cart,setCart,restaurants,setRestaurants,getRestaurants}}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;