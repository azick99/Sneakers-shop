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

//Add form Home

const addHomeCartItem = (cartItems, productQuantity, productToAdd) => {
  const heroExistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (heroExistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + productQuantity,
            total: (cartItem.quantity + productQuantity) * cartItem.price,
          }
        : cartItem
    )
  }
  if (productQuantity === 0) {
    alert('add to counter')
    return [...cartItems]
  }
  return [
    ...cartItems,
    { ...productToAdd, quantity: productQuantity, total: productToAdd.price },
  ]
}

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  total: 0,
  productQuantity: 0,
  setProductQuantity: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleDeleteFromCart: () => {},
  handleHeroAddToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [productQuantity, setProductQuantity] = useState(0)

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

  const handleHeroAddToCart = (productToAdd) =>
    setCartItems(addHomeCartItem(cartItems, productQuantity, productToAdd))

  const value = {
    cartCount,
    cartItems,
    total,
    productQuantity,
    setProductQuantity,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteFromCart,
    handleHeroAddToCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
