import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth21 extends React.Component {
  static optionValue = 'Cloth21'
  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Cloth21'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
              d="M360.214,502.846H169.027c-1.227-48.459,26.407-63.509,47.966-71.268l-1.614,45.7s55.992,15.9,102.922-2.135l-.889-43.417C337.872,440.127,361.338,458.453,360.214,502.846Z" 
              transform="translate(-160 -442) scale(1.1)"
              id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
      
        {this.props.children}
      </g>
    )
  }
}
