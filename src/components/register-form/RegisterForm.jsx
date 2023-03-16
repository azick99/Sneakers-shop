import EmailIcon from '../../assets/images/mail.svg'
import PersonIcon from '../../assets/images/person-sharp.svg'
import LockIcon from '../../assets/images/lock-closed.svg'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../../context/navigation.context'
import { useContext, useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'

const defaultFormFields = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const RegisterForm = () => {
  const { isLoginOpen } = useContext(NavigationContext)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { userName, email, password, confirmPassword } = formFields
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('password do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { userName })
      resetFormField()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log(' user creation ancounter an', error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="form-box slide-left">
      <h2 className="text-bold">Registeretion</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          required
          onChange={handleChange}
          name="userName"
          value={userName}
          icons={PersonIcon}
          alts="person"
        />
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
          autoComplete=""
          label="Email"
          icons={EmailIcon}
          alts="email"
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
          autoComplete=""
          label="Password"
          icons={LockIcon}
          alts="password"
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
          autoComplete=""
          label="Confirm password"
          icons={LockIcon}
          alts="confirm password"
        />

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" className="login-btn" onClick={handleSubmit}>
          Register
        </button>

        <div className="login-register">
          <p>
            Already have an account?{' '}
            <Link href="#" className="login-link" onClick={isLoginOpen}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
