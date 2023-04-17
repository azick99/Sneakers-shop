import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { toggleReducer } from './toggles/toggle.reducer'
import { categoriesReducer } from './categories/category.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  toggle: toggleReducer,
  categories: categoriesReducer,
})
