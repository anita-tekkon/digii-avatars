import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth608 extends React.Component {
  static optionValue = 'Cloth608'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private path5 = uniqueId('react-path-')
  private path6 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private mask3 = uniqueId('react-mask-')
  private mask4 = uniqueId('react-mask-')
  private mask5 = uniqueId('react-mask-')
  private mask6 = uniqueId('react-mask-')

  render () {
    const { path1, path2,path3,path4,path5, path6, mask1, mask2, mask3, mask4, mask5, mask6 } = this
    return (
      <g id='Clothing/Cloth608' transform='translate(0.000000, 170.000000)'>
         <path 
          id="Shirt"
          d="M332.416,69.156l-.027-.019a5.159,5.159,0,0,1-2.377-3.786c-.021-.2-.027-.387-.048-.587L305.24,80.171,280.515,64.764c-.018.2-.027.387-.048.587a5.155,5.155,0,0,1-2.377,3.786l-.029.019c-4.033,2.567-3.359,3.383-12.548,8.018V150.3h79.453V77.173C335.776,72.538,336.449,71.722,332.416,69.156Z" 
          transform="translate(-173 -43)" 
          fill="#f6f6f6"
          />
        <defs>
          <path 
            id={path1}
            data-name="Tie"
            d="M290.264,83.983l-.085-.238,9.789-13.114H276l9.795,13.114-.087.238a94.319,94.319,0,0,0-5.026,22.6l-3.034,31.657h20.686L295.3,106.586A94.067,94.067,0,0,0,290.264,83.983Z" 
            transform="translate(-156 -30)" 
          />
           <path 
            data-name="Shirt-Collar"
             id={path6}
             d="M332.416,69.032l-.027-.018a5,5,0,0,1-2.377-3.679c-.021-.19-.027-.376-.048-.571L305.24,79.737,280.515,64.764c-.018.19-.027.376-.048.571a5,5,0,0,1-2.377,3.679l-.029.018c-4.033,2.494-3.359,3.287-12.548,7.792v33.049L305.24,80.924l39.723,28.949V76.824C335.776,72.319,336.449,71.526,332.416,69.032Z" 
             transform="translate(-173 -43)" 
            fill="#fff"
          />
          <path
            id={path2}
            data-name="Left-coat"
            d="M318.5,66.065c-11.688,7.428-56.612,18.208-58.388,19.409-4.036,2.725-13.008,20.268-18.811,62.691H342.4c-5.385-21.913-20.86-61.955-23.78-82.1Z" 
            transform="translate(-250 -51) scale(1.12)"
          />
          <path 
            data-name="Right-coat"
            id={path3}
            d="M363.823,85.474c-1.777-1.2-46.7-11.982-58.388-19.409h-.119c-2.918,20.145-18.4,60.187-23.78,82.1h101.1C376.833,105.742,367.859,88.2,363.823,85.474Z" 
            transform="translate(-184 -51) scale(1.12)" 
          />
          
          <path
            data-name="left-collar"
            opacity="0.9"
            d="M287.667,66.065c-3.449,2.191-1.608,1.441-9.979,4.319l-13.833,38.609,10.637,9.761-14.444,5.308,15.6,24.1H311.56c-5.385-21.913-20.86-61.955-23.78-82.1Z" 
            transform="translate(-216 -51) scale(1.12)"
            id={path4}
          />
          <path
            data-name="Right-collar"
            opacity="0.9"
            d="M318.6,118.753l10.638-9.761L315.41,70.383c-8.368-2.877-6.53-2.128-9.976-4.318h-.119c-2.918,20.145-18.4,60.187-23.78,82.1h35.914l15.6-24.1Z" 
            transform="translate(-185 -51) scale(1.12)"
            id={path5}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask6} fill='white'>
          <use xlinkHref={'#' + path6} />
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
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path6}
        />
        <use
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <use
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path3}
        />
        <Colors maskID={mask3} />
        <use
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path4}
        />
        <Colors maskID={mask4} />
        <use
          id='Cloth608'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path5}
        />
        <Colors maskID={mask5} />
       
        {this.props.children}
      
      </g>
    )
  }
}
