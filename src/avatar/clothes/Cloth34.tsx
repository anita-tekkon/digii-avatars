import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth34 extends React.Component {
  static optionValue = 'Cloth34'
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')

  render () {
    const { path1, path2, path3, mask1, mask2, mask3 } = this
    return (
      <g
        id='Clothing/Cloth34'
        transform='translate(0.000000, 170.000000)'>
        <defs>
           <path
              d="M506.81,1488.923l-5.886.45-2.687-45.613c.586.238,1.35.182,2.8.578a41.276,41.276,0,0,1,5.217,1.882Z"
              transform="translate(-347 -1486) scale(1.05)"
              id={path1}
          />
          <path
              d="M370.123,1558.247H268.3l.8-27.205,99.241-1.54Z"
              transform="translate(-235 -1682) scale(1.15)"
              id={path2}
          />
          <path
              d="M273.353,1488.831l-5.257.3-1.538-46.415a6.436,6.436,0,0,1,2.7-1.03c1.631-.472,1.806.137,2.361-.086Z"
              transform="translate(-200 -1482) scale(1.05)"
              id={path3}
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
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
        {this.props.children}
      </g>
    )
  }
}
