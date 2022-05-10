import { TextField} from "@material-ui/core";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import React from "react";
import Header from '../../components/Header/Header'
import { InputsContainer, ScreenContainer } from "./styled";

const EditAddressPage = () => {

    const [form, onChange] = useForm({name:'', email:'', cpf:''})

    const onSubmitForm = () => {

    }

    return (
        <form onSubmit={onSubmitForm}>

        <div>
            <Header title="Endereço"/>
        
            <ScreenContainer>
                <InputsContainer>

                <TextField
                        name={"street"}
                        value={form.street}
                        //onChange={handleInputOnChange}
                        label={"Rua/Av."}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"number"}
                        value={form.number}
                        //onChange={handleInputOnChange}
                        label={"Número"}
                        type={"number"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"complement"}
                        value={form.complement}
                        //onChange={handleInputOnChange}
                        label={"Apto. / Bloco"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                    />
                    <TextField
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        //onChange={handleInputOnChange}
                        label={"Bairro"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"city"}
                        value={form.city}
                        //onChange={handleInputOnChange}
                        label={"Cidade"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"state"}
                        value={form.state}
                        //onChange={handleInputOnChange}
                        label={"Estado"}
                        type={"Text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
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

export default EditAddressPage;