import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'
import { createActon } from '../utils/reducer/reducer.utils'

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
  console.log(payload)
  switch (type) {
    case TOGGLE_ACTION_TYPES.MOBILE_MENU_TOGGLE: {
      return { ...toggle, isMobileMenuOpen: !payload }
    }
    case TOGGLE_ACTION_TYPES.CART_DROPDOWN_TOGGLE: {
      return { ...toggle, isCartDropdownOpen: !payload }
    }
    case TOGGLE_ACTION_TYPES.LOGIN_OPEN: {
      return { ...toggle, isLoginDropdownOpen: true }
    }
    case TOGGLE_ACTION_TYPES.LOGIN_CLOSE: {
      return { ...toggle, isLoginDropdownOpen: false }
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
  isLoginDropdownOpen: true,
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
    isLoginDropdownOpen,
    isImageModalOpen,
  } = toggle

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITAL_STATE)

  // Dropdown Handlers
  const handleMobileMenu = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.MOBILE_MENU_TOGGLE, isMobileMenuOpen)
    )

  const isCartOpen = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.CART_DROPDOWN_TOGGLE, isCartDropdownOpen)
    )

  const isLoginOpen = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.LOGIN_OPEN, isLoginDropdownOpen)
    )

  const isLoginClose = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.LOGIN_CLOSE, isLoginDropdownOpen)
    )

  const handleImageModalOpen = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.IMAGE_MODAL_OPEN, isImageModalOpen)
    )

  const handleImageModalClose = () =>
    toggleDispatch(
      createActon(TOGGLE_ACTION_TYPES.IMAGE_MODAL_CLOSE, isImageModalOpen)
    )
  // Auth Handlers

  const setCurrentUser = (user) =>
    dispatch(createActon(USER_ACTION_TYPES.SET_CURRENT_USER, user))

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
