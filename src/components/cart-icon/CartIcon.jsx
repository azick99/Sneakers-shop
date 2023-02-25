// import { ReactComponent as ShoppingIcon } from '../../assets/images/icon-cart.svg'
// import { ReactComponent as ShoppingIconDark } from '../../assets/images/icon-cart copy.svg'
import ShoppingIcon from '../../assets/images/icon-cart.svg'
import ShoppingIconDark from '../../assets/images/icon-cart copy.svg'
import './cart-icon.style.scss'

const CartIcon = ({ handleToggle, toggle }) => {
  const isCartOpen = () => {
    return handleToggle({ ...toggle, isDropdownOpen: !toggle.isDropdownOpen })
  }

  return (
    <div className="cart-icon">
      {toggle.isDropdownOpen ? (
        <img src={ShoppingIcon} onClick={isCartOpen} alt="shopping-icon" />
      ) : (
        <img src={ShoppingIconDark} onClick={isCartOpen} alt="shopping-icon" />
      )}
    </div>
  )
}

export default CartIcon
