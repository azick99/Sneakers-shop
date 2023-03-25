import './checkout-item.style.scss'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
import { useContext } from 'react'
import Counter from '../counter/Counter'
import { CartContext } from '../../context/cart.context'

const CheckoutItem = ({ item }) => {
  const { name, quantity, imageUrl, id, price, total } = item
  const { handleDeleteFromCart, handleRemoveFromCart, handleAddToCart } =
    useContext(CartContext)
  const addToCart = () => handleAddToCart(item)
  const removeFromCart = () => handleRemoveFromCart(item)

  return (
    <div className="checkout-item-container flex fs-400">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <Counter
          quantity={quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
      <span className="price">{price}$</span>
      <span className="product-total-price text-bold">{total}$</span>
      <div className="remove-button">
        <RemoveIcon onClick={() => handleDeleteFromCart(id)} />
      </div>
    </div>
  )
}

export default CheckoutItem
