import React from "react"

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main>
      <section className="profile">
        <button className="profile__button-photo" onClick={() => onEditAvatar()}>
          <img className="profile__photo" src="#" alt="Фотография Жак Ива Кусто" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="Корректировать"
            onClick={() => onEditProfile()}
          ></button>
          <p className="profile__prof">Исследователь океана</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить"
          onClick={() => onAddPlace()}
        ></button>
      </section>

      <section className="elements" aria-label="Главные">
        <ul className="content"></ul>
      </section>
    </main>
  )
}

export default Main
