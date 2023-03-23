import { createBrowserRouter } from 'react-router-dom'
import About from './about/About'
import Authrisation from './authorisation/Authrisation'
import Checkout from './checkout/Checkout'
import Collaction from './collaction/Collaction'
import Contact from './contact/Contact'
import ErrorPage from './ErrorPage'
import HomePage from './home/HomePage'
import Men from './men/Men'
import Navigation from './navigation/Navigation'
import Women from './women/Women'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/collaction',
        element: <Collaction />,
      },
      {
        path: '/men',
        element: <Men />,
      },
      {
        path: '/women',
        element: <Women />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/auth',
        element: <Authrisation />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])
