import React from "react";
import AdressForm from "./AdressForm";
import { ScreenContainer } from "./styled";
import Header from '../../components/Header/Header'

const SignUpAddress = () => {
    return (
        <>
        <Header/>
        <ScreenContainer>
         <AdressForm />
        </ScreenContainer>
        </>
       
       
       
    )
}

export default SignUpAddress;