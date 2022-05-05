import { TextField, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { HeaderSearch, InputsContainer, ScreenContainer } from "./styled";

const SearchPage = () => {
    return (
        <div>
            <HeaderSearch>
                <ArrowBackIos />
                <Typography style={{fontWeight:"bold", marginRight:"30px"}}>Buscar</Typography>
                <div>     </div>
            </HeaderSearch>

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