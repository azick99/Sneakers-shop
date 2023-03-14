import { createContext, useState } from 'react'

export const NavigationContext = createContext({
  toggle: {},
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

  
  const value = {
    isLoginClose,
    isLoginOpen,
    toggle,
    handleMobileMenu,
    setToggle,
    isCartOpen,
  }
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
