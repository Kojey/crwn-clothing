import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import Signup from '../../components/sign-up/sign-up.component'

import './authenticate.styles.scss'

const Authenticate = () => (
  <div className='authenticate'>
    <SignIn/>
    <Signup/>
  </div>
)

export default Authenticate;

