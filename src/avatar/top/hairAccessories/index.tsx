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
import HairAccessory14 from './HairAccessory14'
import HairAccessory15 from './HairAccessory15'
import HairAccessory16 from './HairAccessory16'
import HairAccessory17 from './HairAccessory17'
import HairAccessory18 from './HairAccessory18'
import HairAccessory19 from './HairAccessory19'
import HairAccessory20 from './HairAccessory20'
import HairAccessory21 from './HairAccessory21'
import HairAccessory22 from './HairAccessory22'
import HairAccessory23 from './HairAccessory23'
import HairAccessory24 from './HairAccessory24'
import HairAccessory25 from './HairAccessory25'
import HairAccessory26 from './HairAccessory26'
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
          <HairAccessory14/>
          <HairAccessory15/>
          <HairAccessory16/>
          <HairAccessory17/>
          <HairAccessory18/>
          <HairAccessory19/>
          <HairAccessory20/>
          <HairAccessory21/>
          <HairAccessory22/>
          <HairAccessory23/>
          <HairAccessory24/>
          <HairAccessory25/>
          <HairAccessory26/>
      </Selector>
    )
  }
}
