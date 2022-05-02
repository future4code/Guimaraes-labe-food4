import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea} from '@material-ui/core';
import {Flex, Flex2} from "./styled";
import { useNavigate } from "react-router-dom";
import {goToRestaurantPage} from "../../routes/coordinator";

const CardRestaurant = (props) => {
  const navigate = useNavigate()

  return (
    <div style={{marginBottom: "16px"}}>
    <Card sx={{ maxWidth: 328 }} onClick={() => goToRestaurantPage(navigate)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          
          image="https://www.qgjeitinhocaseiro.com/wp-content/uploads/2019/11/BLOG-21-11.png"
          alt="imagem-restaurante"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="primary">
            Vinil Butatã
          </Typography>
          <Flex>
          {props.categoria&&<Typography variant="body2" color="text.secondary">
              {props.categoria}
            </Typography>}
          <Flex2>
          <Typography variant="body2" color="text.secondary">
              50-60 min
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
            Frete R$6,00
            </Typography>
          </Flex2>
          {props.endereco&&<Typography variant="body2" color="text.secondary">
              {props.endereco}
            </Typography>}
            </Flex>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default CardRestaurant