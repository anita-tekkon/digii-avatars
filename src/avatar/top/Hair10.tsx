import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair10 extends React.Component {
  static optionValue = 'Hair10'
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
            d="M267.642,258.009a40.115,40.115,0,0,0-5.651-7.849,24.663,24.663,0,0,1,.137,12.7s.884-13.9-13.984-22.63c-4.157-2.444-9.612-3.1-15.572-3.1,0,0,11.912,10.586,13.233,16.323,0,0-4.837-2.941-29.7-17.5,0,0-4.927,7.868,8.087,18.97,0,0-15.146-14.266-35.735-12.647,0,0,14.852,9.006,15.146,14.3,0,0-7.422,1.212-32.5-8.568,0,0-1.689,10,15.587,16.913,0,0-13.527-4.7-31.468,3.676,0,0,18.947,3.539,21.469,7.5a54.129,54.129,0,0,0-24.191,12.13s17.425,0,27.6,13.609c0,0,14.973-12.948,37.342-2.616,0,0,18.309-12.346,45.675-10.547C263.118,288.672,276.906,275.212,267.642,258.009Z" 
            transform="translate(-121 -263) scale(1.05)" 
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair10' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d="M266.02,309.189S264.6,273.971,249.936,254.5c-7.039-9.342-14.133-10.727-39.571-10.883h0c-25.438.156-32.532,1.506-39.567,10.848-14.665,19.463-16.084,54.685-16.084,54.685,5.459.7,5.733,8.94,4.036,12.291-1.936,3.828,1.99,15.67,1.99,15.67a83.1,83.1,0,0,0,2.929-21.9c.051-4.681,7.317-14.876,7.012-23.252-1.036-28.281,34.479-18.99,39.684-17.476v.035c5.2-1.509,40.721-10.8,39.684,17.48-.305,8.376,6.965,18.567,7.012,23.248a83.446,83.446,0,0,0,2.929,21.907s3.93-11.845,1.991-15.673C260.283,318.133,260.561,309.889,266.02,309.189Z" 
              transform="translate(-88 -227) scale(1.05)" 
              id='Shadow'
              fillOpacity='0.6'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(25.000000, 10.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Curly!' fill='#314756' xlinkHref={'#' + path2} />
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
