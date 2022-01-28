import * as React from 'react'
import Hairband from './Hairband'
import Blank from '../accessories/Blank'
import { HairAccessoryOption, Selector } from '../../../options'

export default class HairAccessories extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={HairAccessoryOption}>
          <Hairband/>
      </Selector>
    )
  }
}
