import * as React from 'react'
import { Container, Row, Column, Header, Card, Button, Dropdown, Table, Section, Tabs, Loader } from 'unicial-ui'
import { t } from 'unicial-dapps/dist/modules/translation/utils'
import { NavigationTab } from 'components/Navigation/Navigation.types'
import LoggedInDetailPage from 'components/LoggedInDetailPage'
import Icon from 'components/Icon'
import { locations } from 'routing/locations'
import { CollectionPageView } from 'modules/ui/collection/types'
import ItemCard from './ItemCard'
import ItemRow from './ItemRow'
import CollectionCard from './CollectionCard'
import CollectionRow from './CollectionRow'
import { Props, TABS } from './CollectionsPage.types'
import './CollectionsPage.css'
import MultiSelect from 'components/MultiSelect'

export default class CollectionsPage extends React.PureComponent<Props> {
  state = {
    currentTab: TABS.COLLECTIONS
  }
  handleNewItem = () => {
    this.props.onOpenModal('CreateSingleItemModal', {})
  }

  handleNewCollection = () => {
    this.props.onOpenModal('CreateCollectionModal')
  }

  handleNewThirdPartyCollection = () => {
    this.props.onOpenModal('CreateThirdPartyCollectionModal')
  }

  handleOpenEditor = () => {
    const { onNavigate } = this.props
    onNavigate(locations.itemEditor())
  }

  handleTabChange = (tab: TABS) => {
    const { onFetchOrphanItems, address } = this.props
    if (tab === TABS.ITEMS && address) {
      onFetchOrphanItems(address)
    }
    this.setState({ currentTab: tab })
  }

  renderGrid() {
    const { items, collections, isLoadingItems } = this.props
    return (
      <Card.Group>
        {this.isCollectionTabActive() ? (
          collections.map((collection, index) => <CollectionCard key={index} collection={collection} />)
        ) : isLoadingItems ? (
          <Loader size="large" active />
        ) : (
          items.map((item, index) => <ItemCard key={index} item={item} />)
        )}
      </Card.Group>
    )
  }

  renderList() {
    const { items, collections } = this.props
    return (
      <Section>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{t('global.item')}</Table.HeaderCell>
              <Table.HeaderCell>{t('collections_page.type')}</Table.HeaderCell>
              <Table.HeaderCell>
                {this.isCollectionTabActive() ? t('collections_page.collections') : t('collections_page.items')}
              </Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.isCollectionTabActive()
              ? collections.map(collection => <CollectionRow key={collection.id} collection={collection} />)
              : items.map(item => <ItemRow key={item.id} item={item} />)}
          </Table.Body>
        </Table>
      </Section>
    )
  }

  isCollectionTabActive = () => {
    const { currentTab } = this.state
    return currentTab === TABS.COLLECTIONS
  }

  renderPage() {
    const { items, collections, view, isThirdPartyManager, onSetView, isLoadingItems } = this.props
    const count = this.isCollectionTabActive() ? collections.length : items.length

    return (
      <>
        <div className="filters">
          <Container>
            <Tabs isFullscreen>
              <Tabs.Tab active={this.isCollectionTabActive()} onClick={() => this.handleTabChange(TABS.COLLECTIONS)}>
                {t('collections_page.collections')}
              </Tabs.Tab>
              <Tabs.Tab active={!this.isCollectionTabActive()} onClick={() => this.handleTabChange(TABS.ITEMS)}>
                {t('collections_page.single_items')}
              </Tabs.Tab>
              <Column align="right">
                <Row className="actions">
                  <Dropdown
                    trigger={
                      <Button inverted className="create-item">
                        <Icon name="add" />
                      </Button>
                    }
                    inline
                    direction="left"
                  >
                    <Dropdown.Menu>
                      {this.isCollectionTabActive() ? (
                        <>
                          <Dropdown.Item text={t('collections_page.new_collection')} onClick={this.handleNewCollection} />
                          {isThirdPartyManager ? (
                            <Dropdown.Item
                              text={t('collections_page.new_third_party_collection')}
                              onClick={this.handleNewThirdPartyCollection}
                            />
                          ) : null}
                        </>
                      ) : (
                        <Dropdown.Item text={t('collections_page.new_item')} onClick={this.handleNewItem} />
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="open-editor" primary onClick={this.handleOpenEditor} size="tiny">
                    {t('item_editor.open')}
                  </Button>
                  <MultiSelect
                    className="grid"
                    icon="table"
                    isActive={view === CollectionPageView.GRID}
                    onClick={() => onSetView(CollectionPageView.GRID)}
                  />
                  <MultiSelect
                    className="atlas"
                    icon="pin"
                    isActive={view === CollectionPageView.LIST}
                    onClick={() => onSetView(CollectionPageView.LIST)}
                  />
                </Row>
              </Column>
            </Tabs>
            <Row height={30}>
              <Column>
                <Row>
                  {isLoadingItems ? (
                    <Loader active size="mini" />
                  ) : (
                    <Header sub className="collectionpage-result-header">
                      {t('collections_page.results', { count })}
                    </Header>
                  )}
                </Row>
              </Column>
            </Row>
          </Container>
        </div>

        {isLoadingItems ? (
          <Loader active size="large" />
        ) : count > 0 ? (
          view === CollectionPageView.GRID ? (
            this.renderGrid()
          ) : view === CollectionPageView.LIST ? (
            this.renderList()
          ) : null
        ) : (
          <Card.Group>
            <div className="empty">
              <Header className="title" size="large">
                {t('collections_page.no_items')}
              </Header>
              <div className="empty-description">{t('collections_page.empty_description')}</div>
              <div className="create-new-wrapper">
                <div className="create-new create-new-item" onClick={this.handleNewItem}>
                  <div className="text">{t('collections_page.new_item')}</div>
                </div>
                <div className="create-new create-new-collection" onClick={this.handleNewCollection}>
                  <div className="text">{t('collections_page.new_collection')}</div>
                </div>
              </div>
            </div>
          </Card.Group>
        )}
      </>
    )
  }

  render() {
    const { isLoadingCollections } = this.props
    return (
      <LoggedInDetailPage className="CollectionsPage" activeTab={NavigationTab.COLLECTIONS} isLoading={isLoadingCollections}>
        {this.renderPage()}
      </LoggedInDetailPage>
    )
  }
}
