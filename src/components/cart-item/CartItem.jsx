import { useContext } from 'react'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
import { CartContext } from '../../context/cart.context'
import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { handleDeleteFromCart } =
    useContext(CartContext)
  const { name, quantity, imageUrl, price, total, id } = cartItem
  return (
    <div className="product-container flex">
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>
          <span>{price}.00$</span> x {quantity}
          {quantity > 1 && (
            <span className="text-bold text-dark"> {total}.00$</span>
          )}
        </p>
      </div>
      <RemoveIcon onClick={() => handleDeleteFromCart(id)} />
    </div>
  )
}

export default CartItem
