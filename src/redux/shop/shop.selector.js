import { createSelector } from "reselect";
import memoize from 'lodash.memoize'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsAsList = createSelector(
  [selectCollections],
  collections => collections? Object.values(collections) : []
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections? collections[collectionUrlParam] : null
));