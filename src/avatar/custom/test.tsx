import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from '../top/facialHair/Colors'

export default class CustomTest extends React.Component {
  static optionValue = 'CustomTest'

  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')
  private mask5 = uniqueId('react-mask-')
  private mask6 = uniqueId('react-mask-')
  private mask7 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private path5 = uniqueId('react-path-')
  private path6 = uniqueId('react-path-')
  private path7 = uniqueId('react-path-')

  render () {
    const { mask1, path1, mask2, path2, path3, path4, path5, path6, path7,
    mask3, mask4, mask5, mask6, mask7 } = this
    return (
      <g
        id='Facial-Hair/Custom-Test'
        transform='translate(188.000000, 48.000000)'>
        <defs>
    <path id={path1} d="M62.659,31.1l1.022-12.353L63.7,18.5l-.2.112L53.336,24.355a9.374,9.374,0,0,1,3.341,2.126c-1.791,2.142-4.291,6.708-2.143,14.141a48.969,48.969,0,0,0,3.056,7.609c2.438,5.139,3.78,7.971-.126,12.84C51.544,68.447,41.021,68.7,40.914,68.7a1.231,1.231,0,0,0-.146.019V20.4a1.969,1.969,0,0,0-.15-.744,12.084,12.084,0,0,1,5.639.218L39,5.989l-.142-.273-.142.273L31.465,19.872a12.16,12.16,0,0,1,6.07-.127,1.944,1.944,0,0,0-.116.653V68.7c-.87-.031-10.8-.542-16.483-7.628-3.907-4.869-2.564-7.7-.126-12.84a48.881,48.881,0,0,0,3.056-7.609c2.149-7.433-.353-12-2.143-14.141a9.342,9.342,0,0,1,3.341-2.126L14.9,18.614l-.2-.112.019.242L15.741,31.1a9.626,9.626,0,0,1,3.713-2.823c1.29,1.447,3.583,5.1,1.749,11.447a46.358,46.358,0,0,1-2.877,7.131c-2.49,5.251-4.641,9.786.5,16.2,6.671,8.313,17.858,8.657,18.591,8.671v118c0,1,.75,3.207,1.674,3.207s1.675-1.955,1.675-2.956V71.7a1.128,1.128,0,0,0,.166.018h.018c.481-.006,11.868-.256,18.621-8.671,5.141-6.41,2.99-10.945.5-16.2A46.358,46.358,0,0,1,57.2,39.722c-1.834-6.351.458-10,1.747-11.447A9.629,9.629,0,0,1,62.659,31.1Z" />
    <path id={path2} d="M15.557,20.439,16.286,30l2.735-2.013Z"  />
    <path id={path3} d="M22.583,35.658s.73,3.924-2.735,10.466-4.742,9.056-2.189,14.491a24.226,24.226,0,0,0,5.017,5.837s-5.017-4.931-5.291-9.762,2.282-8.554,4.012-11.774S23.678,38.073,22.583,35.658Z" />
    <path id={path4} d="M40.736,7.774l-5.745,11.17,4.013-.1Z" />
    <path id={path5} d="M40.934,20.542V183.2s-.365,5.584.456,6.289l.275-168.445Z"  />
    <path id={path6} d="M68.416,20.542l-.547,9.56-3.1-2.315Z" />
    <path id={path7} d="M60.954,28.61s-3.738,2.113-3.191,8.755S65.6,51.654,63.872,58.4,50.739,70.876,44.813,71.178c0,0,16.322-1.007,19.789-13.284a10.963,10.963,0,0,0-.457-6.541c-1.369-3.421-5.664-10.814-5.381-15.9C59.129,28.912,60.954,28.61,60.954,28.61Z" />
  
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
        <mask id={mask6} fill='white'>
          <use xlinkHref={'#' + path6} />
        </mask>
        <mask id={mask7} fill='white'>
          <use xlinkHref={'#' + path7} />
        </mask>
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path4}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path5}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path6}
        />
        <use
          id='Beardness'
          fill='#252E32'
          fillRule='evenodd'
          xlinkHref={'#' + path7}
        />
        <Colors maskID={mask1} />
        <Colors maskID={mask2} />
        <Colors maskID={mask3} />
        <Colors maskID={mask4} />
        <Colors maskID={mask5} />
        <Colors maskID={mask6} />
        <Colors maskID={mask7} />
      </g>
    )
  }
}
