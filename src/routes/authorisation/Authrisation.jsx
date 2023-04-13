import { useContext } from 'react'
import LoginForm from '../../components/login-form/LoginForm'
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg'
import { NavigationContext } from '../../context/navigation.context'
import './authorisation.style.scss'
import RegisterForm from '../../components/register-form/RegisterForm'

const Authrisation = () => {
  const { toggle, isLoginOpen } = useContext(NavigationContext)

  return (
    <div className="auth-wrapper container flex slide-left">
      {!toggle.isLoginDropdownOpen && (
        <span className="form-close-icon" onClick={isLoginOpen}>
          <CloseIcon />
        </span>
      )}
      {toggle.isLoginDropdownOpen ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}

export default Authrisation
