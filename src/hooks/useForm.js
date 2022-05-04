import {useState} from 'react'

const useForm =(initialstate)=>{

    const [form, setForm]= useState(initialstate)

    const handleInputChange =(event)=> {
        const {value , name} = event.target
        setForm ({...form, [name]:value})
    }

    const clear =() => {
        setForm(initialstate)
    }

    return [form , handleInputChange, clear]
}

export default useForm