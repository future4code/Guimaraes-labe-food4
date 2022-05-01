import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import {useNavigate} from "react-router-dom"
import {goBack} from '../../routes/coordinator'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const BootstrapButton = styled(AppBar)({
    display: 'flex',
    boxShadow: 'none',
    textTransform: 'none',
    flexDirection: 'row',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
  });



const Header = () => {

    const navigate = useNavigate()

    return (
        <BootstrapButton position="static">
       
            <Button onClick={() => goBack(navigate)} style={{float: "start"}}color="inherit">
            <ArrowBackIosIcon/></Button>
          
                      
        </BootstrapButton>

      
    )
}
export default Header;