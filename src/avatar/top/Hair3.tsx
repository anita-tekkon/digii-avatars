import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair3 extends React.Component {
  static optionValue = 'Hair3'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, mask3, mask4, path1, path2, path3, path4 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path id={path2} data-name="Path 3482"
             d="M111,49.3c6.4-8.9,9.4-15,6.9-19.6c-1.8-3.6-4-7.1-6.5-10.2c-2.9-3.7-6.2-7.1-10-9.9c-1.8-1.4-3.7-2.7-5.7-3.8
             c-0.7-0.4-1.3-0.7-2-1.1h0c-6.3-3-13.2-4.6-20.2-4.7h0C56-0.6,38.2,5.9,30.9,11.9c-4.4,3.6-6.2,6.1-6.2,8.4
             c-0.1,3,2.6,5.8,5.9,10.4c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.2,0.3,0.4,0.4,0.6c1.8,2.3,4.9,3.4,8.5,4.1
             c2,0.3,4.1,0.6,6.3,0.8c4.8,0.4,9.9,0.7,14,2l0,0c2.1,0.6,4,1.7,5.6,3.2c4.1,4.2,14-1.9,24.6-7.4c6.3,6.4,16.9,18.6,19,29.9
             c1.6,8.5-0.2,37.3-0.2,37.3l4.7-14.9c0,0-0.2-15.9-1-27.2C112.6,56.1,112,52.7,111,49.3z"
             transform="translate(74 16)" 
          />
          <path id={path3} data-name="Path 3483"
             d="M32.2,34.3c-2.9-2.9-5.3-6.4-7-10.1c0,0-18.9,7.8-24,28.4C0.4,55.8,0,59.1,0,62.5c-0.3,8.4,1.4,16.8,5,24.4
             l4.7,14.9c0,0-1.3-21-0.7-32.4c0.7-1.8,1.6-3.4,2.7-4.9c1.3-1.6,2.8-3.1,4.5-4.3c4.9-3.3,4.2-4.3,6.4-12.3c0.1-0.5,0.3-1.1,0.5-1.6
             c0.3-1.2,0.8-2.3,1.3-3.4C27.6,36.2,33,35.2,32.2,34.3z"
             transform="translate(72 17)" 
          />
           <path id={path4} data-name="Path 3483"
             d="M28.7,41.7c-1.1,1.2-1.9,2.6-2.6,4.1c-0.6,1.5-1,3-1.2,4.6c-0.2,1.6-0.2,3.2,0.1,4.7c0.7-3,1.6-5.9,2.7-8.7
             c1-2.9,2.8-5.4,5.1-7.4C31.2,39.5,29.7,40.4,28.7,41.7z"
             transform="translate(74 16)" 
          />
  
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair3' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path3} />
              </mask>
              <mask id={mask4} fill='white'>
                <use xlinkHref={'#' + path4} />
              </mask>
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path2} />
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path3} />
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path4} />
              <HairColor maskID={mask2} />
              <HairColor maskID={mask3} />
              <HairColor maskID={mask4} />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
