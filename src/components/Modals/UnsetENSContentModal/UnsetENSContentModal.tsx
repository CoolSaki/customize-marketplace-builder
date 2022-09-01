import React from 'react'
import { T, t } from 'unicial-dapps/dist/modules/translation/utils'
import Modal from 'unicial-dapps/dist/containers/Modal'
import { Button } from 'unicial-ui'
import { Props } from './UnsetENSContentModal.types'

export default class UnsetENSContentModal extends React.PureComponent<Props> {
  render() {
    const { isLoading, metadata, onClose, onUnsetENSContent } = this.props
    const { ens, land } = metadata

    return (
      <Modal size="tiny">
        <Modal.Header>{t('land_detail_page.unset_ens_content.title')}</Modal.Header>
        <Modal.Content>
          <T id="land_detail_page.unset_ens_content.text" values={{ link: ens.subdomain, land: land.name }} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onClose}>{t('global.cancel')}</Button>
          <Button primary onClick={() => onUnsetENSContent(ens, land)} loading={isLoading} disabled={isLoading}>
            {t('global.proceed')}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
