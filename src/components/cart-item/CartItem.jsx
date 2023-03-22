import { useContext } from 'react'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
import './cart-item.styles.scss'
import { ProductContext } from '../../context/product.context'

const CartItem = ({ cartItem }) => {
  const { handleRemoveFromCart } = useContext(ProductContext)
  const { name, quantity, imageUrl, price, id, total } = cartItem
  return (
    <div className="product-container flex">
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>
          <span>{price}.00$</span> x {quantity}
          {!!total && <span className="text-bold text-dark"> {total}.00$</span>}
        </p>
      </div>
      <RemoveIcon onClick={() => handleRemoveFromCart(id)} />
    </div>
  )
}

export default CartItem
