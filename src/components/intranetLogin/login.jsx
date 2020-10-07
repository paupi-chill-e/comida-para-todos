import React, { Fragment, useState } from 'react';
import { firebase } from '../../firebase'

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submit = async (e) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='authPageBackground'>
      <div className='authPageContent'>
        <div className='logoContainer'>
          <img src={bqtrans} className="imgLogoAuth" alt="logo" />
        </div>
        <div className='authContainer'>
          <form className='formCont'  >
            <label htmlFor='email'
            >
              Ingresar email: </label>
            <input type='email'
              placeholder='Correo Electrónico'
              autoComplete='username'
              className='inputAuth'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Ingresar contraseña: </label>
            <input type='password'
              placeholder='Contraseña'
              autoComplete='current-password'
              className='inputAuth'
              onChange={(e) => setPassword(e.target.value)} />
            <button
              className='btnAuthPage' onClick={eventClick}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );


   }
  export default Login;