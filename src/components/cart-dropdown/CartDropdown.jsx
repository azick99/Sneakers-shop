import { useContext } from 'react'
import Button from '../button/Button'
import { ReactComponent as RemoveIcon } from '../../assets/images/icon-delete.svg'
import { HomePageContext } from '../../context/homePage.context'
import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { saleItems, handleRemoveFromCart } = useContext(HomePageContext)
  return (
    <div className="cart-dropdown-container scale-up-top">
      <div className="title text-dark text-bold fs-400">Cart</div>
      <div className="cart-content grid ">
        {!saleItems.length ? (
          <p className="empty-mesage">Cart is empty</p>
        ) : (
          <>
            {saleItems.map((saleItem) => {
              const { title, price, id, total, name, image, count } = saleItem
              return (
                <div className="product-container flex" key={id}>
                  <img src={image} alt={name} />
                  <div>
                    <p>{title}</p>
                    <p>
                      <span>{price}.00$</span>
                      {!!count && (
                        <>
                          {' '}
                          x{count}{' '}
                          <span className="text-bold text-dark">
                            {total}.00$
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                  <RemoveIcon onClick={() => handleRemoveFromCart(id)} />
                </div>
              )
            })}
            <Button checkout="checkout-button">Checkout</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDropdown
