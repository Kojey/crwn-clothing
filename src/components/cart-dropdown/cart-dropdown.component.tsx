import React from 'react';
//@ts-ignore
import {connect} from 'react-redux'

import { IItem } from '../../api/item.interface';
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss'

interface CartDropDownProps {
  cartItems: IItem[]
}
const CartDropDown = (props: CartDropDownProps) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {props.cartItems?.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)}
    </div>
    <CustomButton type='button' value='Go To Checkout'/>
  </div>
)

const mapStateToProps = (state: any) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);