import './cart-dropdown.style.scss'
import thubnailImage from '../../assets/images/image-product-1.jpg'
import Button from '../button/Button'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container scale-up-top">
      <div className="title text-dark text-bold fs-400">Cart</div>
      <div className="cart-content grid ">
        {/*<p className="empty-mesage">Cart is empty</p>*/}
        <div className="product-container flex">
          <img src={thubnailImage} alt="sneakers" />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>123$ 1323$</p>
          </div>
          <RemoveIcon />
        </div>
        <div className="product-container flex">
          <img src={thubnailImage} alt="sneakers" />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>123$ 1323$</p>
          </div>
          <RemoveIcon />
        </div>
        <Button checkout='checkout-button'>Checkout</Button>
      </div>
    </div>
  )
}

export default CartDropdown
