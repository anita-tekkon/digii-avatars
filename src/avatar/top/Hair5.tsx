import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class Hair5 extends React.Component {
  static optionValue = 'Hair5'
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
          <path id={path2} 
           d="M223.956,64.781c-.422-4.143-.971-12.321-4.323-16.087s-8.868-7.312-13.406-10.029-8.927-5.819-10.552-6.557-6.2-2.154-11.977-4.1c-5.1-1.715-13.452-5.014-19.887-5.014-5.133,0-16.508,2.161-20.113,4.1s-8.434,5.3-11.463,7.04S117.963,46.05,116.094,49.182s-7.2,17.407-7.486,19.5-1.007,7.731-1.225,10.794,2.81,16.16,3.605,18.037.936,5.852,1.874,6.756.419,5.432,1.358,8.844c.427,1.564,1.637,5.06,2.745,8.052,0,0,1.493-1,1.493-1.37,0-6.895-.478-17.192.914-20.366,1.8-4.107,4.07-5.606,5.22-8.177s1.733-6.482,2.166-8.15,14.2-11.286,16.074-11.911,7.981-.051,10.6-.488c3.178-.527,9.243-3.343,12.465-3.208,2.267.1,5.08,2.3,8.762,2.3s9.946-1.568,11.892-1.463a90.03,90.03,0,0,1,16.65,3.446c7.03,2.195,10.38,12.536,10.056,15.149s.934,8.486,2.34,12.774c.956,2.933.941,12.551.941,17.258,0,.115.449,1.37.449,1.37,1.891-8.713,7.427-23.8,8.381-32.027C225.985,80.946,224.507,70.147,223.956,64.781Z" 
           transform="translate(-48 -9) scale(1.08)" 
            />
          
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hair5' mask={`url(#${mask1})`}>
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
