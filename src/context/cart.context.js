import { createContext, useEffect, useState } from 'react'

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

  const heroExistingCartItem = cartItems.find(
    (cartItem) => cartItem.id && productToAdd.id === 0
  )
  if (heroExistingCartItem) {
  }

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

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  total: 0,
  setHeroProduct: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleDeleteFromCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [total, setTotal] = useState(0)



  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setTotal(newCartTotal)
  }, [cartItems])

  const handleAddToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd))

  const handleRemoveFromCart = (cartItemToRemove) =>
    setCartItems(removeCartItem(cartItems, cartItemToRemove))

  const handleDeleteFromCart = (selectedId) =>
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== selectedId))

  const value = {
    cartCount,
    cartItems,
    total,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteFromCart,
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
