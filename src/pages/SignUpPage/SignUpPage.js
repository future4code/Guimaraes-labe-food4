import React from "react";
import logo from "../../assets/logoescuro.png"
import SignUpForm from "./SignUpForm";
import { LogoImage, ScreenContainer, Text } from "./styled";
import Header from "../../components/Header/Header";

const SignUpPage = () => {
    
  return (
    <>
    <Header/>
    <ScreenContainer>
      <LogoImage src={logo} />
      <Text>
    Cadastrar
      </Text>
      <SignUpForm />
    </ScreenContainer>
    </>
  )
}

export default SignUpPage