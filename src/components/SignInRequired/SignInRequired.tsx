import * as React from 'react'
import { Center } from 'unicial-ui'
import { t, T } from 'unicial-dapps/dist/modules/translation/utils'
import { Link } from 'react-router-dom'

import { locations } from 'routing/locations'
import './SignInRequired.css'

export default class SignInRequired extends React.PureComponent {
  render() {
    return (
      <Center className="SignInRequired">
        <div className="secondary-text">
          <T
            id="global.sign_in_required"
            values={{
              link: (
                <Link to={locations.signIn()} className="sign-in-link">
                  {t('global.sign_in')}
                </Link>
              )
            }}
          />
        </div>
      </Center>
    )
  }
}
