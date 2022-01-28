import * as React from 'react'
import Earring from './earring'
import Blank from '../Blank'
import { JewelleryOption, Selector } from '../../../../options'

export default class Jewellery extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={JewelleryOption}>
          <Earring/>
      </Selector>
    )
  }
}
