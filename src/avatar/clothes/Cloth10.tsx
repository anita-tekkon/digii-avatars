import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth10 extends React.Component {
  static optionValue = 'Cloth10'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')

  render () {
    const { path1, path2,path3, path4, mask1, mask2, mask3, mask4 } = this
    return (
      <g id='Clothing/Cloth10' transform='translate(0.000000, 170.000000)'>
         <path 
          id="Shirt"
          d="M317.632,204.111c-1.481-.972-38.911-10.728-58.366-18.161.031.1.055.193.084.29a17.8,17.8,0,0,1-4.093-9.448c-.021-.193-.029-.376-.047-.569L232.2,196.78l-23.009-20.557c-.018.193-.026.376-.047.569a17.8,17.8,0,0,1-4.093,9.448c.029-.1.052-.193.084-.29-19.457,7.434-56.885,17.19-58.366,18.161-3.748,2.458-10.38,25.856-16.116,61.121H333.748C328.012,229.968,321.38,206.569,317.632,204.111Z" 
          transform="translate(-128 -183) scale(1.12)" 
          fill="#f6f6f6"
          />
        <defs>
          <path 
            data-name="tie"
            id={path1}
            d="M179.436,197.711l-.086-.24,9.834-13.17H164.877l9.834,13.17-.086.24a94.734,94.734,0,0,0-5.049,22.7l-3.048,31.8h21l-3.046-31.8a94.736,94.736,0,0,0-5.046-22.7Z" 
            transform="translate(-65 -169) scale(1.12)" 
          />

          <path 
            id={path4}
            data-name="collar"
            d="M220.186,190.27c-2.406-1.275-8.152-11.94-8.322-13.478-.023-.193-.029-.376-.05-.569L188.863,196.6l-22.952-20.382c-.021.193-.026.376-.05.569-.172,1.538-5.919,12.2-8.324,13.478l19.172,22.1,12.154-14.235,12.154,14.235Z" 
            transform="translate(-79 -185) scale(1.12)" 
            fill="#fff"

          />
          <path
            data-name="left-coat"
            d="M186.809,179.947c-11.54,4.978-30.072,9.837-44.788,14.068,2.69,14.559,8.437,46.922,9.913,65.214h53.7c-.05-.089-.118-.191-.165-.274C191.072,232.245,186.53,209.627,186.809,179.947Z" 
            transform="translate(-108 -176) scale(1.12)"
            id={path2}
          />
          <path 
            data-name="right-coat"
            id={path3}
            d="M191.51,179.947c.279,29.68-4.263,52.3-18.663,79.008-.044.084-.112.185-.162.274h53.7c1.476-18.292,7.222-50.655,9.91-65.214C221.582,189.784,203.05,184.925,191.51,179.947Z" 
            transform="translate(-50 -176) scale(1.12)" 
          />
         
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask4} fill='white'>
          <use xlinkHref={'#' + path4} />
        </mask>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
        <mask id={mask3} fill='white'>
          <use xlinkHref={'#' + path3} />
        </mask>
     
       
        <use
          id='Cloth10'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth10'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path4}
        />
        <use
          id='Cloth10'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <use
          id='Cloth10'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
       
        {/* <Colors maskID={mask4} /> */}
        {/* <path id="collar"
          d="M220.186,190.27c-2.406-1.275-8.152-11.94-8.322-13.478-.023-.193-.029-.376-.05-.569L188.863,196.6l-22.952-20.382c-.021.193-.026.376-.05.569-.172,1.538-5.919,12.2-8.324,13.478l19.172,22.1,12.154-14.235,12.154,14.235Z" 
          transform="translate(-78 -184) scale(1.2)" 
          fill="#fff"
        /> */}
          <rect id="Tie-pin"
            width="13.437" 
            height="4.124" 
            transform="translate(122 98) scale(1.12)" 
            fill="#e9eaea"
          />
        {this.props.children}
      </g>
    )
  }
}
