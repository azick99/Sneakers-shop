import { CART_ACTION_TYPES } from './cart.types'

const INITAL_STATE = {
  cartItems: [],
  productQuantity: 0,
}

export const cartReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return { ...state, cartItems:payload }
    }
    case CART_ACTION_TYPES.INCREMENT_HOME_COUNTER: {
      return { ...state, productQuantity: payload + 1 }
    }
    case CART_ACTION_TYPES.DECREMENT_HOME_COUNTER: {
      return { ...state, productQuantity: payload - 1 }
    }

    default: {
      return state
    }
  }
}
