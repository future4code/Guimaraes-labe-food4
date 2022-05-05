import Container from "@material-ui/core/Container";
import React from "react";
import Typography from '@material-ui/core/Typography';
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header'
import { BoxEndereco, Font, ContainerTela, Flex } from "./styled";
import CardOrder from '../../components/CardOrder/CardOrder'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup  from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import AccessTimeIcon from '@material-ui/icons/AccessTime';



const ClickButtonn = styled(Button)({
   
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 2.0,
    marginBottom:'50px',
  });
const OrderPage = (props) => {
    const navigate = useNavigate()
    //Collapse
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
    setChecked((prev) => !prev);
    };
    const handleClick=(e)=>{
        
        goToHomePage(navigate)
        handleChange();
        //handleSubmit(e);
    }
    return (
        <Font>
       
            <Header title="Car"/>
            
            <BoxEndereco>
                <Typography gutterBottom variant="p" component="div" color="text.primary">
                <strong>Endereço de entrega</strong>
               
                </Typography>
                <Typography gutterBottom variant="p" component="div" color="text.primary">
                Rua Alessandra Viera
               
                </Typography>
            </BoxEndereco>
            <ContainerTela>
             <Container>
                 <div style={{marginBottom:"16px" }}>
                 <Typography gutterBottom variant="p" component="div" color="primary">
                 Bullguer Vila Madalena
               
                </Typography>
                <Typography gutterBottom variant="p" component="div" color="text.secondary">
                R. Fradique Coutinho, 1136 - Vila Madalena
               
                </Typography>
                <Typography gutterBottom variant="p" component="div" color="text.secondary">
                30 - 45 min
               
                </Typography>
                 </div>
                 <CardOrder />
                 <CardOrder />
                 
                    
                    <Typography gutterBottom variant="p" component="div" color="text.primary" style={{textAlign:"right",marginBottom:"16px",marginTop:"16px"}}>

                        <strong>Frete R$6,00</strong>
               
                    </Typography>
                  
                 <Flex>
                    <Typography  gutterBottom variant="h6" component="div" color="text.primary">
                    <strong>SUBTOTAL</strong>
                     
               
                    </Typography>
                    <Typography gutterBottom        variant="h6" component="div" color="primary">
                        <strong> R$67,00</strong>
               
                    </Typography>
                 </Flex>
                 <p style={{borderBottom:"1px solid black",paddingBottom:"10px",fontWeight:"bolder"}}>Forma de pagamento</p>
                 <FormControl>
                  
                 <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
         
        
                 >
                 <FormControlLabel value="Dinheiro" control={<Radio color="black"/>} label="Dinheiro" />
                <FormControlLabel value="Cartão de crédito" control={<Radio color="black"/>} label="Cartão de crédito" />
                </RadioGroup>
               </FormControl>
               <div style={{margin: "16px auto"}}>
        <ClickButtonn variant="contained" color="primary"
        fullWidth onClick={handleClick}
        ><b>Confirmar </b></ClickButtonn>
        </div>

        <Box
        sx={{
          '& > :not(style)': {
            width: 400,
            bottom: 0,
          },
        }} bgcolor="primary.main"
        >
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
            </Container>
            <Footer/>
        </ContainerTela>
        </Font>
        
    )
}

export default OrderPage;