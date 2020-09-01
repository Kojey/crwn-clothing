import React from 'react'
//@ts-ignore
import {connect} from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import { ICollection } from '../../api/interface';

interface ShopPageProps {
  collections: ICollection[]
}
const ShopPage = (props: ShopPageProps) => (
  <div className="shop-page">
    {props.collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapPropsToState = createStructuredSelector({
  collections: selectShopCollection
})
export default connect(mapPropsToState)(ShopPage);