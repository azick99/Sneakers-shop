import './login-form.style.scss'
import { ReactComponent as EmailIcon } from '../../assets/images/mail.svg'
import { ReactComponent as LockIcon } from '../../assets/images/lock-closed.svg'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../../context/navigation.context'
import { useContext } from 'react'

const LoginForm = () => {
  const {isLoginClose} = useContext(NavigationContext)
  return (
    <div className="form-box login slide-left">
      <h2 className='text-bold'>Login</h2>
      <form action="#">
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
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link>Forgot Password?</Link>
        </div>
        <button type="submit" className='login-btn'>
          Login
        </button>
        <button type="submit" className='login-btn'>
          Login with Google
        </button>
        <div className="login-register">
          <p>
            Don't have an account?{' '}
            <Link href='#' className="register-link" onClick={isLoginClose}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
