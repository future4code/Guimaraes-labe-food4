import React from "react";
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { InputsContainer, Text } from "./styled";
import { styled } from '@material-ui/core/styles'
import { addAdress } from "../../services/user"


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

    const [form, onChange,clear] = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})

    const onSubmitForm = (e) => {
        e.preventDefault()
        addAdress(form)
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
                        type={"text"}
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
                        type={"text"}
                        required
                        autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        label={"Bairro"}
                        onChange={onChange}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"text"}
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
                        type={"text"}
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
                        type={"text"}
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
                        type={"text"}
                        autoFocus
                        fullWidth
                    />

                </InputsContainer>
                <ClickButtonn 
                type={"submit"}
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