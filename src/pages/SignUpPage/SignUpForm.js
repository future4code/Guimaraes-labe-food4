import React from "react";
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { goToSignUpAddress } from "../../routes/coordinator";

const SignUpForm = () => {

    const navigate = useNavigate()

    const [form, onChange] = useForm({name:'', email:'', cpf:'', password:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form)
        goToSignUpAddress(navigate)
        console.log(form)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                
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
                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        type={'password'}
                        fullWidth
                        required
                        margin={'normal'}
                        inputProps={{pattern: "[A-Za-z0-9]{6,}$" }}
                    />
                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Confirme a sua senha'}
                        variant={'outlined'}
                        type={'password'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>

                <Button
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
                fontWeight={'bold'}
                >
                Criar
                </Button>

            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm;