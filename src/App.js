import "./index.css"
import React from "react"
import headerLogo from "./images/logo/logo_header.svg"

function App() {
  return (
    <body className="body">
      <div className="page">
        <div className="header">
          <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
        </div>

        <main>
          <section className="profile">
            <button className="profile__button-photo">
              <img className="profile__photo" src="#" alt="Фотография Жак Ива Кусто" />
            </button>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__button-edit"
                type="button"
                aria-label="Корректировать"
              ></button>
              <p className="profile__prof">Исследователь океана</p>
            </div>
            <button className="profile__button-add" type="button" aria-label="Добавить"></button>
          </section>

          <section className="elements" aria-label="Главные">
            <ul className="content"></ul>
          </section>
        </main>

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

        <footer>
          <p className="footer">&copy; 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_profile">
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
        </div>
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

        <div className="popup popup_avatar">
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
        </div>

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
              novalidate
            >
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__submit popup__submit_delete" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
