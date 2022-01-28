import * as React from 'react'
import CustomTest from './test'
import DevilWings from './DevilWings'
import AngelWings from './WhiteWings'
import { CustomOption, Selector } from '../../options'
import Blank from '../top/facialHair/Blank'

export default class CustomPiece extends React.Component {
  render () {
    console.log('custom piece selected')
    return (
      <Selector option={CustomOption} defaultOption={Blank}>
        {/* custom piece options heerse */}
        <CustomTest/>
        <DevilWings/>
        <AngelWings/>
      </Selector>
    )
  }
}
