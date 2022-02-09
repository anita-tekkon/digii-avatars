import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth24 extends React.Component {
  static optionValue = 'Cloth24'
  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Cloth24'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
              d="M1991.779,495.72c1.531-23.544-3.056-58.491-4.591-69.249,2.7-1.177,5.369-2.209,7.954-3.138,6.391-2.3,12.256-3.962,16.719-5.657.933-.354,1.8-.71,2.607-1.071l.34-.156,34.457,41.687,23.421-41.549c.841.381,1.758.754,2.742,1.127,5.741,2.168,13.774,4.3,22.25,7.773,1.945.8,3.914,1.665,5.885,2.62-.081,19.108,1.958,52.849,2.918,67.612Z"
              transform="translate(-2117 -433) scale(1.1)"
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

        <path id="Path_3727" data-name="Path 3727"
          d="M1997.359,550.536H1991.5c.855-7.622,2.417-20.752,3.039-20.908C1995.1,529.488,1996.445,541.614,1997.359,550.536Z" 
          transform="translate(-1991.504 -529.626)" 
          fill="#040505"
        />
        <path id="Path_3728" data-name="Path 3728"
          d="M2248.735,550.537h-5.442l1.853-20.908Z" 
          transform="translate(-2243.293 -529.629)" 
          fill="#040505"
        />
        {this.props.children}
      </g>
    )
  }
}
