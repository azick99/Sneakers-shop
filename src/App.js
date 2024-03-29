import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { router } from './routes/router'
import { CartProvider } from './context/cart.context'
import {
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action'
import './utils/class-styles/class-utils.scss'
import { useDispatch } from 'react-redux'
import { setCategories } from './store/categories/category.action'
import { ToggleProvider } from './context/toggle.context'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const cateogiresArray = await getCategoriesAndDocuments()
      dispatch(setCategories(cateogiresArray))
    }
    getCategoriesMap()
  }, [])

  return (
    <CartProvider>
      <ToggleProvider>
          <RouterProvider router={router} />
      </ToggleProvider>
    </CartProvider>
  )
}
export default App
