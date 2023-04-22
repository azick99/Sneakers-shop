import { useContext } from 'react'
import { HomePageContext } from '../../context/homePage.context'
import { products } from '../../data/imageData'
import SwipeButton from '../swipe-btn/SwipeButton'

import './image-modal.scss'
import { ToggleContext } from '../../context/toggle.context'
const ImageModal = ({ modalMode }) => {
  const { handleProductClick, index } = useContext(HomePageContext)
  const { handleImageModalOpen } = useContext(ToggleContext)
  
  let productImage = products[index]
  let modalClass = 'image-container grid ' + modalMode
  return (
    <div className={modalClass}>
      <div className="main-image" onClick={handleImageModalOpen}>
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
