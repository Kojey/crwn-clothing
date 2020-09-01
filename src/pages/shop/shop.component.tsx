import React from 'react'
//@ts-ignore
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.compoment'
import CollectionPage from '../collection/collection.component';

interface ShopPageProps {
  match: any
  location: any
  history: any
}
const ShopPage = (props: ShopPageProps) => (
  <div className="shop-page">
    <Route exact path={`${props.match.path}`} component={CollectionOverview}/>
    <Route path={`${props.match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);

export default ShopPage;