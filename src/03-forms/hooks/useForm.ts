import { ChangeEvent, useState } from "react";



export const useForm = <T>( initState: T ) => {
  

    const [ formData, setFormData ] = useState( initState );


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.name);
        setFormData( prev =>({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const resetForm = () => {
        setFormData({ ...initState });
    }


    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formData,
        /* 
            el ...formData es como si tubiera:
            name: formData.name,
            password1: formData.password1
            estamos esperciendo nuestros campos
        */
        // Properties
        formData,

        //Methods
        isValidEmail,
        onChange,
        resetForm

    }
}
