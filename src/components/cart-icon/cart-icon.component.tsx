import React from 'react';
//@ts-ignore
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {toogleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

interface CartIconProps {
  toogleCartHidden: any
  cartItemsCount: number
}
const CartIcon = (props: CartIconProps) => (
  <div className='cart-icon' onClick={props.toogleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{props.cartItemsCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount
})
const mapDispatchToProp = (dispatch: any) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProp)(CartIcon);