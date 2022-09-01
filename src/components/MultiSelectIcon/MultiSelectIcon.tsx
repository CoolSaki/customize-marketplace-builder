import * as React from 'react'

import { Props, DefaultProps } from './MultitIcon.types'
import './MultiSelectIcon.css'
// import './sprite.css'
import MultiSelectActive from '../../images/MultiSelectActive.svg'
import MultiSelect from '../../images/MultiSelect.svg'
import PinSelectActive from '../../images/PinSelectActive.svg'
import PinSelect from '../../images/PinSelect.svg'

const noop = (_: React.MouseEvent<HTMLElement>) => {
  /* noop */
}

export default class Icon extends React.PureComponent<Props> {
  static defaultProps: DefaultProps = {
    isActive: false,
    className: ''
  }

  render() {
    const {
      name,
      isActive,
      onClick
      // className
    } = this.props
    // const iconName = isActive ? `${name}-active` : name
    // return <div className={`Icon ${iconName} ${onClick ? 'clickeable' : ''} ` + className} onClick={onClick || noop} />
    return name == 'pin' ? (
      isActive ? (
        <img
          src={PinSelectActive}
          alt=""
          // className={`Icon ${iconName} ${onClick ? 'clickeable' : ''} ` + className}
          className="pin-select-active"
          onClick={onClick || noop}
        />
      ) : (
        <img
          src={PinSelect}
          alt=""
          // className={`Icon ${iconName} ${onClick ? 'clickeable' : ''} ` + className}
          className="pin-select"
          onClick={onClick || noop}
        />
      )
    ) : isActive ? (
      <img
        src={MultiSelectActive}
        alt=""
        // className={`Icon ${iconName} ${onClick ? 'clickeable' : ''} ` + className}
        className="multi-select-active"
        onClick={onClick || noop}
      />
    ) : (
      <img
        src={MultiSelect}
        alt=""
        // className={`Icon ${iconName} ${onClick ? 'clickeable' : ''} ` + className}
        className="multi-select"
        onClick={onClick || noop}
      />
    )
  }
}
