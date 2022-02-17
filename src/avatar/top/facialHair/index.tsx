import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import FacialHair2 from './FacialHair2'
import FacialHair3 from './FacialHair3'
import FacialHair4 from './FacialHair4'
import FacialHair6 from './FacialHair6'
import FacialHair7 from './FacialHair7'
import FacialHair8 from './FacialHair8'
import FacialHair9 from './FacialHair9'
import FacialHair11 from './FacialHair11'
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
        <FacialHair3/>
        <FacialHair4/>
        <FacialHair6/>
        <FacialHair7/>
        <FacialHair8/>
        <FacialHair9/>
        <FacialHair11/>
      </Selector>
    )
  }
}
