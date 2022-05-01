import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { styled } from '@material-ui/core/styles';


const BootstrapButton = styled(AppBar)({
    display: 'flex',
    textTransform: 'none',
    flexDirection: 'row',
    fontSize: 16,
    padding: '16px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: 420,
    margin:0,
  });




const HeaderHome = () => {


    return (
        <BootstrapButton position="absolute">
          Rappi4        
        </BootstrapButton>

      
    )
}
export default HeaderHome;