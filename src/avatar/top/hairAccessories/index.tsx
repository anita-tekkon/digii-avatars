import * as React from 'react'
import Hairband from './Hairband'
import HairAccessory2 from './HairAccessory2'
import HairAccessory5 from './HairAccessory5'
import HairAccessory6 from './HairAccessory6'
import HairAccessory7 from './HairAccessory7'
import HairAccessory8 from './HairAccessory8'
import HairAccessory10 from './HairAccessory10'
import HairAccessory12 from './HairAccessory12'
import HairAccessory13 from './HairAccessory13'
import Blank from '../accessories/Blank'
import { HairAccessoryOption, Selector } from '../../../options'

export default class HairAccessories extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={HairAccessoryOption}>
          <Hairband/>
          <HairAccessory2/>
          <HairAccessory5/>
          <HairAccessory6/>
          <HairAccessory7/>
          <HairAccessory8/>
          <HairAccessory10/>
          <HairAccessory12/>
          <HairAccessory13/>
      </Selector>
    )
  }
}
