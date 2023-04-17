import { TOGGLE_ACTION_TYPES } from './toggle.types'

export const INITAL_STATE = {
  isCartDropdownOpen: false,
  isMobileMenuOpen: false,
  isLoginDropdownOpen: true,
  isImageModalOpen: false,
}

export const toggleReducer = (toggle = INITAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_ACTION_TYPES.TOGGLES: {
      return { ...toggle, ...payload }
    }
    default: {
     return toggle
    }
  }
}

