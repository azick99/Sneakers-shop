import { createBrowserRouter } from 'react-router-dom'
import About from './about/About'
import Authrisation from './authorisation/Authrisation'
import Category from './category/Category'
import Checkout from './checkout/Checkout'
import Collections from './collaction/Collections'
import Contact from './contact/Contact'
import ErrorPage from './ErrorPage'
import HomePage from './home/HomePage'
import Navigation from './navigation/Navigation'

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
        path: '/collections',
        element: <Collections />,
      },
      { path: '/:title', element: <Category /> },
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
