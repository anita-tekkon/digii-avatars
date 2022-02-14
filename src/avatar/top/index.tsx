import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'
import ShortDownRight from './ShortDownRight'
import Hair20 from './Hair20'
import Hair21 from './Hair21'
import Hair15 from './Hair15'
import Hair13 from './Hair13'
import Hair10 from './Hair10'
import Hair11 from './Hair11'
import Hair5 from './Hair5'
import Hair6 from './Hair6'
import Hair1 from './Hair1'
import Hair3 from './Hair3'
import Hair08 from './Hair08'
import Hair16 from './Hair16'
import { Selector, TopOption } from '../../options'

export default class Top extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Selector defaultOption={LongHairStraight} option={TopOption}>
        <NoHair>{children}</NoHair>
        <Eyepatch>{children}</Eyepatch>
        <Hat>{children}</Hat>
        <Hijab>{children}</Hijab>
        <Turban>{children}</Turban>
        <WinterHat1>{children}</WinterHat1>
        <WinterHat2>{children}</WinterHat2>
        <WinterHat3>{children}</WinterHat3>
        <WinterHat4>{children}</WinterHat4>
        <LongHairBigHair>{children}</LongHairBigHair>
        <LongHairBob>{children}</LongHairBob>
        <LongHairBun>{children}</LongHairBun>
        <LongHairCurly>{children}</LongHairCurly>
        <LongHairCurvy>{children}</LongHairCurvy>
        <LongHairDreads>{children}</LongHairDreads>
        <LongHairFrida>{children}</LongHairFrida>
        <LongHairFro>{children}</LongHairFro>
        <LongHairFroBand>{children}</LongHairFroBand>
        <LongHairNotTooLong>{children}</LongHairNotTooLong>
        <LongHairShavedSides>{children}</LongHairShavedSides>
        <LongHairMiaWallace>{children}</LongHairMiaWallace>
        <LongHairStraight>{children}</LongHairStraight>
        <LongHairStraight2>{children}</LongHairStraight2>
        <LongHairStraightStrand>{children}</LongHairStraightStrand>
        <ShortHairDreads01>{children}</ShortHairDreads01>
        <ShortHairDreads02>{children}</ShortHairDreads02>
        <ShortHairFrizzle>{children}</ShortHairFrizzle>
        {/*
        XXX: broken, fix it later
        <ShortHairShaggy>{children}</ShortHairShaggy>*/}
        <ShortHairShaggyMullet>{children}</ShortHairShaggyMullet>
        <ShortHairShortCurly>{children}</ShortHairShortCurly>
        <ShortHairShortFlat>{children}</ShortHairShortFlat>
        <ShortHairShortRound>{children}</ShortHairShortRound>
        <ShortHairShortWaved>{children}</ShortHairShortWaved>
        <ShortHairSides>{children}</ShortHairSides>
        <ShortHairTheCaesar>{children}</ShortHairTheCaesar>
        <ShortHairTheCaesarSidePart>{children}</ShortHairTheCaesarSidePart>
        <ShortDownRight>{children}</ShortDownRight>
        <Hair20>{children}</Hair20>
        <Hair21>{children}</Hair21>
        <Hair15>{children}</Hair15>
        <Hair13>{children}</Hair13>
        <Hair10>{children}</Hair10>
        <Hair11>{children}</Hair11>
        <Hair5>{children}</Hair5>
        <Hair6>{children}</Hair6>
        <Hair1>{children}</Hair1>
        <Hair3>{children}</Hair3>
        <Hair08>{children}</Hair08>
        <Hair16>{children}</Hair16>
      </Selector>
    )
  }
}
