import { createContext, useEffect, useState } from 'react'
import PRODUCTS from '../data/shop-data.json'

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            total: (cartItem.quantity + 1) * cartItem.price,
          }
        : cartItem
    })
  }

  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const ProductContext = createContext({
  prducts: [],
  cartItems: [],
  cartCount: 0,
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  const handleAddToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const handleRemoveFromCart = (selectedId) =>
    setCartItems(cartItems.filter((s) => s.id !== selectedId))

  const value = {
    cartCount,
    products,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
