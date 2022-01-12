import * as React from 'react'
import CustomTest from './test'
import { CustomOption, Selector } from '../../options'

export default class CustomPiece extends React.Component {
  render () {
    console.log('custom piece selected')
    return (
      <Selector option={CustomOption} defaultOption={CustomTest}>
        {/* custom piece options heerse */}
        <CustomTest/>
      </Selector>
    )
  }
}
