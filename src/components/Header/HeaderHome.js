import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { styled } from '@material-ui/core/styles';


const BootstrapButton = styled(AppBar)({
  display: 'flex',
  boxShadow: 'none',
  textTransform: 'none',
  justifyContent: 'center',
  flexDirection: 'row',
  fontSize: 16,
  padding: '6px 12px',
  lineHeight: 1.5,
  backgroundColor: '#ffffff',
  borderBottom:'1px solid #E5E5EA'
  });




const HeaderHome = () => {


    return (
        <BootstrapButton position="absolute">
          Rappi4        
        </BootstrapButton>

      
    )
}
export default HeaderHome;