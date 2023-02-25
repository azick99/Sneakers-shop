import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './navigation.style.scss'
import { ReactComponent as SneakersLogo } from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import close from '../../assets/images/icon-close.svg'
import hamburger from '../../assets/images/icon-menu.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'

const MobileMenu = ({ isMobileMenuOpen }) => {
  let mobileMenuClass = ' mobile-menu flex slide-left'
  if (!isMobileMenuOpen) {
    mobileMenuClass += ' d-none '
  }
  return (
    <div className={mobileMenuClass}>
      <NavLink to="/collaction">Collaction</NavLink>
      <NavLink to="/men">Men</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

const Navigation = () => {
  const [toggle, setSetToggle] = useState({
    isDropdownOpen: false,
    isMobileMenuOpen: false,
  })
  const handleMobileMenu = () =>
    setSetToggle({
      ...toggle,
      isMobileMenuOpen: !toggle.isMobileMenuOpen,
    })
  return (
    <>
      <nav className="navigation flex">
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
          <CartIcon handleToggle={setSetToggle} toggle={toggle} />
          <NavLink to="/auth">
            <img src={avatar} alt="avatar" />
          </NavLink>
        </div>
        {toggle.isDropdownOpen && <CartDropdown />}
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
