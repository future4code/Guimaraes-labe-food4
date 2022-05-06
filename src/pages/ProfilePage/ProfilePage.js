import { Typography } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import React from "react";
import Footer from "../../components/Footer/Footer";
import CardHistory from '../../components/CardHistory/CardHistory'
import { BoxProfile, BoxAddress,CardContainer, HeaderProfile, ScreenContainer, BoxHistory } from "./styled";

const ProfilePage = () => {
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
                    <EditOutlined />

                </BoxProfile>

                <BoxAddress>
                    <div>
                        <Typography>Endereço Cadastrado</Typography>
                        <Typography>Rua São João, 179 - centro - Sao Paulo, SP</Typography>
                    </div>   
                    <EditOutlined />
                    
                </BoxAddress>

                <BoxHistory>
                    <Typography><b>Histórico de Pedidos</b></Typography>
                </BoxHistory>
                <CardContainer>
                    <CardHistory/>
                    </CardContainer>
            </ScreenContainer>
            <Footer/>
        </div>
        
    )
}

export default ProfilePage;