import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HomePageProvider } from './context/homePage.context'
import { NavigationProvider } from './context/navigation.context'
import { CartProvider } from './context/cart.context'
import { CategoriesProvider } from './context/categories.context'
import './utils/class-styles/class-utils.scss'

const App = () => (
  <CartProvider>
    <CategoriesProvider>
      <HomePageProvider>
        <NavigationProvider>
          <RouterProvider router={router} />
        </NavigationProvider>
      </HomePageProvider>
    </CategoriesProvider>
  </CartProvider>
)

export default App
