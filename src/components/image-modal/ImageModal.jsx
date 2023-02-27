import { useContext } from 'react'
import { HomePageContext } from '../../context/homePage.context'
import SwipeButton from '../swipe-btn/SwipeButton'

import './image-modal.scss'
const ImageModal = ({ modalMode }) => {
  const { setIsModalOpen,  handleProductClick, productImage, products, index } =
    useContext(HomePageContext)
  let modalClass = 'image-container grid ' + modalMode
  return (
    <div className={modalClass}>
      <div className="main-image" onClick={() => setIsModalOpen(true)}>
        <SwipeButton />
        <img src={productImage.image} alt={productImage.name} />
      </div>
      <div className="thubnail-container flex">
        {products.map((product) => {
          return (
            <div
              className={
                product.id === index
                  ? 'thubnail-image active-div'
                  : 'thubnail-image'
              }
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageModal
