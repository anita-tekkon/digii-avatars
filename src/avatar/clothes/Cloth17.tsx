import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth17 extends React.Component {
  static optionValue = 'Cloth17'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')

  render () {
    const { path1, path2,path3, path4, mask1, mask2, mask3, mask4} = this
    return (
      <g id='Clothing/Cloth17' transform='translate(0.000000, 170.000000)'>
         <g id="Group_643" data-name="Group 643" transform="translate(35 29) scale(1.1)">
          <path id="Path_3566" data-name="Path 3566" d="M680.342,155c-8.321,8.377-20.552,13.677-34.2,13.677s-25.877-5.3-34.2-13.677c-20.114,6.108-59.624,18.646-54.3,76.169H734.642C739.967,173.645,700.457,161.107,680.342,155Z" transform="translate(-557.158 -154.999)" fill="#fc6a5a"/>
        </g>
        <defs>
         <path 
         id={path4}
          data-name="left jacket"
          d="M609.973,153.055l10.445,78.573H553.735S546.5,164.8,609.973,153.055Z" 
          transform="translate(-576 -141) scale(1.1)" 
          fill="#f6f6f6"
          />
          <path 
            id={path1}
            opacity="0.8"
            data-name="Left collar"
            d="M603.915,153.055l10.445,78.573-28.12-49.673L597.488,164.8l-14.461-6.322A56.108,56.108,0,0,1,603.915,153.055Z" 
             transform="translate(-571 -139) scale(1.1)" 
          />
          <path
            id={path2}
            data-name="right jacket"
            d="M662.93,153.055l-10.443,78.573h66.681S726.4,164.8,662.93,153.055Z" 
            transform="translate(-559 -139) scale(1.1)"
          />
          <path 
            data-name="right collar"
            opacity="0.8"
            id={path3}
            d="M662.93,153.055l-10.443,78.573,28.118-49.673L669.358,164.8l14.461-6.322A56.11,56.11,0,0,0,662.93,153.055Z" 
             transform="translate(-558 -137) scale(1.1)" 
          />
          
          
        </defs>
        <mask id={mask4} fill='white'>
          <use xlinkHref={'#' + path4} />
        </mask>
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
          id='Cloth17'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path4}
        />
        <Colors maskID={mask4} />
        <use
          id='Cloth17'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth17'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <use
          id='Cloth17'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
        
        <path id="Path_3936" data-name="Path 3936"
      
          d="M1420.723,2074.535h-5.239c.765-11.265,2.162-30.671,2.719-30.9C1418.7,2043.428,1419.9,2061.349,1420.723,2074.535Z" 
          transform="translate(-1340 -1966)" fill="#040505"/>
          
          <path id="Path_3937" data-name="Path 3937"
          
          d="M1673.427,2074.536h-4.869l1.658-30.9Z" 
          transform="translate(-1483 -1970)" fill="#040505"/>
        {this.props.children}
      
      </g>
    )
  }
}
