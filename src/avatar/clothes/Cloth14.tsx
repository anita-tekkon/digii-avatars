import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth14 extends React.Component {
  static optionValue = 'Cloth14'
  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Cloth14'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
              d="M312.049,414.522c-1.182-.772-25.6-6.3-45.011-12.615-6.854,6.2-21.758,19.451-39.09,19.451h-.113c-17.332,0-32.236-13.255-39.09-19.451-19.411,6.314-43.829,11.843-45.011,12.615-3.692,2.422-7.384,10.5-13.03,45.214l40.67,12.52.037,2.437H284.372l.038-2.437,40.387-12.52C319.15,425.018,315.741,416.944,312.049,414.522Z" 
              transform="translate(-116 -403) scale(1.08)"
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
