import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { HomePageProvider } from './context/homePage.context'
import './utils/class-styles/class-utils.scss'
function App() {
  return (
    <HomePageProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </HomePageProvider>
  )
}

export default App
