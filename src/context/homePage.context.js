import { createContext, useState } from 'react'
import { products } from '../data/imageData'

//as actual value you want to access
export const HomePageContext = createContext({
  index: 0,
  handlePrevClick: () => {},
  handleNextClick: () => {},
  handleProductClick: () => {},
})

export const HomePageProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const hasPrev = index > 0
  const hasNext = index < products.length - 1

  const handlePrevClick = (e) => {
 
    if (hasPrev) {
      setIndex(index - 1)
    }
    e.stopPropagation()
  }

  const handleNextClick = (e) => {
    if (index === 4) {
      setIndex(0)
    }
    if (hasNext) {
      setIndex(index + 1)
    }
    e.stopPropagation()
  }

  const handleProductClick = (id) => {
    setIndex(id)
  }

  const value = {
    index,
    handlePrevClick,
    handleNextClick,
    handleProductClick,
  }
  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
