import { useState } from 'react'
import { ReactComponent as Previous } from '../../assets/images/icon-previous.svg'
import { ReactComponent as Next } from '../../assets/images/icon-next.svg'
import './swipe-btn.style.scss'
const SwipeButton = () => {
  return (
    <div className="swipe-buttons">
      <HoverBtn>
        <Previous />
      </HoverBtn>
      <HoverBtn>
        <Next />
      </HoverBtn>
    </div>
  )
}

const HoverBtn = ({ children }) => {
  const [hover, setHover] = useState(false)
  let swipeBtn = 'swipe-btn '
  if (hover) {
    swipeBtn += 'swipe-hover'
  }
  const handleHoverEnter = () => setHover(true)
  const handleHoverLeave = () => setHover(false)

  return (
    <div
      className={swipeBtn}
      onPointerEnter={handleHoverEnter}
      onPointerLeave={handleHoverLeave}
    >
      {children}
    </div>
  )
}

export default SwipeButton
