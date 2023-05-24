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
import AddPlacePopup from "./AddPlacePopup"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  function closeAllPopups() {
    const allPopupStates = [
      setIsEditProfilePopupOpen,
      setIsAddPlacePopupOpen,
      setIsEditAvatarPopupOpen
    ]
    allPopupStates.forEach((state) => state(false))
    setSelectedCard(null)
  }

  function addNewCard(data) {
    api
      .getAddCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleUpdateAvatar(link) {
    api
      .setUserAvatar(link)
      .then((item) => {
        setCurrentUser(item)
        closeAllPopups()
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((userInfo) => {
        setCurrentUser(userInfo)
        closeAllPopups()
      })
      .catch((err) => console.log(`Ошибка ${err}`))
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
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={addNewCard}
          />
          <PopupWithForm title={"Вы уверены"} name={"delete"} onClose={closeAllPopups} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
