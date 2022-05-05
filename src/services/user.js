import axios from "axios"

export const signUp = (body) => {
    axios.post (`https://us-central1-missao-newton.cloudfunctions.net/rappi4B/signup`, body)
    .then ((res) => {
        localStorage.setItem('token', res.data.token)
        console.log(res.data.user)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}