import { useContext } from 'react'
import Button from '../button/Button'
import CartIcon from '../../assets/images/icon-cart.svg'
import { CartContext } from '../../context/cart.context'
import './product-card.style.scss'

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product
  const addProductToCart = () => {
    handleAddToCart(product)
  }
  return (
    <div className="product-card-container flex">
      <img src={imageUrl} alt={name} className="card-img" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price text-bold">{price}$</span>
      </div>
      <Button onClick={addProductToCart}>
        <img src={CartIcon} alt="cart-icon" />
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
