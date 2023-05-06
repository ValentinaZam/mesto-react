import React from "react"
function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_image ${card && "popup_opened"}`}>
      <div className="popup__image">
        <button
          className="popup__close popup__close-image"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="popup__photo" src={card} alt="" />
        <p className="popup__text"></p>
      </div>
    </div>
  )
}

export default ImagePopup
