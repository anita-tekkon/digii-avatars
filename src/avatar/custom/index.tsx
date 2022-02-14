import * as React from 'react'
import CustomTest from './test'
import DevilWings from './DevilWings'
import AngelWings from './WhiteWings'
import RedWings from './RedWings'
import Wings05 from './Wings05'
import Wings06 from './Wings06'
import Wings07 from './Wings07'
import Wings08 from './Wings08'
import Wings09 from './Wings09'
import Wings10 from './Wings10'
import Wings11 from './Wings11'
import Wings12 from './Wings12'
import Wings13 from './Wings13'
import Wings14 from './Wings14'
import Wings15 from './Wings15'
import { CustomOption, Selector } from '../../options'
import Blank from '../top/facialHair/Blank'

export default class CustomPiece extends React.Component {
  render () {
    return (
      <Selector option={CustomOption} defaultOption={Blank}>
        {/* custom piece options heerse */}
        <CustomTest/>
        <DevilWings/>
        <AngelWings/>
        <RedWings/>
        <Wings05/>
        <Wings06/>
        <Wings07/>
        <Wings08/>
        <Wings09/>
        <Wings10/>
        <Wings11/>
        <Wings12/>
        <Wings13/>
        <Wings14/>
        <Wings15/>
      </Selector>
    )
  }
}
