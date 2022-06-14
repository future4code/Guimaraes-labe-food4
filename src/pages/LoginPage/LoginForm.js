import React, { useState } from "react"
import TextField from '@material-ui/core/TextField'
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button'
import { InputsContainer} from './styled'
import './login.css'
import { styled } from '@material-ui/core/styles'



import { useNavigate } from "react-router-dom"
import { login } from "../../services/user"
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





const LoginForm = () => {
  const navigate=useNavigate()
  const [form , onChange, clear] =useForm({email:"", password:""})
  const [isLoading,setIsLoading]=useState(false)
  
    const onSubmitForm =(event) =>{
    
        event.preventDefault()
        login(form,navigate,clear,setIsLoading)
        setIsLoading(!isLoading)
    }
    

  return(

   

        <InputsContainer>

        <form onSubmit={onSubmitForm}>

        <TextField
                  name ={"email"}
                  value ={form.email}
                  onChange ={onChange}
                  label ={"E-mail"}
                  variant ={"outlined"}
                  fullWidth
                  margin = {"normal"}
                  required
                  type ={"email"}
            
            
            />
            <TextField
                  name ={"password"}
                  value ={form.password}
                  onChange ={onChange}
                  label ={"Senha"}
                  variant ={"outlined"}
                  fullWidth
                  margin = {"normal"}
                  required
                  type ={"password"}
            
            
            />

          <ClickButtonn 
          type={"submit"}
          variant="contained" 
          color="primary"
          fullWidth
          > {isLoading?<CircularProgress color="secondary" size={24}/>:<b>Entrar</b>}
          </ClickButtonn>

          </form>

         </InputsContainer>
  

  )
}
  

export default LoginForm;