import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class ShortDownRight extends React.Component {
  static optionValue = 'ShortDownRight'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, path1, path2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
             d="M139.94,357.144c-14.208-6-53-8.367-68.718,4.158-6.468.134-21.549,2.4-26.52,20.261-3.512,12.629-1.3,36.455,10.495,61.318a59.6,59.6,0,0,0,2.224,9.483c.325-1.116.6-2.243.866-3.37A139.379,139.379,0,0,0,69.1,466.113a83.953,83.953,0,0,1-8.05-36.9c.265-7.934,7.3-19.914,10.084-22.859,4.094,7.285,11.211,14.253,23,19.821,0,0-7.7-16.988-6.886-25.419.8,2.359,1.6,4.758,2.374,7.225,10.069,32.141,26.878,26.442,34.421,26,0,0-16.839-16.35-16.178-31.48.336.989.672,1.967,1,3,4.385,13.775,13.215,25.889,25.721,33.137.194.116.4.232.593.343,8.867,5,13.029,15.917,8.643,25.109-.317.664-.672,1.34-1.071,2.019a113.062,113.062,0,0,0,9.05-14.917c.1.388.2.78.31,1.168,0,0,.575-1.747,1.164-4.079A147.641,147.641,0,0,0,165.255,413.7C172.14,380.787,162.317,366.6,139.94,357.144Z"
             id={path2}
            transform= "translate(20, -364) scale(1.07)"
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/ShortDownRight' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path2} />
              <HairColor maskID={mask2} />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
