import { useContext } from 'react'
import './home-page.style.scss'
import Button from '../../components/button/Button'
import { ReactComponent as Close } from '../../assets/images/icon-close.svg'
import CartIcon from '../../assets/images/icon-cart-white.svg'
import ImageModal from '../../components/image-modal/ImageModal'
import SwipeButton from '../../components/swipe-btn/SwipeButton'
import Counter from '../../components/counter/Counter'
import { CartContext } from '../../context/cart.context'
import heroImg from '../../assets/images/image-product-1.jpg'
import { NavigationContext } from '../../context/navigation.context'

const HeroItem = {
  id: 0,
  name: 'Edition Sneakers',
  imageUrl: heroImg,
  price: 120,
}

function HomePage() {
  const { toggle, handleImageModalClose } = useContext(NavigationContext)
  const { productQuantity, handleHeroAddToCart, setProductQuantity } =
    useContext(CartContext)

  const addToCart = () => setProductQuantity(productQuantity + 1)
  const removeFromCart = () => setProductQuantity(productQuantity - 1)
  return (
    <>
      {toggle.isImageModalOpen && (
        <div className="modal">
          <Close onClick={handleImageModalClose} className="close" />
          <SwipeButton />
          <ImageModal modalMode="modal-mode" />
        </div>
      )}

      <main className="container slide-left">
        <div className="grid-container grid-container--home">
          <ImageModal />
          <div className="mobile-container flow">
            <h1 className="text-orange fs-400  text-bold">
              SNEAKER COMPANY
              <span className="title fs-700 text-dark text-bold d-block ">
                Fall Limited Edition Sneakers
              </span>
            </h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div>
              <h2 className="price fs-500 text-bold text-dark flex ">
                <span> $120.00</span>
                <span className="discount fs-400 text-orange">50%</span>
              </h2>
              <p className="old-price fs-400">$250.00</p>
            </div>
            <div className="add-container flex">
              <Counter
                quantity={productQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />

              <Button onClick={() => handleHeroAddToCart(HeroItem)}>
                <img src={CartIcon} alt="cart-icon" /> Add to cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
