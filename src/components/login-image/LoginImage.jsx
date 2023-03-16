import { useState } from 'react'
import { logOutUser } from '../../utils/firebase/firebase.utils'
import './login-image.style.scss'

const LoginImage = ({ currentUser, setCurrentUser }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const logOutHandler = async () => {
    await logOutUser()
    setCurrentUser(null)
  }
  if (!currentUser.photoURL) {
    return (
      <span className="log-out" onClick={logOutHandler}>
        Log out
      </span>
    )
  }
  return (
    <>
      <img
        src={currentUser.photoURL}
        alt="avatar"
        className="google-img"
        onClick={() => setIsLogoutOpen(!isLogoutOpen)}
      />
      {isLogoutOpen && (
        <div className="log-out-container scale-up-top">
          <p onClick={logOutHandler}>Log out</p>
          <p>Profile</p>
        </div>
      )}
    </>
  )
}

export default LoginImage
