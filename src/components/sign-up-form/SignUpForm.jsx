import './sign-up-form.scss'
import { ReactComponent as EmailIcon } from '../../assets/images/mail.svg'
import { ReactComponent as PersonIcon } from '../../assets/images/person-sharp.svg'
import { ReactComponent as LockIcon } from '../../assets/images/lock-closed.svg'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../../context/navigation.context'
import { useContext } from 'react'

const SignUpForm = () => {
  const {isLoginOpen} = useContext(NavigationContext)
  return (
    <div className="form-box register slide-left">
      <h2 className="text-bold">Registeretion</h2>
      <form action="#">
        <div className="input-box">
          <span className="icon">
            <PersonIcon />
          </span>
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <EmailIcon />
          </span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <LockIcon />
          </span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <LockIcon />
          </span>
          <input type="password" required />
          <label>Confirm password</label>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" className="login-btn">
          Register
        </button>

        <div className="login-register">
          <p>
            Already have an account? {' '}
            <Link href="#" className="login-link" onClick={isLoginOpen}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
