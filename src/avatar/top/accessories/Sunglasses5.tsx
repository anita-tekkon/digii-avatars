import * as React from 'react'
import { uniqueId } from 'lodash'

export default class Sunglasses5 extends React.Component {
  static optionValue = 'Sunglasses5'

  private filter1 = uniqueId('react-filter-')

  render () {
    const { filter1 } = this
    return (
      <g
        id='Top/_Resources/Sunglasses5'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Sunglasses5'
          filter={`url(#${filter1})`}
          transform='translate(18.000000, 9.000000)'>
            <g id="Group_112" data-name="Group 112" transform="translate(-127.967 -640.529)">
            <path id="Path_345" data-name="Path 345" d="M310.092,654.755c-.177-2.967.334-5.877,2.368-7.716,6.086-5.5,15.759-7.263,23.827-6.23A23.965,23.965,0,0,1,350.767,648c3.241,3.5,4.118,8.5,3.628,13.17-.876,8.325-5.746,17.185-14.145,19.479a20.747,20.747,0,0,1-11.9-.695,30.454,30.454,0,0,1-12.662-9.945,27.417,27.417,0,0,1-4.077-7.9A30.43,30.43,0,0,1,310.092,654.755Z" transform="translate(-122.654 0)" fill="#daa95c"/>
            <path id="Path_346" data-name="Path 346" d="M313.286,657.012c-.169-2.827.318-5.6,2.257-7.354,5.8-5.243,15.02-6.923,22.709-5.938a22.841,22.841,0,0,1,13.8,6.851c3.09,3.336,3.926,8.1,3.457,12.552-.835,7.935-5.477,16.378-13.481,18.565a19.773,19.773,0,0,1-11.339-.662,29.026,29.026,0,0,1-12.068-9.478,26.124,26.124,0,0,1-3.885-7.527A29,29,0,0,1,313.286,657.012Z" transform="translate(-124.807 -1.969)" fill="#2f313d"/>
            <path id="Path_347" data-name="Path 347" d="M172.4,654.755c.177-2.967-.334-5.877-2.368-7.716-6.086-5.5-15.759-7.263-23.827-6.23A23.965,23.965,0,0,0,131.722,648c-3.241,3.5-4.118,8.5-3.627,13.17.876,8.325,5.746,17.185,14.145,19.479a20.747,20.747,0,0,0,11.9-.695,30.454,30.454,0,0,0,12.662-9.945,27.415,27.415,0,0,0,4.077-7.9A30.43,30.43,0,0,0,172.4,654.755Z" transform="translate(0 0)" fill="#daa95c"/>
            <path id="Path_348" data-name="Path 348" d="M173.507,657.012c.169-2.827-.318-5.6-2.257-7.354-5.8-5.243-15.02-6.923-22.71-5.938a22.841,22.841,0,0,0-13.8,6.851c-3.09,3.336-3.926,8.1-3.457,12.552.835,7.935,5.477,16.378,13.481,18.565a19.773,19.773,0,0,0,11.339-.662,29.026,29.026,0,0,0,12.068-9.478,26.125,26.125,0,0,0,3.885-7.527A29,29,0,0,0,173.507,657.012Z" transform="translate(-2.152 -1.969)" fill="#2f313d"/>
            <g id="Group_111" data-name="Group 111" transform="translate(171.802 646.345)">
              <path id="Path_349" data-name="Path 349" d="M278.488,665.892a5.654,5.654,0,0,1-4.393-2.082l-.11-.135a4.652,4.652,0,0,0-7.223,0l-.111.135a5.654,5.654,0,0,1-4.393,2.081v-3.619a2.048,2.048,0,0,0,1.592-.754l.111-.135a8.271,8.271,0,0,1,12.825,0l.11.135a2.049,2.049,0,0,0,1.592.754Z" transform="translate(-262.258 -658.349)" fill="#daa95c"/>
            </g>
          </g>
        </g>
      </g>
    )
  }
}
