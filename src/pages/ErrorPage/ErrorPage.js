import React from "react";
import Typography from '@material-ui/core/Typography'
import ImgError from '../../assets/erro.png.jpg'
import {ErrorImage,ErrorPageConteiner,SignUpButton} from './styled'
import Link from '@material-ui/core/Link'
import {goToHomePage} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'



const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <ErrorPageConteiner>

            <ErrorImage src={ImgError}/>

            <Typography color={"primaryColor"} variant ={'h4'} align ={'center'}>Erro 404-Página não encontrada</Typography>

      <SignUpButton>
                 Pagina Inicial -
              <Link href="#" 
                 color="inherit" 
                 underline="always"
                 onClick ={()=>goToHomePage(navigate)}>
                 Clique aqui.
              </Link>
      </SignUpButton>

            
        </ErrorPageConteiner>
    )
}

export default ErrorPage;