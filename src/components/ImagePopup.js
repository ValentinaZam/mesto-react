import React from "react"
function ImagePopup() {
  return (
    <div className="popup popup_image">
      <div className="popup__image">
        <button
          className="popup__close popup__close-image"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="popup__photo" src="#" alt="" />
        <p className="popup__text"></p>
      </div>
    </div>
  )
}

export default ImagePopup
