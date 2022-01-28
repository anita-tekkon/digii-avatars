import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair15 extends React.Component {
  static optionValue = 'Hair15'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, mask3, path1, path2, path3 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path id={path2} data-name="Path 3482" d="M182.008,23.974c-12.559-4.423-15.521,1.8-19.022,6.451-14.43,19.2-7.782,62.1-7.782,62.1,7.878-1.924,8.5,8.148,6.6,11.923s1.955,15.455,1.955,15.455a82.407,82.407,0,0,0,2.884-21.6c.046-4.612,7.2-14.665,6.895-22.925-.544-14.9,9.174-19.219,19.126-19.79,4.369-.251,10.1,9.135,24.135,12.775,17.252,4.477,35.885-4.878,35.885-4.878a12.827,12.827,0,0,1,.74,6.972,20.131,20.131,0,0,0-.054,7.685c1.866,8.807,5.321,17.237,5.352,20.16a82.248,82.248,0,0,0,2.884,21.6s3.864-11.68,1.955-15.455-1.28-13.847,6.6-11.923c0,0,5.9-19.659,1.631-38.87Z" transform="translate(-82.0 5.0)" />
          <path id={path3} data-name="Path 3483" d="M252.559,62.724c-.012-.058-.019-.12-.035-.177,0,0,4.62-3.656,7.512-12.791,2.672-8.445-4.2-16.967-4.2-16.967-.7,7.955-10.358,9.282-17.233,5.437-8.106-4.531-14.68-15.008-31.285-17.472-43.447-6.451-46.894,11.383-46.894,11.383a109.519,109.519,0,0,0,14.4,32.58c4.234,1.431,10.134,9.278,22.709,12.536,15.02,3.895,31.073-2.684,34.979-4.454C238.415,68.4,245.495,65.388,252.559,62.724Z" transform="translate(-63 -5)" />
  
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair15' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path3} />
              </mask>
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path2} />
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path3} />
              <HairColor maskID={mask2} />
              <HairColor maskID={mask3} />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
