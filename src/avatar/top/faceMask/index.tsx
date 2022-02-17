import * as React from 'react'

import Blank from '../facialHair/Blank'
import FaceMask01 from './FaceMask01'
import FaceMask02 from './FaceMask02'
import FaceMask03 from './FaceMask03'
import FaceMask04 from './FaceMask04'
import FaceMask05 from './FaceMask05'
import FaceMask06 from './FaceMask06'
import FaceMask07 from './FaceMask07'
import { FaceMaskOption, Selector } from '../../../options'

export default class FaceMask extends React.Component {
  render () {
    return (
      <Selector option={FaceMaskOption} defaultOption={Blank}>
        <Blank />
        <FaceMask01/>
        <FaceMask02/>
        <FaceMask03/>
        <FaceMask04/>
        <FaceMask05/>
        <FaceMask06/>
        <FaceMask07/>
        
      </Selector>
    )
  }
}
