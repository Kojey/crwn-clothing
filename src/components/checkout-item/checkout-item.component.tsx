import React from 'react'
// @ts-ignore
import  {connect} from 'react-redux'

import { IItem } from '../../api/interface'
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

interface CheckoutItemProps {
  item: IItem
  addItem: (item: IItem) => any
  removeItem: (item: IItem) => any
  clearItem: (item: IItem) => any
}
const CheckoutItem = (props: CheckoutItemProps) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={props.item.imageUrl}/>
    </div>
    <span className='name'>{props.item.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={()=>props.removeItem?.(props.item)}>
        &#10094;
      </div>
      <span className='value'>{props.item.quantity}</span>
      <div className='arrow' onClick={()=>props.addItem?.(props.item)}>
        &#10095;
      </div>
    </span>
    <span className='price'>${props.item.price}</span>
    <div className='remove-button' 
      onClick={()=>props.clearItem?.(props.item)}
      >&#10005;</div>
  </div>
)
const mapDispatchToProps = (dispath: any) => ({
  clearItem: (item: IItem) => dispath(clearItem(item)),
  addItem: (item: IItem) => dispath(addItem(item)),
  removeItem: (item: IItem) => dispath(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);