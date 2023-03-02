import { createContext, useState } from 'react'

export const NavigationContext = createContext({
  toggle: {},
  setSetToggle: () => {},
  handleMobileMenu: () => {},
  isCartOpen: () => {},
})


export const NavigationProvider = ({ children }) => {
  const [toggle, setSetToggle] = useState({
    isDropdownOpen: false,
    isMobileMenuOpen: false,
  })


  const handleMobileMenu = () =>
    setSetToggle({
      ...toggle,
      isMobileMenuOpen: !toggle.isMobileMenuOpen,
    })
    
  const isCartOpen = () =>
    setSetToggle({ ...toggle, isDropdownOpen: !toggle.isDropdownOpen })

  const value = {
    toggle,
    handleMobileMenu,
    setSetToggle,
    isCartOpen,
  }
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
