import Container from "@material-ui/core/Container";
import React, { useContext } from "react";
import Typography from '@material-ui/core/Typography';
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header'
import { BoxEndereco, Font, ContainerTela, Flex, ModalCustom} from "./styled";
import CardOrder from '../../components/CardOrder/CardOrder'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup  from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Modal } from "@material-ui/core";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#e86e5a',
    boxShadow: 24,
    p: 4,
    color:"white",
  };

const ClickButtonn = styled(Button)({
   
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 2.0,
    marginBottom:'50px',
  });
const OrderPage = (props) => {
    useProtectedPage()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const {cart,setCart}=useContext(GlobalStateContext)
  
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
            <ContainerTela>
            <Header title="Carrinho"/>
      
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalCustom  sx={style}>
        <AccessTimeIcon  fontSize="large"/>
          <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Pedido em andamento
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p> Bullguer Vila Madalena</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>SUBTOTAL R$67,00</h3>
          </Typography>
          </div>
        </ModalCustom>
      </Modal>

            <BoxEndereco className="endereco">
                <Typography gutterBottom variant="p" component="div" color="text.primary">
                <strong>Endereço de entrega</strong>
               
                </Typography>
                <Typography gutterBottom variant="p" component="div" color="text.primary">
                Rua Alessandra Viera
               
                </Typography>
            </BoxEndereco>
            </ContainerTela>
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

        fullWidth onClick={handleOpen}

        ><b>Confirmar </b></ClickButtonn>
        </div>

        
            </Container>
            <Footer/>
        </ContainerTela>
        </Font>
        
    )
}

export default OrderPage;