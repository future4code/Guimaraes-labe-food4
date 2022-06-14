import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import {useNavigate} from "react-router-dom"
import {goBack} from '../../routes/coordinator'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Titulo} from './styled'

const BootstrapButton = styled(AppBar)({
    display: 'flex',
    boxShadow: 'none',
    textTransform: 'none',
    flexDirection: 'row',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    border: 'none',
    borderBottom:'1px solid #E5E5EA'
  });
  


const Header = (props) => {

    const navigate = useNavigate()

    return (
        <BootstrapButton position="static">
       
            <Button onClick={() => goBack(navigate)} style={{float: "start"}}color="inherit">
            <ArrowBackIosIcon/></Button>
          
            <Titulo>{props.title}</Titulo>
         
          
                      
        </BootstrapButton>

      
    )
}
export default Header;