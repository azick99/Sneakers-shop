import { createContext, useEffect, useState } from 'react'
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
})

export const NavigationProvider = ({ children }) => {
  const [toggle, setToggle] = useState({
    isDropdownOpen: false,
    isMobileMenuOpen: false,
    isLoginOpen: true,
  })
  const [currentUser, setCurrentUser] = useState(null)
  
  // Dropdown Handlers
  const handleMobileMenu = () =>
    setToggle({
      ...toggle,
      isMobileMenuOpen: !toggle.isMobileMenuOpen,
    })

  const isCartOpen = () =>
    setToggle({ ...toggle, isDropdownOpen: !toggle.isDropdownOpen })

  const isLoginOpen = () => setToggle({ ...toggle, isLoginOpen: true })
  const isLoginClose = () => setToggle({ ...toggle, isLoginOpen: false })

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
    setToggle,
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
