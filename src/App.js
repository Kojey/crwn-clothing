import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authenticate from './pages/authenticate/authenticate.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(()=>{
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        } else{
          setCurrentUser(userAuth)
        }
      })
    return () => unsubscribeFromAuth()
  },[])
  
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
