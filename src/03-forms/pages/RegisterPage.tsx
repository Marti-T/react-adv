import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {


  /* const [ registerData, setRegisterData ] = useState({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { name, email, password1, password2 } = registerData;


  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.name);
    setRegisterData( prev =>({
      ...prev,
      [event.target.name]: event.target.value
    }));
  } */

  const { 
    formData, onChange, resetForm, isValidEmail,
    name, email, password1, password2
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log( formData );
  }


  return (
    <div>
      <h1>RegisterPage</h1>
        
        <form noValidate onSubmit={ onSubmit }>
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={ name }
            onChange={ onChange }
            className={ `${ name.trim().length <= 0 && 'has-error' }` }
          />
          { name.trim().length <= 0 && <span>Ese campo es necesario</span> }

          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ onChange }
            className={ `${ !isValidEmail(email) && 'has-error' }` }
          />
          { !isValidEmail(email) && <span>El Email no es válido</span> }


          <input
            type="password"
            name="password1"
            placeholder="Password"
            value={ password1 }
            onChange={ onChange }
          />
          { password1.trim().length <= 0 && <span>Ese campo es necesario</span> }
          { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span> }

          <input
            type="password"
            name="password2"
            placeholder="Repeat Password"
            value={ password2 }
            onChange={ onChange }
          />
          { password2.trim().length <= 0 && <span>Ese campo es necesario</span> }
          { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span> }
        
          <button type="submit">Create</button>
          <button type="button" onClick={ resetForm }>Reset</button>
        
        </form>
    </div>
  )
}
