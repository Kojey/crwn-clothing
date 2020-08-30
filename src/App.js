import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authenticate from './pages/authenticate/authenticate.component';
import {auth} from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(()=>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(setCurrentUser)
    console.log(currentUser)
    return () => unsubscribeFromAuth()
  }, [currentUser])
  
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/login' component={Authenticate}/>
      </Switch>
    </div>
  );
}

export default App;
