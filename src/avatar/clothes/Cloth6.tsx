import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth6 extends React.Component {
  static optionValue = 'Cloth6'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private path5 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')
  private mask5 = uniqueId('react-mask-')

  render () {
    const { path1, path2,path3,path4,path5, mask1, mask2, mask3, mask4, mask5 } = this
    return (
      <g id='Clothing/Cloth6' transform='translate(0.000000, 170.000000)'>
         <defs>
          {/* BASE */}
          <path
          opacity="0.8"
            d="M319.18,332.6c-4.318-23.283-7.419-29.408-10.52-31.441-1.151-.753-30.246-7.168-49.18-13.326-6.666,6.024-15.9,7.875-32.709,7.931-16.813-.056-26.043-1.907-32.709-7.931-18.934,6.159-48.029,12.573-49.18,13.326-3.1,2.033-6.2,8.158-10.52,31.441-.7,3.755-4.147,19.958-4.637,27.25H323.817C323.327,352.56,319.877,336.357,319.18,332.6Z"
            transform="translate(-95 -260)"
            id={path1}
          />
          <rect 
            id={path5} data-name="Rectangle 80" width="12.542" height="50.726"
            transform="translate(125 36)"
            />

           <rect 
            opacity="0.8"
            id={path2}width="260" height="20.726" 
            transform="translate(0 99)"
            />
          
          {/* left collar */}
          <path 
            id={path3}
            d="M169.733,284.951l-16.091,8.58s10.888,17.8,14.392,20.089c0,0,19.816-8.377,23.734-13.709C191.768,299.911,172.934,296.683,169.733,284.951Z"
            transform="translate(-62 -264)" 
          />
          {/* right collar */}
          <path
            d="M191.785,284.951l16.091,8.58s-10.888,17.8-14.392,20.089c0,0-19.816-8.377-23.734-13.709C169.75,299.911,188.584,296.683,191.785,284.951Z"
            transform="translate(-35 -264)"
            id={path4}
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
        <mask id={mask4} fill='white'>
          <use xlinkHref={'#' + path4} />
        </mask>
        <mask id={mask5} fill='white'>
          <use xlinkHref={'#' + path5} />
        </mask>
        <use
          id='Cloth5'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth5'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <use
          id='Cloth5'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
        <use
          id='Cloth5'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path4}
        />
        <Colors maskID={mask4} />

        <use
          id='Cloth5'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path5}
        />
        <Colors maskID={mask5} />
        <circle id="Ellipse_46" data-name="Ellipse 46" cx="2.746" cy="2.746" r="2.746" transform="translate(129 42)" fill="#f8dfe1"/>
          <circle id="Ellipse_47" data-name="Ellipse 47" cx="2.746" cy="2.746" r="2.746" transform="translate(129 58)" fill="#f8dfe1"/>
          <circle id="Ellipse_48" data-name="Ellipse 48" cx="2.746" cy="2.746" r="2.746" transform="translate(129 72)" fill="#f8dfe1"/>
         
          {this.props.children}
      
      </g>
    )
  }
}
