import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import FacialHair2 from './FacialHair2'
import FacialHair4 from './FacialHair4'
import { FacialHairOption, Selector } from '../../../options'

export default class FacialHair extends React.Component {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={Blank}>
        <Blank />
        <BeardMedium />
        <BeardLight />
        <BeardMajestic />
        <MoustacheFancy />
        <MoustacheMagnum />
        <FacialHair2/>
        <FacialHair4/>
      </Selector>
    )
  }
}
