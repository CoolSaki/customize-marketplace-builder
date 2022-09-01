import * as React from 'react'
import { Loader, Page } from 'unicial-ui'
// import Ad from 'unicial-ad/lib/Ad/Ad'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default class LoadingPage extends React.PureComponent {
  render() {
    return (
      <>
        {/* <Ad slot="BUILDER_TOP_BANNER" type="full" /> */}
        <Navbar isFullscreen />
        <Page isFullscreen>
          <Loader active size="huge" />
        </Page>
        <Footer isFullscreen />
      </>
    )
  }
}
