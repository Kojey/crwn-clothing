import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Authenticate from './pages/authenticate/authenticate.component'

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/login' component={Authenticate}/>
      </Switch>
    </div>
  );
}

export default App;
