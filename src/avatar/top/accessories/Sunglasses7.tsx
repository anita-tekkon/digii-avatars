import * as React from 'react'
import { uniqueId } from 'lodash'

export default class Sunglasses7 extends React.Component {
  static optionValue = 'Sunglasses7'

  private filter1 = uniqueId('react-filter-')

  render () {
    const { filter1 } = this
    return (
      <g
        id='Top/_Resources/Sunglasses7'
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
          id='Sunglasses7'
          filter={`url(#${filter1})`}
          transform='translate(16.000000, 1.000000) scale(1.15)'>
            <g id="Group_433" data-name="Group 433" transform="translate(-141.271 -1635.954)">
            <path id="Path_2840" data-name="Path 2840" d="M750.863,1779.029a1.358,1.358,0,0,1,.632.239.492.492,0,0,1,.149.607c-.121.194-.384.228-.572.357-.355.243-.369.748-.41,1.176a4.385,4.385,0,0,1-.321,1.272,1,1,0,0,1-.256.4,1.087,1.087,0,0,1-.452.189q-.694.168-1.4.267a1.11,1.11,0,0,1-.875-.132,1.157,1.157,0,0,1-.262-.946q.04-1.462.079-2.924c.024-.9.421-.888,1.134-.8C749.159,1778.843,750.013,1778.868,750.863,1779.029Z" transform="translate(-518.503 -122.166)" fill="#e0ac1b"/>
            <path id="Path_2841" data-name="Path 2841" d="M158.256,1778.978a1.358,1.358,0,0,0-.635.229.492.492,0,0,0-.159.6c.117.2.381.235.566.367.351.25.356.754.391,1.183a4.379,4.379,0,0,0,.3,1.277,1,1,0,0,0,.25.4,1.087,1.087,0,0,0,.449.2q.691.18,1.4.291a1.109,1.109,0,0,0,.878-.118,1.156,1.156,0,0,0,.278-.942q-.015-1.462-.03-2.925c-.009-.9-.407-.9-1.12-.815C159.963,1778.821,159.109,1778.832,158.256,1778.978Z" transform="translate(-13.813 -122.165)" fill="#e0ac1b"/>
            <path id="Path_2842" data-name="Path 2842" d="M415.736,1763.931a11.206,11.206,0,0,1,5.772-.923,16.148,16.148,0,0,1,5.636,1.684,6.77,6.77,0,0,1,1.686,1.1,1.408,1.408,0,0,1,.438.658,1.521,1.521,0,0,1-.031.674,7.185,7.185,0,0,1-.528,1.56c-.432.129-.844-.22-1.181-.519a9.752,9.752,0,0,0-10.027-1.653c-.723.305-1.405.7-2.108,1.047a3.212,3.212,0,0,1-1.092.375,1.222,1.222,0,0,1-1.055-.365,1.255,1.255,0,0,1-.239-.951C413.14,1765.418,414.741,1764.4,415.736,1763.931Z" transform="translate(-232.561 -108.694)" fill="#a07815"/>
            <path id="Path_2843" data-name="Path 2843" d="M417.984,1759.712a11.207,11.207,0,0,1,5.772-.924,16.147,16.147,0,0,1,5.636,1.684,6.772,6.772,0,0,1,1.686,1.1,1.406,1.406,0,0,1,.438.658,1.521,1.521,0,0,1-.031.674,7.192,7.192,0,0,1-.528,1.56c-.432.129-.844-.22-1.181-.519a9.75,9.75,0,0,0-10.027-1.653c-.723.3-1.405.7-2.108,1.047a3.213,3.213,0,0,1-1.092.376,1.223,1.223,0,0,1-1.055-.365,1.254,1.254,0,0,1-.239-.951C415.388,1761.2,416.988,1760.178,417.984,1759.712Z" transform="translate(-234.484 -105.084)" fill="#e0ac1b"/>
            <g id="Group_431" data-name="Group 431" transform="translate(141.271 1635.954)">
              <circle id="Ellipse_36" data-name="Ellipse 36" cx="18.079" cy="18.079" r="18.079" transform="translate(5.542 6.519)" fill="#a07815"/>
              <circle id="Ellipse_37" data-name="Ellipse 37" cx="18.079" cy="18.079" r="18.079" transform="translate(0 33.406) rotate(-67.5)" fill="#e0ac1b"/>
              <circle id="Ellipse_38" data-name="Ellipse 38" cx="16.411" cy="16.411" r="16.411" transform="matrix(0.423, -0.906, 0.906, 0.423, 1.808, 31.544)" fill="#2b2b2b"/>
              <path id="Path_2844" data-name="Path 2844" d="M237.818,1710.412a16.411,16.411,0,0,1-23.209,22.838,16.411,16.411,0,1,0,23.209-22.838Z" transform="translate(-204.039 -1699.681)"/>
              <path id="Path_2845" data-name="Path 2845" d="M214.81,1720.337a6.459,6.459,0,0,0,.115,3.618,2.507,2.507,0,0,0,2.928,1.58,2.572,2.572,0,0,0,1.469-1.8,9.866,9.866,0,0,0,.205-2.4,21.96,21.96,0,0,1,.743-5.2,6.393,6.393,0,0,1,.9-2.116c.692-.959,1.8-1.537,2.578-2.424a.914.914,0,0,0,.251-.446c.227-1.507-2.748-.3-3.191-.024a15.794,15.794,0,0,0-2.822,2.258A13.423,13.423,0,0,0,214.81,1720.337Z" transform="translate(-204.039 -1699.68)" fill="#fff" opacity="0.2"/>
            </g>
            <g id="Group_432" data-name="Group 432" transform="translate(190.85 1638.363)">
              <circle id="Ellipse_39" data-name="Ellipse 39" cx="18.079" cy="18.079" r="18.079" transform="translate(3.134 4.111)" fill="#a07815"/>
              <circle id="Ellipse_40" data-name="Ellipse 40" cx="18.079" cy="18.079" r="18.079" transform="translate(0.056 35.569) rotate(-79.157)" fill="#e0ac1b"/>
              <circle id="Ellipse_41" data-name="Ellipse 41" cx="16.411" cy="16.411" r="16.411" transform="translate(0 30.627) rotate(-68.929)" fill="#2b2b2b"/>
              <path id="Path_2846" data-name="Path 2846" d="M565.1,1710.412a16.411,16.411,0,0,1-23.208,22.838,16.411,16.411,0,1,0,23.208-22.838Z" transform="translate(-533.727 -1702.089)"/>
              <path id="Path_2847" data-name="Path 2847" d="M542.09,1720.337a6.459,6.459,0,0,0,.115,3.618,2.507,2.507,0,0,0,2.928,1.58,2.571,2.571,0,0,0,1.469-1.8,9.861,9.861,0,0,0,.205-2.4,21.959,21.959,0,0,1,.743-5.2,6.39,6.39,0,0,1,.9-2.116c.691-.959,1.8-1.537,2.577-2.424a.913.913,0,0,0,.251-.446c.227-1.507-2.748-.3-3.191-.024a15.785,15.785,0,0,0-2.822,2.258A13.423,13.423,0,0,0,542.09,1720.337Z" transform="translate(-533.727 -1702.088)" fill="#fff" opacity="0.2"/>
            </g>
            <path id="Path_2848" data-name="Path 2848" d="M430.759,1764.067a2.022,2.022,0,0,0,.661-.23,12.246,12.246,0,0,1,5.323-1.171.733.733,0,0,0,.372-.06.244.244,0,0,0,.114-.321.346.346,0,0,0-.244-.12,12.164,12.164,0,0,0-3.674.1,9.439,9.439,0,0,0-2.651.678c-.257.112-.517.2-.568.507A.567.567,0,0,0,430.759,1764.067Z" transform="translate(-247.187 -107.93)" fill="#fff" opacity="0.37"/>
          </g>
        </g>
      </g>
    )
  }
}
