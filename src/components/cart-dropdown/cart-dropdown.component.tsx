import React from 'react';
//@ts-ignore
import {connect} from 'react-redux'
//@ts-ignore
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import { IItem } from '../../api/interface';
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss'
import { toogleCartHidden } from '../../redux/cart/cart.actions';

interface CartDropDownProps {
  cartItems: IItem[]
  toogleCartHidden: () => {type: string}
  dispatch: any
  history: any
  match: any
}
const CartDropDown = (props: CartDropDownProps) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        props.cartItems.length
        ? props.cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton type='button' value='Go To Checkout'
      onClick={()=> {
        props.dispatch(toogleCartHidden());
        props.history.push('/checkout')
      }}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
// const mapDispatchToProps = (dispatch: any) => ({
//   toogleCartHidden: dispatch(toogleCartHidden())
// })
export default withRouter(connect(mapStateToProps)(CartDropDown));