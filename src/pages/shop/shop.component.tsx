import React, { useEffect, useState } from 'react'
//@ts-ignore
import {connect} from 'react-redux'
//@ts-ignore
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.compoment'
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

interface ShopPageProps {
  match: any
  location: any
  history: any
  updateCollections: any
}

const CollectionsOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage)

const ShopPage = (props: ShopPageProps) => {
  const [loading, setLoading] = useState(true)

  let unsuscribeFromSnapshot: any = null;

  useEffect(()=>{
    const collectionRef = firestore.collection('collections')

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-cf045/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections))

    // collectionRef.get().then(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   props.updateCollections(collectionsMap)
    //   setLoading(false)
    // })
    
    unsuscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      props.updateCollections(collectionsMap)
      setLoading(false)
    })
    return () => unsuscribeFromSnapshot();
  }, [])
  
  return (
    <div className="shop-page">
      <Route exact path={`${props.match.path}`} 
        render={(props: ShopPageProps) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
      <Route path={`${props.match.path}/:collectionId`} 
        render={(props: ShopPageProps) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
    </div>
  )
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);