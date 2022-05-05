import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToHomePage } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token){
            goToHomePage(navigate)
        }
    },[navigate])
};

export default useUnprotectedPage
