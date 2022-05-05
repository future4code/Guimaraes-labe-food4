import React from "react";
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { InputsContainer } from "./styled";

const AdressForm = () => {

    const [form, onChange] = useForm({street:"", number:"", district:"", city:"", state:"", complement:""})

    const onSubmitForm = () => {

    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>

            <Typography variant="h6" style={{textAlign:"center", fontWeight:"bold"}}>Meu Endereço</Typography>

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

                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                    fullWidth
                    style={{fontWeight:"bold"}}
                >
                Salvar
                </Button>
            </div>
    </form>
    )
}

export default AdressForm;