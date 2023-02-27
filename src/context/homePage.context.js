import { createContext, useState } from 'react'
import { products } from '../data/imageData'

//as actual value you want to access
export const HomePageContext = createContext({
  index: 0,
  productImage: [],
  products: [],
  isModalOpen: Boolean,
  handlePrevClick: () => {},
  handleNextClick: () => {},
  setIsModalOpen: () => {},
  handleProductClick: () => {},
})

export const HomePageProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hasPrev = index > 0
  const hasNext = index < products.length - 1

  const handlePrevClick = (e) => {
    if (hasPrev) {
      setIndex(index - 1)
    }
    e.stopPropagation()
  }
  const handleNextClick = (e) => {
    if (hasNext) {
      setIndex(index + 1)
    }
    e.stopPropagation()
  }

  const handleProductClick = (id) => setIndex(id)

  let productImage = products[index]

  const value = {
    index,
    products,
    productImage,
    isModalOpen,
    handlePrevClick,
    handleNextClick,
    setIsModalOpen,
    handleProductClick,
  }
  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
