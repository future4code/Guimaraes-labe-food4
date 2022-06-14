import * as React from 'react';
import {FooterStyle} from  "./styled";
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import {goToProfilePage } from "../../routes/coordinator";
import {goToOrderPage} from "../../routes/coordinator";
import {goToHomePage} from "../../routes/coordinator";


function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  return (
  
      <FooterStyle>
    <Box sx={{ width: 420 }} >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >


        <BottomNavigationAction 
        onClick={() => goToHomePage(navigate)}
         icon={<HomeOutlinedIcon />} />

        <BottomNavigationAction 
        onClick={() => goToOrderPage(navigate)}
         icon={<ShoppingCartOutlinedIcon />} />

        <BottomNavigationAction 
        onClick={() => goToProfilePage (navigate)}
         icon={<PersonOutlineOutlinedIcon />} />
      </BottomNavigation>
    </Box>
    </FooterStyle>
  
  );
}

export default Footer;