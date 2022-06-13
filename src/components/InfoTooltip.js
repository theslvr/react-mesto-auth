import rejectIcon from '../images/reject.svg'
import successIcon from '../images/success.svg'

function InfoTooltip({ regSuccess, onClose, isOpen, successText, unSuccessText }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_centered">
        <button className="popup__close-button button-hover" type="button" onClick={onClose} />
        <img className="popup__infotooltip-image" src={regSuccess ? successIcon : rejectIcon} alt="Иконка" />
        <h2 className="popup__infotooltip-title">{regSuccess ? successText : unSuccessText}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip
