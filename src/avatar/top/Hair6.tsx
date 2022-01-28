import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair6 extends React.Component {
  static optionValue = 'Hair6'
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
          <path id={path2} data-name="Path 3482" 
          d="M258.11,95.112s-7.506,3.5-15.507,2.5S230.1,94.292,226.59,96.453a11.9,11.9,0,0,0-5.5,9.916c0,3.751,1.5,9.492,0,11.372s-7.5,4.882-8.5,8.635c-.648,2.418-1.5,6-3.252,6.753s-2.751-7.256-3.5-10.255-7.25-12.506-6-27.762c0,0-10.007-17.259,3.5-29.514,0,0,3.179-28.263,23.852-25.011,0,0,9.4-5.753,13.661-6.256,0,0,7.254-15.752,31.263-5.749,0,0,8.753-7.5,18.256,2s18.008,9.221,19.761,14.505c1.341,4.048,11.255,7.256,13.255,20.26a22.929,22.929,0,0,1,5.751,6.254s5.252,1.5,4.254,9c0,0-3.749,12.009-1.252,17.01s-5,8.757-5.751,17.01-2.357,10.6-5.5,14.5a23.336,23.336,0,0,1-3.751,4.054c-2.25,2.2-1.248-8.054-5-9.8s-8.258-7.757-10-16.76-14.01-8.256-17.259-10.255-11.51-6-17.76-4S258.11,95.112,258.11,95.112Z" 
          transform="translate(-147 -32) scale(1.06)" 
          />
  
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair6' mask={`url(#${mask1})`}>
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
