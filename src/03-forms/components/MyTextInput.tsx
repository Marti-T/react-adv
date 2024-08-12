import { ErrorMessage, useField } from 'formik';


interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; //Comodin para poner añadir propiedades adicionales
}


export const MyTextInput = ( { label, ...props }: Props) => {


    //const [ field, meta ] = useField(props);
    const [ field ] = useField(props);


    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
            <ErrorMessage name={ props.name } component="span" className="custom-error-class" />
        </>
    )
}
