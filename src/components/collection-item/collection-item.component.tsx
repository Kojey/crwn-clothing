import React from 'react';

// @ts-ignore
import  {connect} from 'react-redux'

import {addItem} from '../../redux/cart/cart.actions'
import { IItem, ICollectionItemProps } from '../../api/item.interface';
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = (props: ICollectionItemProps) => (
  <div className='collection-item'>
    <div className='image'
          style={{
            backgroundImage: `url(${props.item.imageUrl})`
          }}/>
    <div className='collection-footer'>
      <span className='name'>{props.item.name}</span>
      <span className='price'>{props.item.price}</span>
    </div>
    <CustomButton inverted value='Add to Cart'
      onClick={()=>{props.addItem?.(props.item)}}/>
  </div>
)

const mapDispatchToProps = (dispath: any) => ({
  addItem: (item: IItem) => dispath(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);