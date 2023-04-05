import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

export const NavigationContext = createContext({
  toggle: {},
  currentUser: null,
  setCurrentUser: () => null,
  setToggle: () => {},
  handleMobileMenu: () => {},
  isCartOpen: () => {},
  handleImageModalClose: () => {},
  handleImageModalOpen: () => {},
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

export const TOGGLE_ACTION_TYPES = {
  CART_DROPDOWN_TOGGLE: 'CART_DROPDOWN_TOGGLE',
  MOBILE_MENU_TOGGLE: 'MOBILE_MENU_TOGGLE',
  LOGIN_OPEN: 'LOGIN_OPEN',
  LOGIN_CLOSE: 'LOGIN_CLOSE',
  IMAGE_MODAL_OPEN: 'IMAGE_MODAL_OPEN',
  IMAGE_MODAL_CLOSE: 'IMAGE_MODAL_CLOSE',
}

const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Uhandled type ${type} in userReducer`)
  }
}

const toggleReducer = (toggle, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_ACTION_TYPES.MOBILE_MENU_TOGGLE: {
      return { ...toggle, isMobileMenuOpen: !payload }
    }
    case TOGGLE_ACTION_TYPES.CART_DROPDOWN_TOGGLE: {
      return { ...toggle, isCartDropdownOpen: !payload }
    }
    case TOGGLE_ACTION_TYPES.LOGIN_OPEN: {
      return { ...toggle, isLoginOpen: true }
    }
    case TOGGLE_ACTION_TYPES.LOGIN_CLOSE: {
      return { ...toggle, isLoginClose: false }
    }
    case TOGGLE_ACTION_TYPES.IMAGE_MODAL_OPEN: {
      return { ...toggle, isImageModalOpen: true }
    }
    case TOGGLE_ACTION_TYPES.IMAGE_MODAL_CLOSE: {
      return {
        ...toggle,
        isImageModalOpen: false,
      }
    }
    default: {
      throw new Error(`Uhandled type ${type} in userReducer`)
    }
  }
}

const INITAL_STATE = { currentUser: null }

const TOGGLE_INITAL_STATE = {
  isCartDropdownOpen: false,
  isMobileMenuOpen: false,
  isLoginDropdowOpen: true,
  isImageModalOpen: false,
}

export const NavigationProvider = ({ children }) => {
  const [toggle, toggleDispatch] = useReducer(
    toggleReducer,
    TOGGLE_INITAL_STATE
  )
  const {
    isCartDropdownOpen,
    isMobileMenuOpen,
    isLoginDropdowOpen,
    isImageModalOpen,
  } = toggle

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

  // Dropdown Handlers
  const handleMobileMenu = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.MOBILE_MENU_TOGGLE,
      payload: isMobileMenuOpen,
    })

  const isCartOpen = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.CART_DROPDOWN_TOGGLE,
      payload: isCartDropdownOpen,
    })

  const isLoginOpen = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.LOGIN_OPEN,
      payload: isLoginDropdowOpen,
    })
  const isLoginClose = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.LOGIN_CLOSE,
      payload: isLoginDropdowOpen,
    })

  const handleImageModalOpen = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.IMAGE_MODAL_OPEN,
      payload: isImageModalOpen,
    })

  const handleImageModalClose = () =>
    toggleDispatch({
      type: TOGGLE_ACTION_TYPES.IMAGE_MODAL_CLOSE,
      payload: isImageModalOpen,
    })
  // Auth Handlers

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    toggle,
    isLoginClose,
    isLoginOpen,
    handleMobileMenu,
    handleImageModalOpen,
    handleImageModalClose,
    isCartOpen,

    currentUser,
    setCurrentUser,
  }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

/*

const userReducer = (state,action) => {
  return{
    currentUser:null{...}
  }
}


*/
