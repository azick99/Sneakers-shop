import { createContext, useReducer } from 'react'
import { createActon } from '../utils/reducer/reducer.utils'

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
    {
      ...productToAdd,
      quantity: productQuantity,
      total: productToAdd.price * productQuantity,
    },
  ]
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  INCREMENT_HOME_COUNTER: 'INCREMENT_HOME_COUNTER',
  DECREMENT_HOME_COUNTER: 'DECREMENT_HOME_COUNTER',
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

const INITAL_STATE = {
  cartItems: [],
  cartCount: 0,
  total: 0,
  productQuantity: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return { ...state, ...payload }
    }
    case CART_ACTION_TYPES.INCREMENT_HOME_COUNTER: {
      return { ...state, productQuantity: payload + 1 }
    }
    case CART_ACTION_TYPES.DECREMENT_HOME_COUNTER: {
      return { ...state, productQuantity: payload - 1 }
    }

    default: {
      throw new Error(`unhandled type of ${type} in cartReducer`)
    }
  }
}

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, total, productQuantity }, dispatch] =
    useReducer(cartReducer, INITAL_STATE)

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    dispatch(
      createActon(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        total: newCartTotal,
        cartCount: newCartCount,
      })
    )
  }

  const handleAddToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const handleRemoveFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const handleDeleteFromCart = (selectedId) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== selectedId
    )
    updateCartItemsReducer(newCartItems)
  }

  const handleHeroAddToCart = (productToAdd) => {
    const newCartItems = addHomeCartItem(
      cartItems,
      productQuantity,
      productToAdd
    )
    updateCartItemsReducer(newCartItems)
  }

  const incrementHomeCounter = () =>
    dispatch(
      createActon(CART_ACTION_TYPES.INCREMENT_HOME_COUNTER, productQuantity)
    )

  const decrementHomeCounter = () =>
    dispatch(
      createActon(CART_ACTION_TYPES.DECREMENT_HOME_COUNTER, productQuantity)
    )

  const value = {
    cartCount,
    cartItems,
    total,
    productQuantity,
    incrementHomeCounter,
    decrementHomeCounter,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteFromCart,
    handleHeroAddToCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
