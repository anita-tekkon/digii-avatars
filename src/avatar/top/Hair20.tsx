import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair20 extends React.Component {
  static optionValue = 'Hair20'
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
             d="M374.13,338.6a146.431,146.431,0,0,0-3.767-25.429,137.832,137.832,0,0,0-10.344-31.6,100.1,100.1,0,0,1-2.609,15.946,28.405,28.405,0,0,0,.438-4.334c.449-11.81-3.382-26.563-10.317-36.134a75.243,75.243,0,0,0-5.374-6.729c3,14.51-3.245,28.574-2.887,23.57,1.238-17.126-6.211-29.686-14.026-34.816,0,0,1.63,15.211-1.021,19.046,0-4.863-1.828-20.641-15.112-25.044a.23.23,0,0,0-.107-.015c1.992,6.3,3.1,26.826.286,27.211-1.356.187-1.287-16.182-1.287-16.182-11.417,8.695-14.045,34.477-16.246,31.252-1.382-2.022,2.925-18.078,2.925-18.078-7.388,7.624-10.827,22.965-12.674,28.083-.514,1.428-2.575,1.957-2.148.072.8-3.527,4.029-11.456,4.1-11.726-6.3,5.663-11.616,17.667-15.561,40.422a178.9,178.9,0,0,0-2.666,24.454c5.316.682,5.587,8.706,3.934,11.97-1.889,3.728,1.935,15.26,1.935,15.26a81.105,81.105,0,0,0,2.856-21.331c.046-4.559,7.125-14.483,6.825-22.645-.727-19.9,17.122-20.695,29-19.053a84.741,84.741,0,0,0,19.67.358c11.677-1.108,29.305.251,28.631,18.733-.3,8.158,6.779,18.086,6.824,22.641a81.113,81.113,0,0,0,2.856,21.335s3.824-11.536,1.935-15.264C368.543,347.312,368.813,339.284,374.13,338.6Z" 
             transform="translate(-220.732 -270.06) scale(1.1)" 
             id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair20' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Combined-Shape' fill='#944F23' xlinkHref={'#' + path2} />
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
