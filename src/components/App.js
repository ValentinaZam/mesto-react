import "../index.css"
import React, { useState, useEffect, useRef } from "react"
import { api } from "../utils/Api"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  function closeAllPopups() {
    const popupAll = [setIsEditProfilePopupOpen, setIsAddPlacePopupOpen, setIsEditAvatarPopupOpen]
    popupAll.forEach((popup) => popup(false))
    setSelectedCard(null)
  }

  function handleUpdateAvatar(link) {
    api
      .setUserAvatar(link)
      .then((item) => setCurrentUser(item))
      .catch((err) => console.log(`Ошибка ${err}`))
    closeAllPopups()
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((userInfo) => setCurrentUser(userInfo))
      .catch((err) => console.log(`Ошибка ${err}`))
    closeAllPopups()
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => setCurrentUser(userInfo))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id)
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleCardDelete(id) {
    api
      .deleteCards(id)
      .then(() => {
        setCards((state) => state.filter((card) => card._id !== id))
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

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
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
            title={"Вы уверены"}
            name={"delete"}
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
