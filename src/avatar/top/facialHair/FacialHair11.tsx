import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class FacialHair11 extends React.Component {
  static optionValue = 'FacialHair11'

  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')

  render () {
    const { mask1, path1, mask2, path2, mask3, path3,} = this
    return (
      <g
        id='Facial-Hair/FacialHair11'
        transform='translate(78.000000, 42.000000)'>
        <defs>
          <path
            d="M58.7,35.8C51.8,43,45,43.4,41.2,42.5s-4.9-7.2-3.4-9c0.8-0.9,1.4-1.8,2-2.8c-1.3,0.4-2.7,0.7-4.1,0.7
              c-1.4,0-2.8-0.3-4.1-0.7c0.6,1,1.3,1.9,2,2.8c1.5,1.8,0.3,8.1-3.4,9c-3.7,0.9-10.6,0.5-17.5-6.7C5.8,28.7,0,22.8,0,22.8
              c0.1,1,0.4,2,0.8,2.9c0.8,2,6.4,10.1,9.5,14.9c3.2,5,9.6,16.7,25.5,16.7c15.9,0,22.5-11.6,25.5-16.7c3.2-5.5,8.6-13,9.5-14.9
              c0.4-0.9,0.7-1.9,0.8-2.9C71.5,22.8,65.6,28.7,58.7,35.8z"
              id={path1}
              transform="translate(20 88)"
            />
          <path
            d="M35.5,4.4c-0.2-2.3-2.8-3.5-5.8-2.1s-8.1,7.9-10.8,8.1c-2.5,0.2-3.8-1.5-3.6-3.2
            c0.1-1.2,1.1-2.1,2.3-2c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.4,1.6,1c-0.1-1.2-1.2-2-2.3-1.9c-2.2,0-3.9,2.4-3.1,5.1s3.2,4.2,8,3.5
            S35.7,8.4,35.5,4.4z"
              id={path2}
              transform="translate(18 93)"
          />
          <path
            d="M36,4.4c0.2-2.3,2.8-3.5,5.8-2.1s8.1,7.9,10.8,8.1c2.5,0.2,3.8-1.5,3.6-3.2
            c-0.1-1.2-1.1-2.1-2.3-2c0,0-0.1,0-0.1,0c-0.6,0.1-1.2,0.4-1.6,1c0.1-1.2,1.2-2,2.3-1.9c2.2,0,3.9,2.4,3.1,5.1s-3.2,4.2-8,3.5
            S35.7,8.4,36,4.4z"
              id={path3}
              transform="translate(20 93)"
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
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
      
        <Colors maskID={mask1} />
        <Colors maskID={mask2} />
        <Colors maskID={mask3} />
        
      </g>
    )
  }
}
