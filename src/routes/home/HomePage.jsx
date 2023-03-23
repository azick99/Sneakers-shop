import { useContext } from 'react'
import './home-page.style.scss'
import Button from '../../components/button/Button'
import { ReactComponent as Close } from '../../assets/images/icon-close.svg'
import CartIcon from '../../assets/images/icon-cart-white.svg'
import ImageModal from '../../components/image-modal/ImageModal'
import SwipeButton from '../../components/swipe-btn/SwipeButton'
import { HomePageContext } from '../../context/homePage.context'
import ButtonTooltip from '../../components/button-comment/ButtonTooltip'
import { ProductContext } from '../../context/product.context'
import Counter from '../../components/counter/Counter'

function HomePage() {
  const { isModalOpen, setIsModalOpen, tooltipToggle } =
    useContext(HomePageContext)

  const {
    products,
    handleAddToCart,
    handleRemoveFromCart,
    productCounter,
    setProductCounter,
  } = useContext(ProductContext)
  
  const heroProduct = products[0]
  const addProductToCart = () => {
    handleAddToCart(heroProduct)
  }
  const additonProduct = () => {
    setProductCounter(productCounter + 1)
  }

  const removeProductfromCart = () => {
    if (productCounter > 0) {
      handleRemoveFromCart(heroProduct)
      setProductCounter(productCounter - 1)
    }
  }
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <Close onClick={() => setIsModalOpen(false)} className="close" />
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
                productCounter={productCounter}
                handleAddToCart={additonProduct}
                handleRemoveFromCart={removeProductfromCart}
              />
              {tooltipToggle && <ButtonTooltip />}
              <Button onClick={addProductToCart}>
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
