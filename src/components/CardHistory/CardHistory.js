import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea} from '@material-ui/core';


const CardHistory = () => {
  return (
      <div style={{marginBottom: "16px"}}>
    <Card sx={{ maxWidth: 200 }} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="primary">
            Bullguer Vila Madalena
          </Typography>
          <Typography  color="text.primary">
             23 outubro 2019
            </Typography>
            <Typography  color="inherit" >
            <b>SUBTOTAL R$67,00 </b>
            </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default CardHistory