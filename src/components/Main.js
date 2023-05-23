import React, { useEffect, useState, useContext } from "react"
import { api } from "../utils/Api"
import Card from "./Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards
}) {
  // const [cards, setCards] = useState([])
  const currentUser = useContext(CurrentUserContext)

  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((cards) => setCards(cards))
  //     .catch((err) => console.log(`Ошибка ${err}`))
  // }, [cards])

  return (
    <main>
      <section className="profile">
        <button className="profile__button-photo" onClick={onEditAvatar}>
          <img className="profile__photo" src={currentUser.avatar} alt="Аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Корректировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__prof">{currentUser.about}</p>
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
              <Card
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
