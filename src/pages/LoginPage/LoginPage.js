import React, {useState} from "react"
import Link from '@material-ui/core/Link';
import { Tela, LogoImage,  SignUpButton } from './styled'
import Container from '@material-ui/core/Container'
import './login.css'
import logo2x from '../../assets/logo2x.png'
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom'
import {goToSignUpPage} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import LoadingLogo from "../../components/LoadingLogo/LoadingLogo"



const LoginPage = () => {
 
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  return (

    <>
      {loading? (
        <LoadingLogo setLoading={setLoading}/>
      ):(
        <Container>
          <Tela>
      <LogoImage src={logo2x} alt='Logo' />



      <span className='Text Text-Style'>
        Entrar
      </span>

      <LoginForm />

      <SignUpButton>
          Não possui cadastro? 
          <Link href="#" 
          color="inherit" 
          underline="always"
          onClick ={()=>goToSignUpPage(navigate)}>
           Clique aqui.
          </Link>
      </SignUpButton>
      </Tela>
      </Container>
)}
    
</>
  )
}




export default LoginPage;