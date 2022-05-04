import React from "react"
import Button from '@material-ui/core/Button'
import { Container, LogoImage,  SignUpButton } from './styled'
import './login.css'
import logo from '../../assets/logo-future-eats-invert.png'
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom'
import {goToSignUpPage} from "../../routes/coordinator"




const LoginPage = () => {

  const navigate = useNavigate()


  return (

    <Container class='Login'>


      <LogoImage src={logo} alt='Logo_FutureEats_invert' />



      <span class='Text Text-Style'>
        Entrar
      </span>

      <LoginForm />

      <SignUpButton>

        <Button
          onClick ={()=>goToSignUpPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
        >

          Cadastre-se
        </Button>

      </SignUpButton>


    </Container>

  )
}




export default LoginPage;