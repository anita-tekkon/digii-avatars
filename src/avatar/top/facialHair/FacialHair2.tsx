import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class FacialHair2 extends React.Component {
  static optionValue = 'FacialHair2'

  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { mask1, path1, mask2, path2 } = this
    return (
      <g
        id='Facial-Hair/FacialHair2'
        transform='translate(78.000000, 42.000000)'>
        <defs>
          <path
            d="M81.818,96.02c-4.222,0-4.306,2.589-4.306,2.589a2.789,2.789,0,0,1,2.1-1.027c.875,0,3.786.8,3.893,3.3.172,3.953-5.162,4.439-5.162,4.439-7.729,0-6.645-5.637-13.447-11.883-5.434-4.99-9.471.109-9.471,2.45a16.474,16.474,0,0,0,.826,4.984c2.877,6.463,13.064,9.378,17.457,9.378,6.779,0,13.487-3.261,13.487-8.981A5.408,5.408,0,0,0,81.818,96.02Z"
            id={path1}
          />
           <path
            d="M30.414,96.02c4.225,0,4.307,2.589,4.307,2.589a2.787,2.787,0,0,0-2.1-1.027c-.877,0-3.785.8-3.9,3.3-.17,3.953,5.165,4.439,5.165,4.439,7.728,0,6.644-5.637,13.447-11.883,5.433-4.99,9.471.109,9.471,2.45a16.475,16.475,0,0,1-.827,4.984c-2.879,6.463-13.064,9.378-17.457,9.378-6.781,0-13.486-3.261-13.486-8.981A5.407,5.407,0,0,1,30.414,96.02Z"
            id={path2}
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
