import { useContext } from 'react'
import LoginForm from '../../components/login-form/LoginForm'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg'
import { NavigationContext } from '../../context/navigation.context'
import './authorisation.style.scss'

const Authrisation = () => {
  const { toggle, isLoginOpen } = useContext(NavigationContext)


  return (
    <div className="auth-wrapper container flex slide-left">
      {!toggle.isLoginOpen && (
        <span className="form-close-icon" onClick={isLoginOpen}>
          <CloseIcon />
        </span>
      )}
      {toggle.isLoginOpen ? <LoginForm /> : <SignUpForm />}
    </div>
  )
}

export default Authrisation
