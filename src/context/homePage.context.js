import { createContext, useState } from 'react'
import { products } from '../data/imageData'

//as actual value you want to access
export const HomePageContext = createContext({
  saleItems: [],
  products: [],
  productImage: {},
  index: 0,
  total: 0,
  productCounter: 0,
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

let nextId = 0

export const HomePageProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [saleItems, setSaleItmes] = useState([])
  const [productCounter, setProductCounter] = useState(0)
  const [tooltipToggle, setTooltipToggle] = useState(false)

  const handleAddToCart = () => {
    if (!!productCounter) {
      setSaleItmes([
        ...saleItems,
        {
          ...productImage,
          id: nextId++,
          count: productImage.count + productCounter,
          total: productImage.total * productCounter,
        },
      ])
    }

    setProductCounter(0)

    if (!productCounter) {
      setTooltipToggle(true)
      setInterval(() => setTooltipToggle(false), 3000)
    }
  }

  const handleIncrementCounter = () => setProductCounter(productCounter + 1)

  const handleDecrementCounter = () => {
    if (productCounter > 0) {
      setProductCounter(productCounter - 1)
    }
  }

  const handleRemoveFromCart = (selectedId) =>
    setSaleItmes(saleItems.filter((s) => s.id !== selectedId))

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
    saleItems,
    index,
    products,
    productImage,
    isModalOpen,
    productCounter,
    handleAddToCart,
    handlePrevClick,
    handleNextClick,
    setIsModalOpen,
    handleProductClick,
    handleRemoveFromCart,
    handleIncrementCounter,
    handleDecrementCounter,
  }
  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
