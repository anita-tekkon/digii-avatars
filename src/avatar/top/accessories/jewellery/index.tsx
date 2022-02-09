import * as React from 'react'
import Earring from './earring'
import Earring2 from './Earring2'
import Earring3 from './Earring3'
import Earring4 from './Earring4'
import Earring5 from './Earring5'
import Earring6 from './Earring6'
import Earring7 from './Earring7'
import Earring8 from './Earring8'
import Earring9 from './Earring9'
import Blank from '../Blank'
import { JewelleryOption, Selector } from '../../../../options'

export default class Jewellery extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={JewelleryOption}>
          <Earring/>
          <Earring2/>
          <Earring3/>
          <Earring4/>
          <Earring5/>
          <Earring6/>
          <Earring7/>
          <Earring8/>
          <Earring9/>
      </Selector>
    )
  }
}
