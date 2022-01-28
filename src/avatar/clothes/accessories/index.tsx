import * as React from 'react'
import Blank from '../../top/accessories/Blank'
import BowTie from './BowTie'
import { ClotheAccessoryOption, Selector } from '../../../options'

export default class Clothes extends React.Component {
  render () {
    return (
      <Selector option={ClotheAccessoryOption} defaultOption={Blank}>
          <BowTie/>
      </Selector>
    )
  }
}
