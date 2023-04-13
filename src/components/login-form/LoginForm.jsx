import './login-form.style.scss'
import EmailIcon from '../../assets/images/mail.svg'
import LockIcon from '../../assets/images/lock-closed.svg'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../../context/navigation.context'
import { useContext, useState } from 'react'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'

const defaultFormFields = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const { isLoginClose } = useContext(NavigationContext)

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormField()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('No user found with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const loginWithGoogle = async () => {
    await signInWithGooglePopup()

  }

  return (
    <div className="form-box slide-left">
      <h2 className="text-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
          autoComplete=""
          label="Email"
          alts="email"
          icons={EmailIcon}
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
          autoComplete=""
          label="Password"
          alts="password"
          icons={LockIcon}
        />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link>Forgot Password?</Link>
        </div>
        <button type="submit" className="login-btn" onClick={handleSubmit}>
          Login
        </button>
        <button
          type="button"
          className="login-with-google-btn"
          onClick={loginWithGoogle}
        >
          Login with Google
        </button>
        <div className="login-register">
          <p>
            Don't have an account?{' '}
            <Link href="#" className="register-link" onClick={isLoginClose}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
