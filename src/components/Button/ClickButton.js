import React from "react";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


const ClickButtonn = styled(Button)({
   
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: 23,
    padding: '6px 12px',
    lineHeight: 2.0,
  });
  

const ClickButton = () => {
    return (
        <ClickButtonn variant="contained" color="primary"
        fullWidth> Criar</ClickButtonn>
    )
}

export default ClickButton;