import { Reducer, Store } from 'redux'
import { action } from 'typesafe-actions'
import { RouterState } from 'connected-react-router'
import { AuthorizationState } from 'unicial-dapps/dist/modules/authorization/reducer'
import { ModalState } from 'unicial-dapps/dist/modules/modal/reducer'
import { ProfileState } from 'unicial-dapps/dist/modules/profile/reducer'
import { StorageState } from 'unicial-dapps/dist/modules/storage/reducer'
import { TranslationState } from 'unicial-dapps/dist/modules/translation/reducer'
import { ToastState } from 'unicial-dapps/dist/modules/toast/reducer'
import { WalletState } from 'unicial-dapps/dist/modules/wallet/reducer'
import { STORAGE_LOAD } from 'unicial-dapps/dist/modules/storage/actions'

import { AssetPackState } from 'modules/assetPack/reducer'
import { AssetState } from 'modules/asset/reducer'
import { CollectionState } from 'modules/collection/reducer'
import { CommitteeState } from 'modules/committee/reducer'
import { DeploymentState } from 'modules/deployment/reducer'
import { EditorState } from 'modules/editor/reducer'
import { ENSState } from 'modules/ens/reducer'
import { IdentityState } from 'modules/identity/reducer'
import { ItemState } from 'modules/item/reducer'
import { LandState } from 'modules/land/reducer'
import { LocationState } from 'modules/location/reducer'
import { MediaState } from 'modules/media/reducer'
import { PoolGroupState } from 'modules/poolGroup/reducer'
import { PoolState } from 'modules/pool/reducer'
import { ProjectState } from 'modules/project/reducer'
import { StatsState } from 'modules/stats/reducer'
import { SyncState } from 'modules/sync/types'
import { ThirdPartyState } from 'modules/thirdParty/reducer'
import { TileState } from 'modules/tile/reducer'
import { TransactionState } from 'unicial-dapps/dist/modules/transaction/reducer'
import { UIState } from 'modules/ui/reducer'
import { UndoableSceneState } from 'modules/scene/reducer'
import { EntityState } from 'modules/entity/reducer'
import { CollectionCurationState } from 'modules/curations/collectionCuration/reducer'
import { ItemCurationState } from 'modules/curations/itemCuration/reducer'

const storageLoad = () => action(STORAGE_LOAD, {} as RootState)
export type StorageLoadAction = ReturnType<typeof storageLoad>

export type RootState = {
  asset: AssetState
  assetPack: AssetPackState
  authorization: AuthorizationState
  collection: CollectionState
  committee: CommitteeState
  deployment: DeploymentState
  editor: EditorState
  ens: ENSState
  entity: EntityState
  identity: IdentityState
  item: ItemState
  land: LandState
  location: LocationState
  media: MediaState
  modal: ModalState
  pool: PoolState
  poolGroup: PoolGroupState
  profile: ProfileState
  project: ProjectState
  router: RouterState
  scene: UndoableSceneState
  stats: StatsState
  storage: StorageState
  sync: SyncState
  thirdParty: ThirdPartyState
  tile: TileState
  toast: ToastState
  transaction: TransactionState
  translation: TranslationState
  ui: UIState
  wallet: WalletState
  collectionCuration: CollectionCurationState
  itemCuration: ItemCurationState
}

export type RootStore = Store<RootState>
export type RootReducer = Reducer<RootState>
