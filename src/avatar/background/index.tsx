import * as React from 'react'
import Background16 from './Background16'
import Background17 from './Background17'
import Background18 from './Background18'
import Background19 from './Background19'
import Background20 from './Background20'
import { BackgroundOption, Selector } from '../../options'
import Blank from '../top/facialHair/Blank'

export default class Background extends React.Component {
  render () {
    return (
      <Selector option={BackgroundOption} defaultOption={Blank}>
        {/* custom piece options heerse */}
       <Background16/>
       <Background17/>
       <Background18/>
       <Background19/>
       <Background20/>
      </Selector>
    )
  }
}
