import "../index.css"
import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"
import CurrentUserContext from "../contexts/CurrentUserContext"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    api
      .getInitialUser()
      .then((userInfo) => setCurrentUser(userInfo))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleCardClick(item) {
    setSelectedCard(item)
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            title={"Редактировать профиль"}
            name={"profile"}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id="name-input"
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              placeholder="Введите имя"
              defaultValue=""
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error name-input-error"></span>
            <input
              id="description-input"
              className="popup__input popup__input_type_prof"
              type="text"
              name="about"
              placeholder="О себе"
              defaultValue=""
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error description-input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            title={"Новое место"}
            name={"new-mesto"}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id="mesto-input"
              className="popup__input popup__input_type_mesto"
              type="text"
              name="name"
              placeholder="Название"
              defaultValue=""
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error mesto-input-error"></span>
            <input
              id="link-input"
              className="popup__input popup__input_type_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              defaultValue=""
              required
            />
            <span className="popup__input-error link-input-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={"Обновить аватар"}
            name={"avatar"}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id="avatar-input"
              className="popup__input popup__input_type_avatar"
              type="url"
              name="avatar"
              placeholder="Аватар"
              defaultValue=""
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error avatar-input-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={"Вы уверены"}
            name={"delete"}
            // isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
