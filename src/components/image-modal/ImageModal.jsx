import { products } from '../../data/imageData'
import SwipeButton from '../swipe-btn/SwipeButton'

import './image-modal.scss'
const ImageModal = (props) => {
  const { productImage, setIndex, index, modalMode, handleModal } = props
  let modalClass = 'image-container grid ' + modalMode
  return (
    <div className={modalClass}>
      <div className="main-image" onClick={handleModal}>
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
              onClick={() => {
                setIndex(product.id)
              }}
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
