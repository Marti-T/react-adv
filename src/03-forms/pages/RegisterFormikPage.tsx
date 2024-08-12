import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

  
  return (
    <div>
      <h1>Register Formik Page</h1>
        
      <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => { 
                    console.log( values )
                }}
                validationSchema={ 
                    Yup.object({
                        name: Yup.string()
                                        .min(2, 'Debe de tener al menos 2 caracteres')
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        email: Yup.string()
                                        .email('Email no tiene un formato no válido')
                                        .required('Requerido'),
                        password1: Yup.string()
                                        .min(6, 'Mínimo 6 letras')
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                        .required('Requerido'),
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form>

                            <MyTextInput 
                                label="Name" 
                                name="name" 
                                placeholder="Martí"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email" 
                                placeholder="marti@google.com"
                                type="email"
                            />

                            <MyTextInput 
                                label="Password" 
                                name="password1" 
                                type="password"
                                placeholder='******'
                            />

                            <MyTextInput 
                                label="Password" 
                                name="password2" 
                                type="password"
                                placeholder='******'
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset</button>

                        </Form>
                    )
                }

            </Formik>
    </div>
  )
}
