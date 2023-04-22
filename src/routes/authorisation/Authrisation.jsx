import { useContext } from 'react'
import LoginForm from '../../components/login-form/LoginForm'
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg'
import './authorisation.style.scss'
import RegisterForm from '../../components/register-form/RegisterForm'
import { ToggleContext } from '../../context/toggle.context'

const Authrisation = () => {
  const { toggle, isLoginOpen } = useContext(ToggleContext)

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
