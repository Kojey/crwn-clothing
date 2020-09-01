import React from 'react'
//@ts-ignore
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selector';
import { ICollection } from '../../api/interface';

interface CollectionPageProps {
  match: any
  collection: ICollection
}
const CollectionPage = (props: CollectionPageProps) => (
  <div className='collection-page'>
    <h2 className='title'>{props.collection.title}</h2>
    <div className='items'>
      {
        props.collection.items?.map(item=> <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>
);

const mapStateToProps = (state: any, ownProp: any) => ({
  collection: selectCollection(ownProp.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
