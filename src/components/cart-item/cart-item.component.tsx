import React from 'react';

import {IItem} from '../../api/interface'
import './cart-item.styles.scss'

const CartItem = (props: IItem) => (
  <div className='cart-item'>
    <img src={props.imageUrl} alt='item'/>
    <div className='item-details'>  
      <span className='name'>{props.name}</span>
      <span className='price'>
        {props.quantity?props.quantity:0} x ${props.price}
      </span>
    </div>
  </div>
)

export default CartItem;