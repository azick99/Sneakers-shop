import { useContext } from 'react'
import ShoppingIcon from '../../assets/images/icon-cart.svg'
import ShoppingIconDark from '../../assets/images/icon-cart copy.svg'
import { NavigationContext } from '../../context/navigation.context'
import './cart-icon.style.scss'

const CartIcon = (toggle) => {
  const { isCartOpen } = useContext(NavigationContext)
  return (
    <div className="cart-icon">
      {!toggle ? (
        <img src={ShoppingIcon} onClick={isCartOpen} alt="shopping-icon" />
      ) : (
        <img src={ShoppingIconDark} onClick={isCartOpen} alt="shopping-icon" />
      )}
    </div>
  )
}

export default CartIcon
