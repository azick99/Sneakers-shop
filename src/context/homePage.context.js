import { createContext, useState } from 'react'
import { products } from '../data/imageData'

//as actual value you want to access
export const HomePageContext = createContext({
  saleItems: [],
  products: [],
  index: 0,
  productCounter: 0,
  totalCart: 120,
  isModalOpen: Boolean,
  handlePrevClick: () => {},
  handleNextClick: () => {},
  setIsModalOpen: () => {},
  handleProductClick: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleIncrementCounter: () => {},
  handleDecrementCounter: () => {},
})

export const HomePageProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productCounter, setProductCounter] = useState(0)
  const [tooltipToggle, setTooltipToggle] = useState(false)
  const [totalCart, setTotalCart] = useState(120)


  const totalIncrement = productCounter + 1
  const handleIncrementCounter = () => {
    setProductCounter(totalIncrement)
    setTotalCart(totalCart * totalIncrement)
  }

  const handleDecrementCounter = () => {
    if (productCounter > 0) {
      setProductCounter(productCounter - 1)
      setTotalCart(totalCart / productCounter)
    }
  }

  
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

  let productImage = products[index]

  const handleProductClick = (id) => {
    setProductCounter(0)
    setIndex(id)
  }

  const value = {
    tooltipToggle,
    index,
    products,
    productImage,
    isModalOpen,
    productCounter,
    totalCart,
    handlePrevClick,
    handleNextClick,
    setIsModalOpen,
    handleProductClick,
    handleIncrementCounter,
    handleDecrementCounter,
  }
  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
