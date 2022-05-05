import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import {useNavigate} from "react-router-dom"
import {goBack} from '../../routes/coordinator'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styledComponents from 'styled-components';

const BootstrapButton = styled(AppBar)({
    display: 'flex',
    boxShadow: 'none',
    textTransform: 'none',
    flexDirection: 'row',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderBottom:'1px solid #E5E5EA'
  });
const Titulo=styledComponents.span`
    position:absolute;
    text-align:center;
    width:335px;
    font-size:16px;
    margin-top:;
    line-Height: 35px;
    border:1px solid red;
  
  
    z-index:1;
   
    
    
`


const Header = (props) => {

    const navigate = useNavigate()

    return (
        <BootstrapButton position="static">
       
            <Button onClick={() => goBack(navigate)} style={{float: "start"}}color="inherit">
            <ArrowBackIosIcon/></Button><Titulo>{props.title}</Titulo>
          
                      
        </BootstrapButton>

      
    )
}
export default Header;