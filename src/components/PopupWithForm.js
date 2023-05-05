import React from "react"

function PopupWithForm({ title, name, isOpen, onClose }) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_profile-edit">
        <button
          className="popup__close popup__close_edit"
          type="button"
          aria-label="Закрыть"
          onClose={() => onClose()}
        ></button>
        <form
          className="popup__form popup__form_edit"
          name={`form-${name}`}
          method="get"
          //   novalidate
        >
          <h2 className="popup__title">{title}</h2>
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Введите имя"
            // value=""
            // required
            // minlength="2"
            // maxlength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            id="description-input"
            className="popup__input popup__input_type_prof"
            type="text"
            name="about"
            placeholder="О себе"
            // value=""
            // required
            // minlength="2"
            // maxlength="200"
          />
          <span className="popup__input-error description-input-error"></span>
          <button className="popup__submit popup__submit_edit" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
