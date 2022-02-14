import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair1 extends React.Component {
  static optionValue = 'Hair1'
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
            d="M127.7,96c-0.4-2.3-0.8-4.5-1.2-6.7c0.6-2,1.1-4.1,1.5-6.4c0.1-0.2,0.1-0.4,0.2-0.6l0.5-1.7
            c0.2-0.6,0.3-1.3,0.5-1.9c0.3-1.4,0.6-2.9,0.8-4.5c0.2-1.7,0.3-3.4,0.4-5.1c0-1.8-0.1-3.6-0.3-5.4c-0.2-1.9-0.6-3.7-1-5.5
            c-0.5-1.8-1.1-3.6-1.8-5.3s-1.5-3.3-2.4-4.9c-0.3-0.6-0.7-1.1-1-1.7c0.4-0.7,0.7-1.4,0.9-2.2c0.5-1.6,0.6-3.2,0.5-4.8
            c-0.2-1.7-0.6-3.3-1.2-4.8c-0.6-1.5-1.3-3-2.1-4.5c-0.8-1.4-1.6-2.8-2.6-4c-1.8-2.2-4.1-4-6.7-5.1c-1-0.4-1.9-0.7-2.9-1
            c-2.3-2.6-4.2-4.8-5.9-6.8c0-0.1,0-0.1,0-0.2c-0.2-1.6-0.5-3.2-1.1-4.7c-0.2-0.4-0.4-0.8-0.6-1.2c-0.1-0.2-0.3-0.4-0.4-0.6l-0.2-0.2
            l-0.1-0.1L101.2,6L101,5.9c-0.7-0.6-1.5-1.2-2.3-1.6C97,3.5,95.4,2.8,93.6,2c-1.8-0.7-3.7-1.3-5.6-1.7C86.1,0,84.1-0.1,82.2,0
            c-1.9,0.1-3.7,0.3-5.6,0.7c-1.4,0.3-2.8,0.7-4.1,1.1l-1.2-0.2l-3.8-0.8c-0.6-0.1-1.3-0.3-1.9-0.4c-0.7-0.2-1.4-0.1-2,0.1
            c-0.4,0.2-0.7,0.5-1,0.9C53.3-0.9,45.4,1.2,41,4.8c-1,0.5-2,1.2-2.8,2c-0.9,0.9-1.8,1.9-2.6,3c-0.8,1-1.6,2-2.5,2.9
            c-0.3,0.3-0.5,0.5-0.8,0.7c-0.5,0.1-1.1,0.1-1.8,0.2c-6.1,0.4-4.8,4.6-5.6,7.6c-0.1,0.3-0.1,0.5-0.2,0.8c-0.5,0.5-1,1-1.5,1.6
            c-0.7,0.7-1.3,1.4-1.9,2.2c-0.6,0.8-1.1,1.8-1.4,2.8c-0.3,1.1-0.2,2.2,0.2,3.3c0.2,0.5,0.5,1,0.8,1.5c-0.4,0.1-0.9,0.3-1.3,0.4
            c-0.7-0.2-1.3-0.5-1.9-0.8c-0.9-0.4-1.7-0.9-2.5-1.5c-0.8-0.6-1.5-1.2-2.1-1.9c-1.1-1.3-1.9-2.8-2.2-4.4c-0.2-1.2-0.2-2.4,0.1-3.5
            c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.2,0.1-0.3,0.1-0.3l-0.2,0.3c-0.1,0.3-0.3,0.6-0.4,0.9c-0.3,1.2-0.4,2.4-0.2,3.6
            c0.3,1.7,1,3.3,2.1,4.6c0.6,0.7,1.3,1.4,2.1,2c0.8,0.6,1.6,1.2,2.5,1.6c0.5,0.2,0.9,0.5,1.4,0.7c-2.4,0.9-4.7,1.9-6.9,3.2
            c-1.5,0.9-2.8,1.9-4,3c-1.2,1.1-2.2,2.4-3,3.8C4,45.5,3.6,47,3.6,48.6c0,1.4,0.2,2.7,0.6,4c0.6,1.8,1.6,3.6,2.7,5.1
            C6,59,5.2,60.4,4.4,61.9c-1.9,3.6-3.2,7.5-3.9,11.5S-0.1,81.6,1,85.5c0.9,3.4,2.7,6.6,5.1,9.2c0.3,0.3,0.7,0.6,1,1
            c0,3-0.2,6.2-0.3,9.6c-0.3,1.4-0.5,2.8-0.8,4.2c-0.6,3.4-1.1,7-1.4,10.6c-0.4,3.6-0.5,7.3-0.6,11c0,1.8,0,3.7,0.2,5.5
            c0.1,1.8,0.2,3.7,0.4,5.5c0.4,3.5,0.9,7.1,1.7,10.5c0.6,3,1.4,5.9,2.4,8.7c1,3.1,2.3,6.1,3.8,9c0.3,0.6,0.7,1.2,1,1.7
            c0.2,0.3,0.4,0.6,0.6,0.9c1.1,7.8,3.8,15.3,7.8,22c-1.4-3.1-3.3-12.9-4-16.8c0.1,0.4,0.2,0.8,0.3,1.1c0,0.1,0,0.2,0.1,0.2
            c0.2,0.9,0.4,1.7,0.7,2.5c0,0.1,0.1,0.2,0.1,0.3c0.2,0.8,0.5,1.6,0.8,2.4c0,0.1,0,0.1,0.1,0.2c0.6,1.7,1.2,3.2,1.9,4.7
            c0,0.1,0,0.1,0.1,0.2c0.3,0.7,0.7,1.4,1,2.1c0,0.1,0.1,0.1,0.1,0.2c0.3,0.7,0.7,1.4,1.1,2c0,0,0,0.1,0.1,0.1
            c0.7,1.3,1.5,2.6,2.2,3.8c0,0,0,0,0,0.1c0.4,0.6,0.7,1.1,1.1,1.6c0,0,0,0.1,0.1,0.1c3,4.4,5.5,7,5.5,7s-0.2-0.3-0.6-0.9
            c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.1-0.1-0.2-0.2-0.3
            c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.1-0.1-0.2-0.2-0.3
            c-0.1-0.2-0.2-0.4-0.3-0.7v-0.1c-0.6-1.2-1.2-2.7-1.9-4.4v-0.1c-0.2-0.4-0.3-0.9-0.5-1.3c0,0,0,0,0-0.1c-1.2-3.2-2.4-7.1-3.6-11.8
            c-2.4-9.8-4.2-23-3.7-39.7c0-0.5,0-1.1,0-1.6c0-1,0.1-2,0.1-3c0,0.4,0,0.7,0.1,1.1c0.5,5.8,1.4,11.6,2.8,17.2c1,4,2.4,7.9,4.3,11.6
            c0.3,0.7,0.7,1.2,0.9,1.7c0.2,0.5,0.5,0.9,0.8,1.3c0.4,0.7,0.7,1,0.7,1l-0.6-1c-0.2-0.3-0.4-0.8-0.7-1.3c-0.3-0.5-0.6-1.1-0.9-1.8
            c-1.8-3.7-3.2-7.6-4.2-11.6c-1.3-5.7-2.2-11.4-2.7-17.2c-0.1-1.3-0.2-2.6-0.2-4c0.1-2.7,0.3-5.4,0.4-8c0.8-1.9,1.7-3.9,2.5-6
            c0.1-0.2,0.2-0.5,0.3-0.7c0,0.1,0,0.1,0,0.2c0.1,3,0.1,5.9,0.3,8.9c0.1,2.9,0.4,5.8,0.7,8.6c0.1,1.4,0.3,2.7,0.5,4.1
            c0.2,1.4,0.4,2.6,0.6,3.9c0.2,1.3,0.5,2.5,0.7,3.7c0.2,1.2,0.5,2.3,0.8,3.4c-0.2-1.1-0.5-2.2-0.7-3.4s-0.4-2.4-0.6-3.7
            c-0.2-1.3-0.4-2.5-0.6-3.9c-0.2-1.3-0.4-2.7-0.5-4.1c-0.2-2.8-0.5-5.6-0.6-8.5c-0.2-2.9-0.2-5.9-0.2-8.8c0-0.5,0-0.9,0-1.4
            c1.5-3.9,2.9-8,4.2-12.1c0.7-2,1.3-4.1,2-6.1c2.9,0.8,5.7,1.1,8.2,1.8c1.6-5.3,3.6-12.2,5.5-19.7c-0.1,1.1-0.2,2.2-0.3,3.3
            c-0.6,5.6-1.4,11.1-1.4,11.1s1-5.5,1.8-11.1c0.5-3,0.8-6,1.1-8.2c0.6-2.5,1.2-5,1.7-7.5c-1.8,13-3.4,25.4-3.3,33.3
            c2.6,0.6,5.2,1,7.6,1.3c1.8-6.3,4.3-24.2,4.3-24.2c0,6.7-1,19.7-1.5,24.5c1.2,0.1,2.3,0.2,3.4,0.2c2.2-14.9,1-38.4,1-38.4
            c1.3,11.4,1,27.7,2.7,38.4c3.3,0.5,6.6,0.5,9.9,0.1c0.1-0.1,0.2-0.2,0.2-0.4c1-5.4,1.4-13.1,1.2-21.4c0.1,1,0.3,2,0.4,3
            c0.7,4.5,1.5,8.9,2.2,12.3c0.7,3.3,1.2,5.5,1.2,5.5s-0.5-2.2-1.1-5.6c-0.6-3.3-1.4-7.8-1.9-12.3c-0.4-3-0.7-6-0.9-8.6
            c1.3,11.3,5.9,26.3,5.9,26.3c3.8,0.5,7.7,0.2,11.5-0.9c-0.9-7-2.5-18.1-4.5-22.7c2.8,5.6,5.3,16.1,6.6,22.4c2-0.2,3.9-0.6,5.9-1.1
            C94.8,87,87.2,66.6,87.2,66.6c4.9,12.1,9.2,24.5,12.7,37.1c2.4-0.6,4.8-1.5,7-2.5c-1-3.8-3.6-14-6.2-20.9c0,0,0.2,0.5,0.7,1.3
            c0.7,2.3,1.8,5.1,2.8,8c2.3,6.3,4.6,12.5,4.6,12.5s-2.1-6.3-4.2-12.7c-0.4-1.2-0.8-2.5-1.2-3.6c2,4.3,4.6,10.1,6,14.2
            c1.2-0.6,2.3-1.4,3.5-2.1c2.5,13.2,4,26.2,3.9,39.7c-0.3,1.8-0.6,3.6-0.9,5.3c-0.2,1.1-0.5,2.1-0.7,3.2c-0.2,1-0.5,2-0.7,3
            c-0.3,1-0.5,1.9-0.7,2.8c-0.2,0.9-0.5,1.8-0.8,2.6s-0.5,1.6-0.7,2.4c-0.3,0.8-0.5,1.5-0.7,2.2c0.2-0.7,0.5-1.4,0.8-2.1
            c0.2-0.8,0.5-1.6,0.8-2.4s0.6-1.7,0.8-2.6c0.3-0.9,0.5-1.9,0.8-2.8c0.3-1,0.5-2,0.7-3c0.2-1,0.5-2.1,0.7-3.2
            c0.2-1.1,0.4-2.2,0.6-3.3c0,1.8-0.1,3.6-0.2,5.4c-0.3,5.5-0.6,10.7-1.1,15.3c-0.1,0.2-0.1,0.5-0.2,0.7c-0.3,1.1-0.6,2.1-0.9,3.1
            s-0.7,1.9-1,2.7s-0.6,1.7-0.9,2.4c-0.3,0.7-0.6,1.4-0.8,2c-1,2.4-1.6,3.8-1.6,3.8s0.6-1.4,1.7-3.8c0.3-0.6,0.6-1.3,0.9-2
            c0.3-0.7,0.6-1.5,0.9-2.4c0.3-0.9,0.6-1.8,1-2.7c0.3-1,0.6-2,0.9-3c-2,20.5-5.1,31.6-5.1,31.6s10.6-28.6,12.3-61
            c0,0,0.5,46.9-6,69.8c0,0,12.4-28.3,13.4-80.2c0.1-5.8-0.2-11.4-0.7-16.6c-0.4-2.6-1-5.1-1.4-7.5C127.9,96.9,127.8,96.4,127.7,96z"
            id={path2}
            transform="translate(22 -25)"
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair1' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(39.000000, 19.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Combined-Shape' fill='#E6E6E6' xlinkHref={'#' + path2} />
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
