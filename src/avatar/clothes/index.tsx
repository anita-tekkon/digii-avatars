import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import Cloth4 from './Cloth4'
import Cloth5 from './Cloth5'
import Cloth6 from './Cloth6'
import Cloth7 from './Cloth7'
import Cloth10 from './Cloth10'
import Cloth14 from './Cloth14'
import Cloth575 from './Cloth575'
import Cloth608 from './Cloth608'
import Cloth582 from './Cloth582'
import { ClotheOption, Selector } from '../../options'

export default class Clothes extends React.Component {
  render () {
    return (
      <Selector option={ClotheOption} defaultOption={BlazerShirt}>
        <BlazerShirt />
        <BlazerSweater />
        <CollarSweater />
        <GraphicShirt />
        <Hoodie />
        <Overall />
        <ShirtCrewNeck />
        <ShirtScoopNeck />
        <ShirtVNeck />
        <Cloth4 />
        <Cloth5 />
        <Cloth6 />
        <Cloth7 />
        <Cloth10 />
        <Cloth14 />
        <Cloth575 />
        <Cloth608 />
        <Cloth582 />
      </Selector>
    )
  }
}
