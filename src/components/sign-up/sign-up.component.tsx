import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

export default function Signup(){
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if(password !== confirmPassword){
      alert("Password don't match");
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName: displayName})
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='text' type='text' label='Name' value={displayName} onChange={setDisplayName}/>
        <FormInput name='email' type='email' label='Email' value={email} onChange={setEmail}/>
        <FormInput name='password' type='password' label='Password' value={password} onChange={setPassword}/>
        <FormInput name='comfirm password' type='password' label='Confirm Password' value={confirmPassword} onChange={setConfirmPassword}/>
        <div className='buttons'>
          <CustomButton value='Sign Up' type='submit'/>
        </div>
      </form>
    </div>
  )
}