import './checkout-item.style.scss'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
import { useContext } from 'react'
import { ProductContext } from '../../context/product.context'

const CheckoutItem = ({ item }) => {
  const { name, quantity, imageUrl, id, price, total } = item
  const { handleDeleteFromCart, handleRemoveFromCart, handleAddToCart } =
    useContext(ProductContext)

  return (
    <div className="checkout-item-container flex fs-400">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button onClick={() => handleAddToCart(item)}>/</button>
        {quantity}
        <button onClick={() => handleRemoveFromCart(item)}>\</button>
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
