import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth582 extends React.Component {
  static optionValue = 'Cloth582'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g id='Clothing/Cloth582' transform='translate(0.000000, 170.000000)'>
        <defs>
         <path 
         id={path1}
          data-name="Shirt"
          d="M420.344,203.985c-1.415-.972-37.184-10.726-55.777-18.159.027.094.05.194.08.29a18.215,18.215,0,0,1-3.914-9.446c-.02-.2-.025-.376-.045-.569L338.7,196.654,316.709,176.1c-.018.194-.025.374-.045.569a18.226,18.226,0,0,1-3.912,9.446c.027-.1.05-.2.08-.29-18.592,7.428-54.364,17.188-55.779,18.159-3.582,2.458-9.92,25.854-15.4,61.114H435.746C430.264,229.838,423.929,206.441,420.344,203.985Z" 
          transform="translate(-241 -180) scale(1.1)" 
          fill="#f6f6f6"
          />
          </defs>
          
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        
        <use
          id='Cloth582'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
       
        <path 
            data-name="Button-place"
            d="M284.435,187.767,277.92,181.7V255.94h13.142V181.6Z" 
            transform="translate(-181 -170) scale(1.1)" 
            fill="#fff"
          />
           <path 
            data-name="Shirt-Collar"
             d="M298.6,192.93,279.812,176.1c-.018.185-11.163,11.448-13.462,12.666,0,0,11.106,17.459,18.772,16.2C290.821,204.026,298.6,192.93,298.6,192.93Z" 
             transform="translate(-201 -180) scale(1.1)" 
            fill="#fff"
          />
          <path
            d="M281.843,192.93l18.784-16.83c.017.185,11.163,11.448,13.462,12.666,0,0-11.106,17.459-18.772,16.2C289.619,204.026,281.843,192.93,281.843,192.93Z" 
            transform="translate(-174 -180) scale(1.1)"
            fill="#fff"

          />
          <rect data-name="Rectangle 81" width="32.314" height="21.445" 
            transform="translate(162 84) scale(1.1)" fill="#fff"/>
          <rect data-name="Rectangle 82" width="33.936" height="6.007" 
              transform="translate(161 79) scale(1.1)" fill="#fff"/>
        <circle id="Ellipse_49" data-name="Ellipse 49" cx="2.366" cy="2.366" r="2.366" 
        transform="translate(129 42)" fill="#2b2b2b"/>
        <circle id="Ellipse_50" data-name="Ellipse 50" cx="2.366" cy="2.366" r="2.366" 
        transform="translate(129 72)" fill="#2b2b2b"/>
        <circle id="Ellipse_51" data-name="Ellipse 51" cx="2.366" cy="2.366" r="2.366" 
        transform="translate(129 102)" fill="#2b2b2b"/>
        {this.props.children}
      
      </g>
    )
  }
}
