import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CartContext } from '../../context/cart.context'
import './checkout.style.scss'
import PaymentForm from '../../components/payment-form/PaymentForm'

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext)
  return (
    <section className="container slide-left">
      <div className="checkout-container ">
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
        <span className="total">Total:${total}</span>
      </div>
      <PaymentForm total={total}/>
    </section>
  )
}

export default Checkout
