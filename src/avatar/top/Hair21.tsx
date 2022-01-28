import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair21 extends React.Component {
  static optionValue = 'Hair21'
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
               d="M260.694,152.812c-6.822-9.075-33.111-19.558-57.814-19.691-24.707.133-28.679,17.551-28.679,17.551-29.1-5.2-18.879,59.821-18.879,59.821a6.2,6.2,0,0,1,3.638.061c4.257,1.544,4.378,8.654,2.853,11.671-1.878,3.714,1.924,15.207,1.924,15.207a80.944,80.944,0,0,0,2.838-21.254c.045-4.541,7.083-14.429,6.788-22.559-.19-5.16.876-9.03,2.762-11.9,1.123,7.884,5,16.056,15.191,20.393,0,0-7.683-12.858-5.794-26.885,0,0,3.445,23.258,19.3,27.8,0,0-9.091-13.184-7.372-28.85.774.046,3.293,23.8,21.858,29.548,0,0-11.094-15.078-10.434-29.931.945.235,7.755,26.255,23.053,30.637,0,0-12.141-14.182-10.21-30,.744-.091,5.543,25.925,23,30.922,0,0-12.3-14.33-9.386-30.762.816.137,3.195,26.653,18.955,33.122,1.5,3.453,2.868,6.476,2.887,8.468a81.1,81.1,0,0,0,2.838,21.254s3.8-11.492,1.924-15.207-1.256-13.624,6.492-11.731C268.426,210.493,274.891,171.7,260.694,152.812Z" 
               transform="translate(-100 -131) scale(1.1)"
               id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair21' mask={`url(#${mask1})`}>
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
