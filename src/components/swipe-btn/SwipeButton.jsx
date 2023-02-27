import { useContext, useState } from 'react'
import { ReactComponent as Previous } from '../../assets/images/icon-previous.svg'
import { ReactComponent as Next } from '../../assets/images/icon-next.svg'
import './swipe-btn.style.scss'
import { HomePageContext } from '../../context/homePage.context'
const SwipeButton = () => {
  return (
    <div className="swipe-buttons">
      <HoverBtn prev="prev">
        <Previous />
      </HoverBtn>
      <HoverBtn>
        <Next />
      </HoverBtn>
    </div>
  )
}

const HoverBtn = ({ children, prev }) => {
  const { handlePrevClick, handleNextClick} =
    useContext(HomePageContext)
  const [hover, setHover] = useState(false)
  let swipeBtn = 'swipe-btn '
  if (hover) {
    swipeBtn += 'swipe-hover'
  }
  const handleHoverEnter = () => setHover(true)
  const handleHoverLeave = () => setHover(false)

  return (
    <button
      className={swipeBtn}
      onPointerEnter={handleHoverEnter}
      onPointerLeave={handleHoverLeave}
      onClick={prev ? handlePrevClick : handleNextClick}
    >
      {children}
    </button>
  )
}

export default SwipeButton
