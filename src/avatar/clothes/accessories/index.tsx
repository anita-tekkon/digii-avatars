import * as React from 'react'
import Blank from '../../top/accessories/Blank'
import BowTie from './BowTie'
import ClothAccessory1 from './ClothAccessory1'
import ClothAccessory3 from './ClothAccessory3'
import ClothAccessory4 from './ClothAccessory4'
import ClothAccessory5 from './ClothAccessory5'
import ClothAccessory6 from './ClothAccessory6'
import ClothAccessory7 from './ClothAccessory7'
import ClothAccessory8 from './ClothAccessory8'
import ClothAccessory9 from './ClothAccessory9'
import ClothAccessory10 from './ClothAccessory10'
import ClothAccessory11 from './ClothAccessory11'
import { ClotheAccessoryOption, Selector } from '../../../options'

export default class Clothes extends React.Component {
  render () {
    return (
      <Selector option={ClotheAccessoryOption} defaultOption={Blank}>
          <BowTie/>
          <ClothAccessory1/>
          <ClothAccessory3/>
          <ClothAccessory4/>
          <ClothAccessory5/>
          <ClothAccessory6/>
          <ClothAccessory7/>
          <ClothAccessory8/>
          <ClothAccessory9/>
          <ClothAccessory10/>
          <ClothAccessory11/>
      </Selector>
    )
  }
}
