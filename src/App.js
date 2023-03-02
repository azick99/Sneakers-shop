import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HomePageProvider } from './context/homePage.context'
import './utils/class-styles/class-utils.scss'
import { NavigationProvider } from './context/navigation.context'
function App() {
  return (
    <HomePageProvider>
      <NavigationProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </NavigationProvider>
    </HomePageProvider>
  )
}

export default App
