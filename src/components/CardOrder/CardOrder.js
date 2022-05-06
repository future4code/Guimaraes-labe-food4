import  React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Typography from '@material-ui/core/Typography';


const CardOrder = () => {
   
  return (
    <div style={{marginBottom: "16px"}}>
    <Card >

      <CardHeader
        avatar={
            <CardMedia
            component="img"
            height="80"
            image="https://www.qgjeitinhocaseiro.com/wp-content/uploads/2019/11/BLOG-21-11.png"
            alt="imagem-produto"
          />
        }
        action={
          <IconButton aria-label="settings">
            <DeleteForeverOutlinedIcon/>
          </IconButton>
        }
        title={
            <Typography gutterBottom variant="p" component="div" color="primary">
            Bullguer
            </Typography>
        }
        subheader={
        <Typography variant="body2" color="text.secondary">
        Pão de queijo, carne, picles e molho
        <br ></br>
        <b>R$ 23,00</b>
        <br></br>
        Quantidade: 2
        </Typography>
          }
        
      />
    </Card> 
    </div>
    );
}

export default CardOrder