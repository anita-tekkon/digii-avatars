import * as React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Hearts from './Hearts'
import Wayfarers from './Wayfarers'
import BlackPrescription from './BlackPrescription'
import Sunglasses1 from './Sunglasses1'
import Sunglasses2 from './Sunglasses2'
import Sunglasses3 from './Sunglasses3'
import Sunglasses5 from './Sunglasses5'
import Sunglasses6 from './Sunglasses6'
import Sunglasses7 from './Sunglasses7'
import Sunglasses8 from './Sunglasses8'
import { AccessoriesOption, Selector } from '../../../options'

export default class Accessories extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={AccessoriesOption}>
        <Blank />
        <Kurt />
        <Prescription01 />
        <Prescription02 />
        <Round />
        <Sunglasses />
        <Wayfarers />
        <Hearts/>
        <BlackPrescription/>
        <Sunglasses1/>
        <Sunglasses2/>
        <Sunglasses3/>
        <Sunglasses5/>
        <Sunglasses6/>
        <Sunglasses7/>
        <Sunglasses8/>
      </Selector>
    )
  }
}
