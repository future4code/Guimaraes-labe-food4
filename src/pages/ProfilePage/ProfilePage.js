import { Typography } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import React from "react";
import Footer from "../../components/Footer/Footer";
import CardHistory from '../../components/CardHistory/CardHistory'
import { useNavigate } from 'react-router-dom'
import { BoxProfile, BoxAddress,CardContainer, HeaderProfile, ScreenContainer, BoxHistory } from "./styled";
import {goToEditProfilePage, goToEditAddressPage} from "../../routes/coordinator"
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {
     useProtectedPage()
 const navigate = useNavigate()

    return (

        <div>
            <HeaderProfile>
                <Typography>Meu Perfil</Typography>
            </HeaderProfile>

            <ScreenContainer>
                
                <BoxProfile>
                    <div>
                        <Typography>Nome Completo</Typography>
                        <Typography>email@email.com</Typography>
                        <Typography>123.456.789-10</Typography>
                    </div>
                    <a href="#"  onClick ={()=>goToEditProfilePage(navigate)}> <EditOutlined /></a>

                </BoxProfile>

                <BoxAddress>
                    <div>
                        <Typography>Endereço Cadastrado</Typography>
                        <Typography>Rua São João, 179 - centro - Sao Paulo, SP</Typography>
                    </div>   
                    <a href="#"  onClick ={()=>goToEditAddressPage(navigate)}> <EditOutlined /></a>
                   
                    
                </BoxAddress>

                <BoxHistory>
                    <Typography><b>Histórico de Pedidos</b></Typography>
                </BoxHistory>
                <CardContainer>
                    <CardHistory/>
                    </CardContainer>
                    <Footer/>
            </ScreenContainer>
          
        </div>
        
    )
}

export default ProfilePage;