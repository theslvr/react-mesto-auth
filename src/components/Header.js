import { NavLink, Route, Switch } from 'react-router-dom'
import { useState } from 'react'

function Header({ setLoggedIn, email, loggedIn, isHamburgerActive, isEmailAndExitHidden, setHamburgerActive, setEmailAndExitHidden, logOut }) {

  const handleClickOnHamburger = () => {
    if (isHamburgerActive) {
      setHamburgerActive(false)
      setEmailAndExitHidden(true)
    } else {
      setHamburgerActive(true)
      setEmailAndExitHidden(false)
    }
  }

  return (
    <header className={`header ${isHamburgerActive ? 'header_active' : ''}`}>
      <div className={`header__inner ${isHamburgerActive ? 'header__inner_active' : ''}`}>
        <div className="logo logo_place_header" />
        {loggedIn && (
          <button
            className={`header__hamburger ${isHamburgerActive ? 'header__hamburger_hidden' : ''} button-hover`}
            type="button"
            onClick={handleClickOnHamburger}
          />
        )}
      </div>
      <div className={`header__nav ${isEmailAndExitHidden && loggedIn ? '' : 'header__nav_visible'}`}>
        <Switch>
          <Route exact path="/">
            <p className="header__email">{email}</p>
            <NavLink onClick={logOut} to="/sign-in" className="header__link header__link_type_exit">
              Выйти
            </NavLink>
          </Route>
          <Route path="/sign-in">
            <NavLink to="/sign-up" className="header__link button-hover">
              Регистрация
            </NavLink>
          </Route>
          <Route path="/sign-up">
            <NavLink to="/sign-in" className="header__link button-hover">
              Войти
            </NavLink>
          </Route>
        </Switch>
      </div>
    </header>
  )
}

export default Header
