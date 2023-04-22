import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ReactComponent as SneakersLogo } from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import close from '../../assets/images/icon-close.svg'
import hamburger from '../../assets/images/icon-menu.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import LoginImage from '../../components/login-image/LoginImage'
import './navigation.style.scss'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectCartCount } from '../../store/cart/cart.selector'
import { ToggleContext } from '../../context/toggle.context'

const MobileMenu = ({ isMobileMenuOpen }) => {
  let mobileMenuClass = ' mobile-menu flex slide-left'
  if (!isMobileMenuOpen) {
    mobileMenuClass += ' d-none '
  }
  return (
    <div className={mobileMenuClass}>
      <NavLink to="/collections">Collections</NavLink>
      <NavLink to="/mens">Men</NavLink>
      <NavLink to="/womens">Women</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

const Navigation = () => {
  const { toggle, handleMobileMenu, isCartDropdownOpen } =
    useContext(ToggleContext)
  const currentUser = useSelector(selectCurrentUser)
  const cartCount = useSelector(selectCartCount)

  return (
    <>
      <nav className="navigation flex container">
        <div className="primary-navigation flex">
          <NavLink to="/" className="sneakers">
            <SneakersLogo />
          </NavLink>
          <button className="mobile-nav-toggle" onClick={handleMobileMenu}>
            <img
              src={!toggle.isMobileMenuOpen ? hamburger : close}
              alt="toggle"
            />
          </button>
          <MobileMenu isMobileMenuOpen={toggle.isMobileMenuOpen} />
        </div>
        <div className="secondary-navigation flex">
          {!!cartCount && (
            <span className="cart-counter bg-orange text-white">
              {cartCount}
            </span>
          )}
          <CartIcon toggle={isCartDropdownOpen} />
          {currentUser ? (
            <LoginImage currentUser={currentUser} />
          ) : (
            <NavLink to="/auth">
              <img src={avatar} alt="avatar" className="avatar" />
            </NavLink>
          )}
        </div>
        {isCartDropdownOpen && <CartDropdown />}
      </nav>
      <div
        className={toggle.isMobileMenuOpen ? 'overlay' : undefined}
        onClick={handleMobileMenu}
      ></div>
      <Outlet />
    </>
  )
}

export default Navigation
