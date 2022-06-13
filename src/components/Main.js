import { useContext } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
  const currentUser = useContext(CurrentUserContext)
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__inner">
          <div className="profile__avatar" style={{ backgroundImage: `url('${currentUser.avatar}')` }}>
            <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__card">
            <div className="profile__user">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className={'elements__inner'}>
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.handleCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
