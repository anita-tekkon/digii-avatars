import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth18 extends React.Component {
  static optionValue = 'Cloth18'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, path2, mask1, mask2} = this
    return (
      <g id='Clothing/Cloth18' transform='translate(0.000000, 170.000000)'>
         <path 
          id="Strap"
          d="M18.852,44.713A99.047,99.047,0,0,1,20.127,2.027C17.465,1.255,14.98.6,12.769,0c-1,11.581-2.362,23.342-6.72,33.774A56.234,56.234,0,0,1,0,44.713Z" 
          transform="translate(150 27)" 
          fill="#352c38"
          />
        <defs>
          <path 
            id={path1}
            d="M197.718,388.175c-10.4,15.6-32.7,26.393-58.545,26.393s-48.139-10.79-58.544-26.393c-18.516,9.569-36.763,27.923-32.967,67.756H230.684C234.481,416.1,216.234,397.744,197.718,388.175Z" 
            transform="translate(-19 -379) scale(1.08)" 
          />
          <path
            opacity="0.7"
            d="M133.108,433.1c36.753,0,68.921-10.63,86.619-26.524-6.294-8.608-14.792-14.363-23.353-18.4-10.4,14.235-32.7,24.078-58.545,24.078S89.69,402.41,79.285,388.175c-10.111,4.767-20.134,11.935-26.538,23.368C71.221,424.641,100.336,433.1,133.108,433.1Z" 
            transform="translate(-13 -370) scale(1.05)"
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
          id='Cloth18'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth18'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
      
        
        {this.props.children}
      </g>
    )
  }
}
