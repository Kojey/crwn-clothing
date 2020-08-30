import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component' 
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  return(
    <div className='sign-in'>
      <h2>I alreay have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' label='Email' value={email} onChange={setEmail}/>
        <FormInput name='password' type='password' label='Password' value={password} onChange={setPassword}/>
        <CustomButton value='Sign In' type='submit'/>
      </form>
    </div>
  );
}