import React from 'react'
//@ts-ignore
import {connect} from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsAsList } from '../../redux/shop/shop.selector';
import { ICollection } from '../../api/interface';

import './collection-overview.styles.scss'

interface ShopPageProps {
  collections: ICollection[]
}

const CollectionOverview = (props: ShopPageProps) =>(
  <div className='collections-overview'>
    {props.collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
)

const mapPropsToState = createStructuredSelector({
  collections: selectCollectionsAsList
})
export default connect(mapPropsToState)(CollectionOverview);