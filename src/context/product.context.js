import { createContext, useEffect, useState } from 'react'
import PRODUCTS from '../data/shop-data.json'

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )
  //check if quantity is equal 1 if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartitem) => cartitem.id !== cartItemToRemove.id)
  }
  //return back caritems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          total: cartItem.total - cartItem.price,
        }
      : cartItem
  )
}

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            total: (cartItem.quantity + 1) * cartItem.price,
          }
        : cartItem
    )
  }

  //return new array with modified cartItems
  return [
    ...cartItems,
    { ...productToAdd, quantity: 1, total: productToAdd.price },
  ]
}

export const ProductContext = createContext({
  products: [],
  cartItems: [],
  cartCount: 0,
  productCounter: 0,
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleDeleteFromCart: () => {},
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [productCounter, setProductCounter] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  const handleAddToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd))

  const handleRemoveFromCart = (cartItemToRemove) =>
    setCartItems(removeCartItem(cartItems, cartItemToRemove))

  const handleDeleteFromCart = (selectedId) =>
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== selectedId))

  const value = {
    cartCount,
    products,
    cartItems,
    productCounter,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteFromCart,
    setProductCounter,
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
