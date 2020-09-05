import React from 'react';
//@ts-ignore
import {withRouter} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'
import { ICollection } from '../../api/interface'
import './collection-preview.styles.scss'

interface CollectionPreviewProps extends ICollection{
  history?: any
  match?: any
}
const CollectionPreview = (props: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1 className='title'
      onClick={() => {console.log(props);props.history.push(`${props.match.url}/${props.linkUrl}`)}}
      >{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items.filter((_, idx) => idx<4)
          .map(item => <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>
)

export default withRouter(CollectionPreview);