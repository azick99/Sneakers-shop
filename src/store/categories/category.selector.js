import { createSelector } from 'reselect'

// Memoizing pattern

export const selectCategoryReducer = (state) => {
 return state.categories}

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories
  }
)

export const selectCategories = createSelector(
  [selectCategoriesMap],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
  }
)
