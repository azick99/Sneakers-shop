import { createActon } from '../../utils/reducer/reducer.utils'
import { INITAL_STATE } from './toggle.reducer'
import { TOGGLE_ACTION_TYPES } from './toggle.types'

export const toggleDispatcher = (payloads) =>
  createActon(TOGGLE_ACTION_TYPES, payloads)

const toggle = { ...INITAL_STATE }

// Dropdown Handlers
export const handleMobileMenu = () => {
  const mobileToggle = {
    ...toggle,
    isMobileMenuOpen: !INITAL_STATE.isMobileMenuOpen,
  }
  toggleDispatcher(mobileToggle)
}

export const handleDropdownOpen = () => {
  const dropdownToggle = {
    ...toggle,
    isCartDropdownOpen: !INITAL_STATE.isCartDropdownOpen,
  }
  toggleDispatcher(dropdownToggle)
}

export const isLoginOpen = () => {
  const loginOpen = {
    ...toggle,
    isLoginDropdownOpen: true,
  }
  toggleDispatcher(loginOpen)
}

export const isLoginClose = () => {
  const loginClose = {
    ...toggle,
    isLoginDropdownOpen: false,
  }
  toggleDispatcher(loginClose)
}

export const handleImageModalOpen = () => {
  const imageModalOpen = {
    ...toggle,
    isImageModalOpen: true,
  }
  toggleDispatcher(imageModalOpen)
}

export const handleImageModalClose = () => {
  const imageModalClose = {
    ...toggle,
    isImageModalOpen: false,
  }
  toggleDispatcher(imageModalClose)
}
