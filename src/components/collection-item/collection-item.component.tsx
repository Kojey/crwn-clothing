import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

interface CollectionItemProps {
  name: string,
  imageUrl: string,
  price: number
}

const CollectionItem = (props: CollectionItemProps) => (
  <div className='collection-item'>
    <div className='image'
          style={{
            backgroundImage: `url(${props.imageUrl})`
          }}/>
    <div className='collection-footer'>
      <span className='name'>{props.name}</span>
      <span className='price'>{props.price}</span>
    </div>
    <CustomButton inverted style={{width: '50%'}} value='Add to Cart'/>
  </div>
)

export default CollectionItem;