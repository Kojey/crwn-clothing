import React from 'react'
//@ts-ignore
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import { IItem } from '../../api/interface'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

interface CheckoutPageProps {
  cartItems: IItem[]
  cartTotal: number
}
const CheckoutPage = (props: CheckoutPageProps) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      { ['Product', 'Description', 'Quantity', 'Price', 'Remove']
        .map(item => (
          <div className='header-block' key={item}>
            <span>{item}</span>
          </div>
        ))
      }
    </div>
    {
      props.cartItems?.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
    }
    <div className='total'>TOTAL: ${props.cartTotal}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={props.cartTotal}/>
  </div>
)

const mapStapeToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})
export default connect(mapStapeToProps)(CheckoutPage);