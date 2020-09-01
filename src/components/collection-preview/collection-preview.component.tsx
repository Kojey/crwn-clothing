import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'
import { ICollection } from '../../api/interface'
import './collection-preview.styles.scss'


const CollectionPreview = (props: ICollection) => (
  <div className='collection-preview'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items.filter((_, idx) => idx<4)
          .map(item => <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>
)

export default CollectionPreview;