import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Button from '../button/Button'
import './payment-from.style.scss'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useState } from 'react'

const PaymentForm = ({ total }) => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = total
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'guest',
        },
      },
    })
    setIsProcessingPayment(false)
    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
      }
    }
  }

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button disabled={isProcessingPayment}>
        {isProcessingPayment? 'Loading ...': 'Pay now'}
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
