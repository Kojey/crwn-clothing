import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component' 
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className='sign-in'>
      <h2>I alreay have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' label='Email' value={email} onChange={setEmail}/>
        <FormInput name='password' type='password' label='Password' value={password} onChange={setPassword}/>
        <div className='buttons'>
          <CustomButton value='Sign In' type='submit'/>
          <CustomButton value='Sign In With Google' isGoogleSignIn onClick={signInWithGoogle}/>
        </div>
      </form>
    </div>
  );
}