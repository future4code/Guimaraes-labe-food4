import React from "react";
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { InputsContainer, Text } from "./styled";
import { styled } from '@material-ui/core/styles'



const ClickButtonn = styled(Button)({
   
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 2.0,
    marginTop:'20px',
    marginBottom:'20px'
  });

const AdressForm = () => {

    const [form, onChange] = useForm({street:"", number:"", district:"", city:"", state:"", complement:""})

    const onSubmitForm = () => {

    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>
          
            <Text>Meu endereço</Text>

                <InputsContainer>
                    <TextField 
                        name={"street"}
                        value={form.street}
                        label={"Rua"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"street"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"number"}
                        value={form.number}
                        label={"Número"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"number"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"district"}
                        value={form.district}
                        label={"Bairro"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"district"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"city"}
                        value={form.city}
                        label={"Cidade"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"city"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"state"}
                        value={form.state}
                        label={"Estado"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"state"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"complement"}
                        value={form.complement}
                        label={"Complemento"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"complement"}
                        autoFocus
                        fullWidth
                    />

                </InputsContainer>
                <ClickButtonn 
                variant="contained" 
                color="primary"
                fullWidth
                > <b>Salvar</b>
                </ClickButtonn>
            </div>
    </form>
    )
}

export default AdressForm;