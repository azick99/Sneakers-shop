import './cart-dropdown.style.scss'
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container scale-up-top">
      <div className="title text-dark text-bold fs-400">Cart</div>
      <div className="cart-content grid ">
        <p className="empty-mesage">Cart is empty</p>
      </div>
    </div>
  )
}

export default CartDropdown
