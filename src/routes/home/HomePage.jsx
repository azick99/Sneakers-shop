import React, { useState } from 'react'
import './home-page.style.scss'
import Button from '../../components/button/Button'
import { products } from '../../data/imageData'
import { ReactComponent as Plus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as Minus } from '../../assets/images/icon-minus.svg'
import { ReactComponent as Close } from '../../assets/images/icon-close.svg'
import CartIcon from '../../assets/images/icon-cart-white.svg'
import ImageModal from '../../components/image-modal/ImageModal'
import SwipeButton from '../../components/swipe-btn/SwipeButton'
function HomePage() {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  let productImage = products[index]
  const handleModal = () => setIsModalOpen(!isModalOpen)
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <Close onClick={handleModal} className='close'/>
          <SwipeButton />
          <ImageModal
            index={index}
            setIndex={setIndex}
            productImage={productImage}
            modalMode="modal-mode"
          />
        </div>
      )}
      <main className="container slide-left">
        <div className="grid-container grid-container--home">
          <ImageModal
            index={index}
            setIndex={setIndex}
            productImage={productImage}
            handleModal={handleModal}
          />
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
                <span> ${productImage.price}.00</span>
                <span className="discount fs-400 text-orange">50%</span>
              </h2>
              <p className="old-price fs-400">$250.00</p>
            </div>
            <div className="add-container flex">
              <div className="count-container flex">
                <div>
                  <Minus />
                </div>
                <span className=" count text-bold text-dark">0</span>
                <div>
                  <Plus />
                </div>
              </div>
              <Button>
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
