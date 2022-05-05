import  React from 'react';

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import { useNavigate } from "react-router-dom";
import {goToOrderPage} from "../../routes/coordinator";
import { CardImg, CardProd, ProductValue } from './styled';


const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:'5%',
    boxShadow: 50,
    pt: 2,
    px: 4,
    pb: 3,
  };


  

const CardProduct = () => {

  //Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    //Collapse
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
    setChecked((prev) => !prev);
    };

  //botão submit

    const handleClick=(e)=>{
      handleClose();
      handleChange();
      //handleSubmit(e);
  }

  const navigate = useNavigate()

  return (
    <div style={{marginBottom: "16px"}}> 
     
   
    <CardProd >

      <CardHeader
        avatar={
            <CardImg>
              <CardMedia
            component="img"
            height="112.6"
            image="https://www.qgjeitinhocaseiro.com/wp-content/uploads/2019/11/BLOG-21-11.png"
            alt="imagem-produto"
          />
           </CardImg>
        }
        action={
          <IconButton aria-label="settings">
            <Button onClick={handleOpen}><AddCircleOutlineOutlinedIcon/></Button>
            <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            >
            <Box sx={{ ...style, width: 300 }}>
            <Button position="right"onClick={handleClose}><CloseIcon/></Button>
            <br></br><br></br>
            <Typography variant="body2" 
            id="child-modal-description" color="text.secondary">
            Selecione a quantidade desejada
            </Typography>
            <br></br><br></br>
    
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   // value={age}
    label="0"
    //onChange={handleChange}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={7}>7</MenuItem>
    <MenuItem value={8}>8</MenuItem>
    <MenuItem value={9}>9</MenuItem>
    <MenuItem value={10}>10</MenuItem>
  </Select>
  <br></br><br></br>
          <Button color="primary" onClick={handleClick}>
            Adicionar ao Carrinho
            </Button>
        </Box>
         </Modal>
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
        <br></br>
        <ProductValue>
          <ProductValue>
            R$ 23,00

          </ProductValue>
        </ProductValue>
        </Typography>
          }
        
      />
      
    </CardProd> 
   

    <Box
        sx={{
          '& > :not(style)': {
            width: 400,
            bottom: 0,
          },
        }} bgcolor="primary.main"
        onClick={() => goToOrderPage(navigate)}>
<Collapse in={checked}>
  
<div style={{display: "flex", justifyContent: 'flex-start'}}>
<div style={{marginLeft: "36px", paddingBottom:"20px", paddingTop:"20px"}}>
 <AccessTimeIcon color="secondary" fontSize="large"/>
</div>
<div style={{marginLeft: "36px", paddingBottom:"20px",  paddingTop:"20px"}}>
<Typography variant="body1" 
id="child-modal-description" color="secondary">
Pedido em Andamento
</Typography>
<Typography variant="body2" 
id="child-modal-description" color="text.primary">
<b>Bullguer Vila Mariana</b>
</Typography>
<Typography variant="body2" color="text.primary" >
<b>SUBTOTAL R$67,00</b>
  </Typography>
  </div>
  </div>

          </Collapse>
      </Box>
  
     
    </div>
    );
}

export default CardProduct;