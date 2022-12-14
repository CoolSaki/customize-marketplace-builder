import { connect } from 'react-redux'
import { RootState } from 'modules/common/types'
import { isConnected } from 'unicial-dapps/dist/modules/wallet/selectors'
import { getSelectedCollectionId, getSelectedItemId, isReviewing } from 'modules/location/selectors'
import { getBodyShape, getVisibleItems } from 'modules/editor/selectors'
import { getItems, getPaginationData, getWalletOrphanItems } from 'modules/item/selectors'
import { getAuthorizedCollections } from 'modules/collection/selectors'
import { setItems } from 'modules/editor/actions'
import { setCollection } from 'modules/item/actions'
import { MapStateProps, MapDispatchProps, MapDispatch } from './LeftPanel.types'
import LeftPanel from './LeftPanel'

const mapState = (state: RootState): MapStateProps => {
  const selectedCollectionId = getSelectedCollectionId(state)
  const paginationData = selectedCollectionId ? getPaginationData(state, selectedCollectionId) : null

  return {
    isConnected: isConnected(state),
    items: getItems(state),
    totalItems: paginationData?.total || null,
    orphanItems: getWalletOrphanItems(state),
    collections: getAuthorizedCollections(state),
    selectedItemId: getSelectedItemId(state),
    selectedCollectionId,
    visibleItems: getVisibleItems(state),
    bodyShape: getBodyShape(state),
    isReviewing: isReviewing(state)
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onSetItems: items => dispatch(setItems(items)),
  onSetCollection: (item, collectionId) => dispatch(setCollection(item, collectionId))
})

export default connect(mapState, mapDispatch)(LeftPanel)
