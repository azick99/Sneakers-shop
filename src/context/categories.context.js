import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

// interacting with firestore
// useEffect(() => {
//   addCollectionAndDocuments('categories', SHOP_DATA)
// }, [])

export const CategoriesContext = createContext({
  categories: [],
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategories(categoriesMap)
    }
    getCategoriesMap()
  }, [])

  const value = {
    categories,
  }
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}
