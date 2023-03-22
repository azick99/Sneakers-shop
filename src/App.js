import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HomePageProvider } from './context/homePage.context'
import { NavigationProvider } from './context/navigation.context'
import './utils/class-styles/class-utils.scss'
import { ProductProvider } from './context/product.context'

const App = () => (
  <ProductProvider>
    <HomePageProvider>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </HomePageProvider>
  </ProductProvider>
)

export default App
