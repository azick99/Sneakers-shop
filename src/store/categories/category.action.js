import { createActon } from '../../utils/reducer/reducer.utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export const setCategories = (catogiriesArray) =>
  createActon(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, catogiriesArray)
