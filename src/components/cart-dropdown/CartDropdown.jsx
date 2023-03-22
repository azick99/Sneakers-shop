import { useContext } from 'react'
import Button from '../button/Button'
import { ProductContext } from '../../context/product.context'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
  const { cartItems } = useContext(ProductContext)
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
            <Button checkout="checkout-button">Checkout</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDropdown
