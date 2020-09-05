import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AuthenticatePage from './pages/authenticate/authenticate.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollectionsAsList } from './redux/shop/shop.selector'

function App(props) {
  useEffect(()=>{
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // once off code to load data to Firebase
      // addCollectionAndDocuments('collections', 
      //   props.collectionsArray.map(({title, items})=>({title:title, items:items})))
      props.setCurrentUser(userAuth)
    })
    return () => unsubscribeFromAuth()
  },[])
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/checkout' component={CheckoutPage}/>
        <Route exact path='/login' 
          render={()=>
            props.currentUser?
            <Redirect to='/'/>
            :
            <AuthenticatePage/>
          }/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsAsList
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
