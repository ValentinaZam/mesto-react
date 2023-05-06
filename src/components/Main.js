import React, { useEffect, useState } from "react"
import { api } from "../utils/Api"
import Card from "./Card"

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("")
  const [userDescription, setUserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getInitialUser()
      .then(
        (userInfo) => (
          setUserName(userInfo.name),
          setUserDescription(userInfo.about),
          setUserAvatar(userInfo.avatar)
        )
      )
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])
  // useEffect(() => {
  //   api.getInitialUser().then((userInfo) => setUserDescription(userInfo.about))
  // }, [userDescription])
  // useEffect(() => {
  //   api.getInitialUser().then((userInfo) => setUserAvatar(userInfo.avatar))
  // }, [userDescription])
  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])
  return (
    <main>
      <section className="profile">
        <button className="profile__button-photo" onClick={onEditAvatar}>
          <img className="profile__photo" src={userAvatar} alt="Аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Корректировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__prof">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Главные">
        <ul className="content">
          {cards.map((card) => (
            <li key={card._id}>
              <Card card={card} onCardClick={onCardClick} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
