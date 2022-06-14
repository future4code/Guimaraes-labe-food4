import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import {  goToSignUpAddress } from "../../routes/coordinator";
import { styled } from '@material-ui/core/styles'
import { CircularProgress } from "@material-ui/core"

const ClickButtonn = styled(Button)({
   
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 2.0,
    marginTop:'20px',
    marginBottom:'20px'
  });


const SignUpForm = () => {

    const navigate = useNavigate()
    const [isLoading,setIsLoading]=useState(false)
    const [form, onChange] = useForm({name:'', email:'', cpf:'', password1:'',password2:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        const dados={name:form.name, email:form.email,cpf:form.cpf,password:form.password1}
        console.log(dados)
        if(form.password1===form.password2){
        
            console.log(dados)
            signUp(dados)
            goToSignUpAddress(navigate)

        }
        else{

            alert(" senhas diferentes!")
        }
        
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
                        value={form.password1}
                        name={'password1'}
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
                        value={form.password2}
                        name={'password2'}
                        onChange={onChange}
                        label={'Confirme a sua senha'}
                        variant={'outlined'}
                        type={'password'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>

                <ClickButtonn 
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
                fontWeight={'bold'}
                >
                    {isLoading?<CircularProgress color="secondary" size={24}/>:<b>Criar</b>}
                
                </ClickButtonn >

            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm;