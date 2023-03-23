import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { ProductContext } from '../../context/product.context'
import './checkout.style.scss'

const Checkout = () => {
  const { cartItems } = useContext(ProductContext)
  return (
    <div className="checkout-container container slide-left">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Total Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total:0</span>
    </div>
  )
}

export default Checkout
