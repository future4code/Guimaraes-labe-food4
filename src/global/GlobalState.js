import axios from "axios";
import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from '../constants/url'

const GlobalState = (props) => {
  const [cart,setCart]=useState([])
  
    return (
        <GlobalStateContext.Provider value={{cart,setCart}}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;