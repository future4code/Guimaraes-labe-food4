import React from "react";
import logo from "../../assets/logoescuro.png"
import SignUpForm from "./SignUpForm";
import { LogoImage, ScreenContainer } from "./styled";

const SignUpPage = () => {
    
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage