import React, {useEffect} from "react";
import Logobranca from '../../assets/Logobranca.png'
import {Tela} from'./styles'

const LoadingLogo = (props) => {

    useEffect(() => {
        setTimeout(() => { 
          props.setLoading(false);
        }, 1500);
      }, []);
      
    return (
        <Tela>
            <img src={Logobranca}/>
        </Tela>
    )
}

export default LoadingLogo;