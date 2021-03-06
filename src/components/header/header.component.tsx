import React from 'react';
//@ts-ignore
import {Link} from 'react-router-dom';
//@ts-ignore
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

interface HeaderProps{
  hidden: boolean
  currentUser: any
}
const Header = (props: HeaderProps) => {
  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        props.currentUser?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/login'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      props.hidden?
      null
      :
      <CartDropDown/>
    }
  </div>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);