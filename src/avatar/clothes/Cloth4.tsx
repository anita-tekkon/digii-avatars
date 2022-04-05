import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Cloth4 extends React.Component {
  static optionValue = 'Cloth4'

  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private path3 = uniqueId('react-path-')
  private path4 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render () {
    const { path1, path2, path3, path4, mask1, mask2} = this
    return (
      <g id='Clothing/Cloth4' transform='translate(0.000000, 170.000000)'>
        
        <defs>
        <path 
          id={path1}
          d="M439.258,367.786c-5.537-39.287-14.1-55.533-17.949-58.06-1.7-1.112-45.993-14.819-57.144-21.7l-.285.444c-3.336,22.341-24.039,40.98-24.056,40.94,0,0-18.872-23.97-22.2-46.308l-4.194,6.351a31.318,31.318,0,0,1-6.967,3.678c-18.487,7.061-46.618,15.67-48.026,16.591-3.852,2.526-12.412,18.772-17.949,58.06Z" 
          transform="translate(-209 -266) " 
          fill="#f6f6f6"
          />
          <rect 
            id={path2}
            width="260" height="20.726" 
            transform="translate(24 89)"
            />
         
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
      
        <use
          id='Cloth4'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <use
          id='Cloth4'
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path2}
        />
        <Colors maskID={mask2} />
        <g id="Group_548" data-name="Group 548"
            transform="translate(38 30)"
            >
          <path id="Path_3331" data-name="Path 3331" d="M23.062,412.8c-.184.641-.368,1.283-.557,1.972h.557Z" transform="translate(-15.782 -382.166)" fill="#48afff"/>
          <rect id="Rectangle_30" data-name="Rectangle 30" width="2.135" height="10.633" transform="translate(5.146 64.913)" fill="#48afff"/>
          <path id="Path_3332" data-name="Path 3332" d="M24,427.405V414.453H22.883q-.5,1.939-1.012,4.1v8.857Z" transform="translate(-16.724 -379.712)" fill="#48afff"/>
          <rect id="Rectangle_31" data-name="Rectangle 31" width="2.135" height="12.951" transform="translate(5.146 49.827)" fill="#48afff"/>
          <rect id="Rectangle_32" data-name="Rectangle 32" width="2.135" height="12.951" transform="translate(20.231 49.827)" fill="#48afff"/>
          <path id="Path_3333" data-name="Path 3333" d="M30.073,409.529v-3.347q-1.123.377-2.136.721v2.626Z" transform="translate(-7.707 -392.007)" fill="#48afff"/>
          <rect id="Rectangle_33" data-name="Rectangle 33" width="2.135" height="12.951" transform="translate(20.231 34.742)" fill="#48afff"/>
          <rect id="Rectangle_34" data-name="Rectangle 34" width="2.135" height="10.633" transform="translate(20.231 64.913)" fill="#48afff"/>
          <rect id="Rectangle_35" data-name="Rectangle 35" width="2.135" height="12.951" transform="translate(20.231 19.657)" fill="#48afff"/>
          <rect id="Rectangle_36" data-name="Rectangle 36" width="2.135" height="12.951" transform="translate(35.316 34.742)" fill="#48afff"/>
          <rect id="Rectangle_37" data-name="Rectangle 37" width="2.135" height="12.951" transform="translate(35.316 19.657)" fill="#48afff"/>
          <rect id="Rectangle_38" data-name="Rectangle 38" width="2.135" height="10.633" transform="translate(35.316 64.913)" fill="#48afff"/>
          <rect id="Rectangle_39" data-name="Rectangle 39" width="2.135" height="12.951" transform="translate(35.316 49.827)" fill="#48afff"/>
          <path id="Path_3334" data-name="Path 3334" d="M36.14,412.543v-8.389L34,404.863v7.681Z" transform="translate(1.312 -395.021)" fill="#48afff"/>
          <path id="Path_3335" data-name="Path 3335" d="M42.207,415.27V402.32H40.839l-.768.254v12.7Z" transform="translate(10.33 -397.747)" fill="#48afff"/>
          <rect id="Rectangle_40" data-name="Rectangle 40" width="2.135" height="10.633" transform="translate(50.402 64.913)" fill="#48afff"/>
          <rect id="Rectangle_41" data-name="Rectangle 41" width="2.135" height="12.951" transform="translate(50.402 34.742)" fill="#48afff"/>
          <rect id="Rectangle_42" data-name="Rectangle 42" width="2.135" height="12.951" transform="translate(50.402 49.827)" fill="#48afff"/>
          <rect id="Rectangle_43" data-name="Rectangle 43" width="2.135" height="12.951" transform="translate(50.402 19.657)" fill="#48afff"/>
          <rect id="Rectangle_44" data-name="Rectangle 44" width="2.135" height="10.633" transform="translate(65.487 64.913)" fill="#48afff"/>
          <rect id="Rectangle_45" data-name="Rectangle 45" width="2.135" height="12.951" transform="translate(65.487 34.742)" fill="#48afff"/>
          <rect id="Rectangle_46" data-name="Rectangle 46" width="2.135" height="12.951" transform="translate(65.487 4.572)" fill="#48afff"/>
          <rect id="Rectangle_47" data-name="Rectangle 47" width="2.135" height="12.951" transform="translate(65.487 49.827)" fill="#48afff"/>
          <rect id="Rectangle_48" data-name="Rectangle 48" width="2.135" height="12.951" transform="translate(65.487 19.657)" fill="#48afff"/>
          <rect id="Rectangle_49" data-name="Rectangle 49" width="2.135" height="12.951" transform="translate(80.572 49.827)" fill="#48afff"/>
          <path id="Path_3336" data-name="Path 3336" d="M52.941,403.977c-.472-.2-.676-.3-.736-.331V413.3h2.136v-8.76C53.878,404.345,53.4,404.183,52.941,403.977Z" transform="translate(28.367 -390)" fill="#48afff"/>
          <rect id="Rectangle_50" data-name="Rectangle 50" width="2.135" height="12.951" transform="translate(80.572 34.742)" fill="#48afff"/>
          <rect id="Rectangle_51" data-name="Rectangle 51" width="2.135" height="12.951" transform="translate(80.572 19.657)" fill="#48afff"/>
          <rect id="Rectangle_52" data-name="Rectangle 52" width="2.135" height="10.633" transform="translate(80.572 64.913)" fill="#48afff"/>
          <rect id="Rectangle_53" data-name="Rectangle 53" width="2.135" height="12.951" transform="translate(95.657 49.827)" fill="#48afff"/>
          {/* <rect id="Rectangle_54" data-name="Rectangle 54" width="2.135" height="20.386" transform="translate(95.657 12.222)" fill="#48afff"/> */}
          <rect id="Rectangle_55" data-name="Rectangle 55" width="2.135" height="10.633" transform="translate(95.657 64.913)" fill="#48afff"/>
          <rect id="Rectangle_56" data-name="Rectangle 56" width="2.135" height="12.951" transform="translate(95.657 34.742)" fill="#48afff"/>
          <rect id="Rectangle_57" data-name="Rectangle 57" width="2.135" height="10.633" transform="translate(110.742 64.913)" fill="#48afff"/>
          {/* <rect id="Rectangle_58" data-name="Rectangle 58" width="2.135" height="12.951" transform="translate(110.742 19.657)" fill="#48afff"/> */}
          <rect id="Rectangle_59" data-name="Rectangle 59" width="2.135" height="12.951" transform="translate(110.742 4.572)" fill="#48afff"/>
          <rect id="Rectangle_60" data-name="Rectangle 60" width="2.135" height="12.951" transform="translate(110.742 34.742)" fill="#48afff"/>
          <rect id="Rectangle_61" data-name="Rectangle 61" width="2.135" height="12.951" transform="translate(110.742 49.827)" fill="#48afff"/>
          <rect id="Rectangle_62" data-name="Rectangle 62" width="2.135" height="12.951" transform="translate(125.828 4.572)" fill="#48afff"/>
          <rect id="Rectangle_63" data-name="Rectangle 63" width="2.135" height="12.951" transform="translate(125.828 34.742)" fill="#48afff"/>
          <rect id="Rectangle_64" data-name="Rectangle 64" width="2.135" height="12.951" transform="translate(125.828 49.827)" fill="#48afff"/>
          <rect id="Rectangle_65" data-name="Rectangle 65" width="2.135" height="10.633" transform="translate(125.828 64.913)" fill="#48afff"/>
          <rect id="Rectangle_66" data-name="Rectangle 66" width="2.135" height="12.951" transform="translate(125.828 19.657)" fill="#48afff"/>
          <path id="Path_3337" data-name="Path 3337" d="M72.539,402.918V401.2c-.729-.244-1.442-.485-2.133-.719v2.437Z" transform="translate(55.422 -400.481)" fill="#48afff"/>
          <rect id="Rectangle_67" data-name="Rectangle 67" width="2.135" height="12.951" transform="translate(140.913 49.827)" fill="#48afff"/>
          <rect id="Rectangle_68" data-name="Rectangle 68" width="2.135" height="12.951" transform="translate(140.913 19.657)" fill="#48afff"/>
          <path id="Path_3338" data-name="Path 3338" d="M78.606,414.989V403.22l-2.133-.711v12.48Z" transform="translate(64.441 -397.466)" fill="#48afff"/>
          <rect id="Rectangle_69" data-name="Rectangle 69" width="2.135" height="10.633" transform="translate(140.913 64.913)" fill="#48afff"/>
          <rect id="Rectangle_70" data-name="Rectangle 70" width="2.135" height="12.951" transform="translate(140.913 34.742)" fill="#48afff"/>
          <path id="Path_3339" data-name="Path 3339" d="M84.675,411.99v-6.753q-1.056-.351-2.136-.711v7.464Z" transform="translate(73.458 -394.468)" fill="#48afff"/>
          <rect id="Rectangle_71" data-name="Rectangle 71" width="2.135" height="10.633" transform="translate(155.998 64.913)" fill="#48afff"/>
          <rect id="Rectangle_72" data-name="Rectangle 72" width="2.135" height="12.951" transform="translate(155.998 49.827)" fill="#48afff"/>
          <rect id="Rectangle_73" data-name="Rectangle 73" width="2.135" height="12.951" transform="translate(155.998 19.657)" fill="#48afff"/>
          <rect id="Rectangle_74" data-name="Rectangle 74" width="2.135" height="12.951" transform="translate(155.998 34.742)" fill="#48afff"/>
          <rect id="Rectangle_75" data-name="Rectangle 75" width="2.135" height="10.633" transform="translate(171.083 64.913)" fill="#48afff"/>
          <path id="Path_3340" data-name="Path 3340" d="M90.742,408.965v-1.673c-.654-.224-1.358-.468-2.136-.731v2.4Z" transform="translate(82.476 -391.443)" fill="#48afff"/>
          <rect id="Rectangle_76" data-name="Rectangle 76" width="2.135" height="12.951" transform="translate(171.083 49.827)" fill="#48afff"/>
          <rect id="Rectangle_77" data-name="Rectangle 77" width="2.135" height="12.951" transform="translate(171.083 19.657)" fill="#48afff"/>
          <rect id="Rectangle_78" data-name="Rectangle 78" width="2.135" height="12.951" transform="translate(171.083 34.742)" fill="#48afff"/>
          <path id="Path_3341" data-name="Path 3341" d="M94.673,433.472h2.136V422.527c-.129-.666-.261-1.358-.39-2.007H94.673Z" transform="translate(91.495 -370.693)" fill="#48afff"/>
          <path id="Path_3342" data-name="Path 3342" d="M95.978,423.283c-.44-2.128-.873-4.152-1.305-6.057v6.057Z" transform="translate(91.495 -375.59)" fill="#48afff"/>
          <rect id="Rectangle_79" data-name="Rectangle 79" width="2.135" height="10.633" transform="translate(186.169 64.913)" fill="#48afff"/>
          <path id="Path_3343" data-name="Path 3343" d="M205.969,425.729H20.159c-.119.691-.239,1.425-.358,2.133H210.469c-.119-.709-.241-1.442-.361-2.133h-4.14Z" transform="translate(-19.801 -362.95)" fill="#48afff"/>
          <path id="Path_3344" data-name="Path 3344" d="M191.374,419.662H21.348c-.147.714-.293,1.395-.44,2.133H206.069c-.147-.739-.293-1.42-.44-2.133H191.374Z" transform="translate(-18.155 -371.969)" fill="#48afff"/>
          <path id="Path_3345" data-name="Path 3345" d="M187.2,413.595H22.842c-.186.684-.375,1.4-.564,2.133H200.626c-.189-.729-.378-1.45-.564-2.133H187.2Z" transform="translate(-16.119 -380.987)" fill="#48afff"/>
          <path id="Path_3346" data-name="Path 3346" d="M184.069,407.528H26.058a7.024,7.024,0,0,0-1.673,2.136h167.87a6.986,6.986,0,0,0-1.673-2.136h-6.512Z" transform="translate(-12.987 -390.006)" fill="#48afff"/>
          <path id="Path_3347" data-name="Path 3347" d="M61.353,402.888a10.086,10.086,0,0,1-2.238-1.427H46.785c-2.074.691-4.217,1.407-6.405,2.136H62.818C62.333,403.358,61.848,403.117,61.353,402.888Z" transform="translate(10.789 -399.024)" fill="#48afff"/>
          <path id="Path_3348" data-name="Path 3348" d="M65.629,401.866c-.475.56-.962,1.146-1.467,1.731H93.356c-2.188-.729-4.331-1.445-6.4-2.136H65.935C65.833,401.6,65.728,401.749,65.629,401.866Z" transform="translate(46.141 -399.024)" fill="#48afff"/>
        </g>
        <path 
            id={path3}
            d="M55.168,473.566l-9.961-71.429-7.155,2.008,9.667,69.421Z"
            transform="translate(38 -370) " 
            fill="#000000"
          />
          <path
            d="M78.8,473.566l9.667-69.421-7.155-2.008-9.961,71.429Z"
            transform="translate(100 -370) "
            id={path4}
            fill="#000000"
          />
          <path id="Path_3350" data-name="Path 3350" 
            d="M88.016,420.412l-.95-18.8-17.78,9.073-17.78-9.073-.949,18.8,18.729-9.089Z" 
            transform="translate(51 -434) scale(1.2)" 
            fill="#000000"
          />
          
        {this.props.children}
      </g>
    )
  }
}
