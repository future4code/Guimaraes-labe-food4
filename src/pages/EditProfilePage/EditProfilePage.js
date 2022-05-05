import { TextField, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import useForm from "../../hooks/useForm";
import React from "react";
import { InputsContainer, ScreenContainer, HeaderEditProfile } from "./styled";

const EditProfilePage = () => {

    const [form, onChange] = useForm({name:'', email:'', cpf:''})

    const onSubmitForm = () => {

    }

    return (
        <form onSubmit={onSubmitForm}>

        <div>
            <HeaderEditProfile>
                <ArrowBackIos />
                <Typography style={{fontWeight:"bold", marginRight:"30px"}}>Editar</Typography>
                <div>     </div>
            </HeaderEditProfile>

            <ScreenContainer>
            
                <InputsContainer>
                    <TextField
                        value={form.name}
                        name={'name'}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}
                        inputProps={{pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}}
                    />
                    <TextField
                        value={form.cpf}
                        name={'cpf'}
                        onChange={onChange}
                        label={'CPF'}
                        variant={'outlined'}
                        fullWidth
                        required
                        margin={'normal'}
                        inputProps={{pattern:"[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"}}
                    />
                
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        type={'submit'}
                        fullWidth
                        style={{margin:"15px"}}
                    >
                    Salvar
                    </Button>

                </InputsContainer>

                
            </ScreenContainer>

        </div>

       
    </form>
    )
}

export default EditProfilePage;