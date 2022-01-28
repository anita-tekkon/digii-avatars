import * as React from 'react'

import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'
import EyeBrow1 from './EyeBrow1'
import EyeBrow2 from './EyeBrow2'
import EyeBrow3 from './EyeBrow3'
import EyeBrow4 from './EyeBrow4'
import EyeBrow5 from './EyeBrow5'
import EyeBrow6 from './EyeBrow6'
import { EyebrowOption, Selector } from '../../../options'

export default class Eyebrow extends React.Component {
  render () {
    return (
      <Selector defaultOption={Default} option={EyebrowOption}>
        <Angry />
        <AngryNatural />
        <Default />
        <DefaultNatural />
        <FlatNatural />
        <RaisedExcited />
        <RaisedExcitedNatural />
        <SadConcerned />
        <SadConcernedNatural />
        <UnibrowNatural />
        <UpDown />
        <UpDownNatural />
        <EyeBrow1 />
        <EyeBrow2 />
        <EyeBrow3 />
        <EyeBrow4 />
        <EyeBrow5 />
        <EyeBrow6 />
      </Selector>
    )
  }
}
