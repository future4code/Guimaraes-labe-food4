import { TextField, Typography } from "@material-ui/core";
import React from "react";
import {  InputsContainer, ScreenContainer } from "./styled";
import Header from '../../components/Header/Header'
import useProtectedPage from "../../hooks/useProtectedPage";

const SearchPage = () => {
    useProtectedPage()
    return (
        <div>
       
       <Header title="Buscar"/>
            <ScreenContainer>      
                <InputsContainer>
                    <TextField 
                        placeholder="Buscar por nome do restaurante"
                        name={''}
                        label={''}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                </InputsContainer>              
            </ScreenContainer>
        </div>
        
    )
}

export default SearchPage;