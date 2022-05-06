
import styled from 'styled-components';
import { Box } from "@material-ui/core";

export const ContainerTela=styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div.endereco{
        width:100% ;
        padding-left:52px ;
    }


`

export const Font =styled.div`
font-family: 'Roboto', sans-serif;
`
export const BoxEndereco=styled.div`
    padding:16px ;
    background-color:#eeeeee ;
    margin-bottom:16px ;
    
`
export const Flex = styled.div`
display: flex;
justify-content: space-between;

`;

export const ModalCustom=styled(Box)`
 display:flex ;
 justify-content:space-evenly ;
 align-items: center;
 p{
     color:black;
     font-weight:bolder ;
 }
 
`


