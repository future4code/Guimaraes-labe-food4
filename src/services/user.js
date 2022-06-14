import axios from "axios"
import {BASE_URL} from "../constants/url"
export const signUp = (body) => {
    console.log(body)
    axios.post (`https://us-central1-missao-newton.cloudfunctions.net/rappi4B/signup`, body)
    .then ((res) => {
        localStorage.setItem('token', res.data.token)
        console.log(res.data.user)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
export const login=(body,navigate ,clear,setIsLoading,isLoading)=>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`,body).then((response)=>{
        localStorage.setItem('token', response.data.token)
        clear()
        navigate("/")
    }).catch((error)=>{
        setIsLoading(false)
        alert(error.response.data.message)
    })
    
  }
  export const addAdress=()=>{
      let body ={
        "street": "R. Afonso Braz",
        "number": "177",
        "neighbourhood": "Vila N. Conceição",
        "city": "São Paulo",
        "state": "SP",
        "complement": "71"
    }
      const token=localStorage.getItem("token")
      console.log(body)
      axios.put(`${BASE_URL}/address`,{
          Headers:{
              auth:token
          }
      },body).then((response)=>{
        console.log(response.data)
      }).catch((error)=>{
          console.log(error.response)
      })
   
  }