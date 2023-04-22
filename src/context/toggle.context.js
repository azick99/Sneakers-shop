import { createContext, useReducer } from 'react'

import { createActon } from '../utils/reducer/reducer.utils'

export const ToggleContext = createContext({
  toggle: {},
  setToggle: () => {},
  handleMobileMenu: () => {},
  isCartOpen: () => {},
  handleImageModalClose: () => {},
  handleImageModalOpen: () => {},
})

export const TOGGLE_ACTION_TYPES = {
  TOGGLES: 'UI_TOGGLES',
}

const toggleReducer = (toggle, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case TOGGLE_ACTION_TYPES.TOGGLES: {
      return { ...toggle, ...payload }
    }
    default: {
      throw new Error(`Uhandled type ${type} in userReducer`)
    }
  }
}

const TOGGLE_INITAL_STATE = {
  isCartDropdownOpen: false,
  isMobileMenuOpen: false,
  isLoginDropdownOpen: true,
  isImageModalOpen: false,
}

export const ToggleProvider = ({ children }) => {
  const [toggle, dispatch] = useReducer(toggleReducer, TOGGLE_INITAL_STATE)

  const { isCartDropdownOpen, isMobileMenuOpen } = toggle

  const toggleDispatcher = (payloads) =>
    dispatch(createActon(TOGGLE_ACTION_TYPES.TOGGLES, payloads))

  // Dropdown Handlers
  const handleMobileMenu = () => {
    const mobileToggle = {
      ...toggle,
      isMobileMenuOpen: !isMobileMenuOpen,
    }
    toggleDispatcher(mobileToggle)
  }

  const isCartOpen = () => {
    const dropdownToggle = {
      ...toggle,
      isCartDropdownOpen: !isCartDropdownOpen,
    }
    toggleDispatcher(dropdownToggle)
  }

  const isLoginOpen = () => {
    const loginOpen = {
      ...toggle,
      isLoginDropdownOpen: true,
    }
    toggleDispatcher(loginOpen)
  }

  const isLoginClose = () => {
    const loginClose = {
      ...toggle,
      isLoginDropdownOpen: false,
    }
    toggleDispatcher(loginClose)
  }

  const handleImageModalOpen = () => {
    const imageModalOpen = {
      ...toggle,
      isImageModalOpen: true,
    }
    toggleDispatcher(imageModalOpen)
  }

  const handleImageModalClose = () => {
    const imageModalClose = {
      ...toggle,
      isImageModalOpen: false,
    }
    toggleDispatcher(imageModalClose)
  }

  const value = {
    toggle,
    isCartDropdownOpen,
    isMobileMenuOpen,
    isLoginClose,
    isLoginOpen,
    handleMobileMenu,
    handleImageModalOpen,
    handleImageModalClose,
    isCartOpen,
  }

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}
