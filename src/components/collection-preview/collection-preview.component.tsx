import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

interface CollectionPreviewProps {
  title: string;
  routeName: string;
  items: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
  }[];
}
const CollectionPreview = (props: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items.filter((item, idx) => idx<4)
          .map(item => <CollectionItem key={item.id} {...item}/>)
      }
    </div>
  </div>
)

export default CollectionPreview;