import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth4 extends React.Component {
  static optionValue = 'Cloth4'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, path2, path3, path4, mask1, mask2} = this
    return (
      <g id='Clothing/Cloth4' transform='translate(0.000000, 170.000000)'>
        
        <defs>
        <path 
          id={path1}
          d="M439.258,367.786c-5.537-39.287-14.1-55.533-17.949-58.06-1.7-1.112-45.993-14.819-57.144-21.7l-.285.444c-3.336,22.341-24.039,40.98-24.056,40.94,0,0-18.872-23.97-22.2-46.308l-4.194,6.351a31.318,31.318,0,0,1-6.967,3.678c-18.487,7.061-46.618,15.67-48.026,16.591-3.852,2.526-12.412,18.772-17.949,58.06Z" 
          transform="translate(-209 -266) " 
          fill="#f6f6f6"
          />
          <rect 
            id={path2}
            width="260" height="20.726" 
            transform="translate(24 89)"
            />
         
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
      
        <use
          id='Cloth4'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth4'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <path 
            id={path3}
            d="M55.168,473.566l-9.961-71.429-7.155,2.008,9.667,69.421Z"
            transform="translate(38 -370) " 
            fill="#000000"
          />
          <path
            d="M78.8,473.566l9.667-69.421-7.155-2.008-9.961,71.429Z"
            transform="translate(100 -370) "
            id={path4}
            fill="#000000"
          />
        {this.props.children}
      </g>
    )
  }
}
