import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth33 extends React.Component {
  static optionValue = 'Cloth33'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, path2, mask1, mask2} = this
    return (
      <g id='Clothing/Cloth33' transform='translate(0.000000, 170.000000)'>
         <path 
          id="Shirt"
          d="M3253.239,1047.218H3148.671l3.295-51.836,94.122.435Z"
          transform="translate(-3068 -939)" 
          fill="#ec5045"
          />
        <defs>
          <path 
            id={path1}
            data-name="Right-Sleeve" 
            d="M3388.114,1014.233h-64.683l.286-75.9a37.111,37.111,0,0,0,5.737.565C3343.478,939.271,3389.595,937.875,3388.114,1014.233Z"
             transform="translate(-3194 -919) scale(1.01)" 
          />
          <path
            data-name="Left-Sleeve" 
            d="M3112,1015.12h-62.976c-1.484-76.487,38.268-73.644,56.277-74.962.859-.426,5.955-.318,6.693-.753Z"
            transform="translate(-3042 -920) scale(1.01)"
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
          id='Cloth33'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth33'
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
