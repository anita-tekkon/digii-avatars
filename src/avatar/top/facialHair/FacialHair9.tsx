import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class FacialHair9 extends React.Component {
  static optionValue = 'FacialHair9'

  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { mask1, path1, mask2, path2 } = this
    return (
      <g
        id='Facial-Hair/FacialHair9'
        transform='translate(78.000000, 42.000000)'>
        <defs>
          <path
            d="M1855.9,865.5c-2.1-2.5-5.3-3.8-8.5-3.4c-3.4,0.2-3.3-1.1-6.1-0.8c-0.7,0.1-1.2,0.4-1.6,0.8
            c-0.4-0.4-0.9-0.7-1.6-0.8c-2.8-0.3-2.7,1-6.1,0.8c-3.2-0.3-6.4,0.9-8.5,3.4c-2.2,2.7-4.6,3.4-6.8,2.8c1.3,1.5,3.2,2.2,5.2,2.1
            c3.6,0,6.7-2.4,8.9-2.2c4.8,0.5,7.6-0.6,8.7-1.8c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3c1.1,1.2,3.9,2.3,8.7,1.8
            c2.2-0.2,5.3,2.2,8.9,2.2c2,0.1,3.9-0.7,5.2-2.1C1860.5,868.9,1858.1,868.3,1855.9,865.5z"
            id={path1}
            transform="translate(-1932 -839) scale(1.08)"
          />
           <path
            d="M1885.8,845.9c0,0-1.8,17-8.2,23c-6.4,6-3.2,11-7.7,18c-4.5,7-12.4,11.6-15.5,13.3c-3.1,1.7-5.2,2.9-8.9,4.6
            c-3.7,1.7-6.6-1.1-6.6-1.1v0l0,0l0,0v0c0,0-3,2.9-6.6,1.1c-3.7-1.7-5.8-2.9-8.9-4.6c-5.8-3.3-10.7-7.9-14.5-13.3
            c-4.5-7-2.3-12-8.7-18c-6.4-6-8.2-23-8.2-23c-0.2,1.3-1,2.6-0.9,4.2c0.2,11.7,1.4,26.6,4,32.3c3.1,6.6,4,18.4,9.5,23.9
            s6.4,7.2,12.2,12.4c5.8,5.2,9.5,4,15.3,6c5.6,1.9,6.9,4,6.9,4v0c0,0,0,0,0,0c0,0,0,0,0,0v0c2.1-1.7,4.4-3.1,6.9-4
            c5.6-2.2,9.5-0.9,15.3-6c5.8-5.2,6.7-6.9,12.2-12.4c5.5-5.5,6.4-17.3,9.5-23.9c2.6-5.7,3.5-25.2,4.2-36.5
            C1887,843.6,1886,847.2,1885.8,845.9z"
            id={path2}
            transform="translate(-1932 -841) scale(1.08)"
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask1} />
        <Colors maskID={mask2} />
      </g>
    )
  }
}
