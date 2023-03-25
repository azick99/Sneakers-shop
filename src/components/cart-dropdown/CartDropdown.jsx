import { useContext } from 'react'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart.context'
import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const checkoutHanlder = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container scale-up-top">
      <div className="title text-dark text-bold fs-400">Cart</div>
      <div className="cart-content grid ">
        {!cartItems.length ? (
          <p className="empty-mesage">Cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />
            })}
            <Button checkout="checkout-button" onClick={checkoutHanlder}>
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDropdown
