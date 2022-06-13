import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register({ onRegister, renderLoading }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => setEmail(e.target.value)

  const handleChangePassword = (e) => setPassword(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()
    onRegister(email, password)
  }

  return (
    <div className="entry">
      <h3 className="entry__title">Регистрация</h3>
      <form className="entry__form" onSubmit={handleSubmit}>
        <input
          className="entry__form-input"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          required
        />
        <input
          className="entry__form-input"
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={handleChangePassword}
          value={password}
          required
        />
        <button className="entry__submit-button button-hover" type="submit">
          {renderLoading ? 'Отправка данных...' : 'Зарегистрироваться'}
        </button>
      </form>
      <p className="entry__footer">
        Уже зарегистрированы?{' '}
        <Link to="/sign-in" className="entry__footer-link button-hover">
          Войти
        </Link>
      </p>
    </div>
  )
}

export default Register
