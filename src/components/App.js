import "../index.css"
import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"profile"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title={"Новое место"}
          name={"new-mesto"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <template className="template">
          <li className="element element_delete">
            <button className="element__button-delete" type="button" aria-label="Удалить"></button>
            <img className="element__photo" src="#" alt="" />
            <div className="element__mesto">
              <h2 className="element__text"></h2>
              <div>
                <button
                  className="element__button-like"
                  type="button"
                  aria-label="Понравилось"
                ></button>
                <div className="element__number-like">0</div>
              </div>
            </div>
          </li>
        </template>

        {/* <div className="popup popup_profile">
          <div className="popup__container popup__container_profile-edit">
            <button
              className="popup__close popup__close_edit"
              type="button"
              aria-label="Закрыть"
            ></button>
            <form
              className="popup__form popup__form_edit"
              name="form-profile"
              method="get"
              novalidate
            >
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                id="name-input"
                className="popup__input popup__input_type_name"
                type="text"
                name="name"
                placeholder="Введите имя"
                value=""
                required
                minlength="2"
                maxlength="40"
              />
              <span className="popup__input-error name-input-error"></span>
              <input
                id="description-input"
                className="popup__input popup__input_type_prof"
                type="text"
                name="about"
                placeholder="О себе"
                value=""
                required
                minlength="2"
                maxlength="200"
              />
              <span className="popup__input-error description-input-error"></span>
              <button className="popup__submit popup__submit_edit" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_add">
          <div className="popup__container popup__container_image-add">
            <button
              className="popup__close popup__close_add"
              type="button"
              aria-label="Закрыть"
            ></button>
            <form
              className="popup__form popup__form_add"
              name="form-new-mesto"
              method="get"
              novalidate
            >
              <h2 className="popup__title">Новое место</h2>
              <input
                id="mesto-input"
                className="popup__input popup__input_type_mesto"
                type="text"
                name="name"
                placeholder="Название"
                value=""
                required
                minlength="2"
                maxlength="30"
              />
              <span className="popup__input-error mesto-input-error"></span>
              <input
                id="link-input"
                className="popup__input popup__input_type_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                value=""
                required
              />
              <span className="popup__input-error link-input-error"></span>
              <button className="popup__submit popup__submit_add" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div> */}
        <ImagePopup />

        {/* <div className="popup popup_avatar">
          <div className="popup__container popup__container_avatar">
            <button
              className="popup__close popup__close_avatar"
              type="button"
              aria-label="Закрыть"
            ></button>
            <form
              className="popup__form popup__form_avatar"
              name="form-avatar"
              method="get"
              novalidate
            >
              <h2 className="popup__title">Обновить аватар</h2>
              <input
                id="avatar-input"
                className="popup__input popup__input_type_avatar"
                type="url"
                name="avatar"
                placeholder="Аватар"
                value=""
                required
                minlength="2"
                maxlength="200"
              />
              <span className="popup__input-error avatar-input-error"></span>
              <button className="popup__submit popup__submit_avatar" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div> */}

        <div className="popup popup_delete-card">
          <div className="popup__container popup__container_delete">
            <button
              className="popup__close popup__close_add"
              type="button"
              aria-label="Закрыть"
            ></button>
            <form
              className="popup__form popup__form_delete"
              name="form-delete"
              method="get"
              // novalidate
            >
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__submit popup__submit_delete" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
