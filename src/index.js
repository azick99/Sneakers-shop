import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'
import App from './App'
import './index.scss'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)
root.render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <App />
      </Provider>
    </Elements>
  </StrictMode>
)
