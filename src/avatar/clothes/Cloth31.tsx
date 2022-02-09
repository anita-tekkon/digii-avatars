import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth31 extends React.Component {
  static optionValue = 'Cloth31'
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, mask1, path2, mask2 } = this
    return (
      <g
        id='Clothing/Cloth31'
        transform='translate(0.000000, 170.000000)'>
       <path id="Path_3870" data-name="Path 3870"
        d="M2086.423,1000.446h-189.4c-1.27-52.434,28.726-67.063,50.411-74.793,5.091-1.815,9.723-3.25,13.386-4.7.909-.362,1.757-.723,2.538-1.091q.716-.339,1.353-.686c.209-.114.409-.23.6-.345.088-.052.174-.1.26-.159,8.082,5.883,29.24,17.5,53.95.917.956.477,2.027.94,3.193,1.4,1.952.771,4.177,1.539,6.6,2.362C2050.845,930.661,2087.83,942.344,2086.423,1000.446Z" 
        fill="#834a93"
        transform="translate(-1960 -939) scale(1.05)"
      />
        <defs>
          <path
              d="M1947.438,932.562l43.449,75.7h-93.86C1895.757,955.191,1925.753,940.386,1947.438,932.562Z"
              transform="translate(-1959 -949) scale(1.05)"
              id={path1}
          />
          <path
              d="M2207.947,1005.68H2113.12l37.724-77.7C2172.368,935.348,2209.353,947.122,2207.947,1005.68Z"
              transform="translate(-2085 -946) scale(1.05)"
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
       <path id="Path_3872" data-name="Path 3872"
        d="M1997.988,1055.19h-5.7c.832-7.423,2.353-20.208,2.959-20.359C1995.786,1034.695,1997.1,1046.5,1997.988,1055.19Z" 
        transform="translate(-1992.286 -1034.829)" 
        fill="#040505"
      />
       <path id="Path_3874" data-name="Path 3874"
        d="M2237.313,1055.847h5.7c-.833-7.422-2.354-20.208-2.96-20.359C2239.515,1035.352,2238.2,1047.159,2237.313,1055.847Z" 
        transform="translate(-2237.313 -1035.486)" 
        fill="#040505"
      />
        {this.props.children}
      </g>
    )
  }
}
