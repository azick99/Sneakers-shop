import { createActon } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'

export const incrementHomeCounter = (productQuantity) =>
  createActon(CART_ACTION_TYPES.INCREMENT_HOME_COUNTER, productQuantity)

export const decrementHomeCounter = (productQuantity) =>
  createActon(CART_ACTION_TYPES.DECREMENT_HOME_COUNTER, productQuantity)

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

export const handleAddToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createActon(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const handleRemoveFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return createActon(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const handleDeleteFromCart = (cartItems, selectedId) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== selectedId
  )
  return createActon(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const handleHeroAddToCart = (cartItems, productQuantity, productToAdd) => {
  const newCartItems = addHomeCartItem(cartItems, productQuantity, productToAdd)
  return createActon(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
