import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth37 extends React.Component {
  static optionValue = 'Cloth37'
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')

  render () {
    const { path1, path2, path3, mask1, mask2, mask3 } = this
    return (
      <g
        id='Clothing/Cloth37'
        transform='translate(0.000000, 170.000000)'>
        <defs>
           <path
              opacity="0.7"
              d="M2666.61,1503.338H2473.027c-1.22-47.765,25.789-63.164,47.442-71.063,5.9-2.155,11.41-3.751,15.836-5.294q1-.35,1.93-.7a37.316,37.316,0,0,0,3.977-1.723l22.754,6.744,32.311-6.822a36.9,36.9,0,0,0,4.225,1.838c1.521.57,3.2,1.138,5.012,1.727,4.678,1.527,10.206,3.21,15.983,5.488C2643.488,1441.82,2667.768,1457.994,2666.61,1503.338Z"
              transform="translate(-2695 -1540) scale(1.1)"
              id={path1}
          />
          <path
              d="M2681.8,1422.625a64.833,64.833,0,0,1-23.157,8.073,60.232,60.232,0,0,1-8.368.583,62.922,62.922,0,0,1-31.743-8.693,33.667,33.667,0,0,0,4.594-2.057,16.052,16.052,0,0,0,4.09-3.269,56.671,56.671,0,0,0,12.113,3.971,53.22,53.22,0,0,0,33.7-3.952,16.052,16.052,0,0,0,4.072,3.251A34.044,34.044,0,0,0,2681.8,1422.625Z" 
              transform="translate(-2785 -1535) scale(1.1)"
              id={path2}
          />
          <path
              d="M2681.36,1505.957l-.428-69.8c-5.778-2.278-11.305-3.96-15.984-5.488l.46,74.89-3.2.4ZM2578.9,1434.894c.519,23.647,1.138,53.992,1.386,71.063h15.948c-.286-20.891-1.112-58.98-1.5-76.357C2590.313,1431.143,2584.807,1432.739,2578.9,1434.894Z" 
              transform="translate(-2760 -1544) scale(1.1)"
              id={path3}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
        <mask id={mask3} fill='white'>
          <use xlinkHref={'#' + path3} />
        </mask>
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
        {this.props.children}
      </g>
    )
  }
}
