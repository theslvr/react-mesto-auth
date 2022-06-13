import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some((i) => i._id === currentUser._id)
  const cardLikeButtonClassName = `elements__like ${isLiked ? 'elements__like_active' : ''}`

  const handleClick = () => onCardClick(card)
  const handleLikeClick = () => onCardLike(card)
  const handleDeleteClick = () => onCardDelete(card)

  return (
    <li className="elements__element">
      <img className="elements__image" src={card.link} onClick={handleClick} alt={card.name} />
      <div className="elements__desc">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-inner">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} />
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
        {isOwn && <button className={`elements__trash`} type="button" onClick={handleDeleteClick} />}
      </div>
    </li>
  )
}

export default Card
