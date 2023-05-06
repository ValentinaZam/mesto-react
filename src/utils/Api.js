class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _stateResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialUser() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._headers
    }).then((res) => this._stateResponse(res))
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: this._headers
    }).then((res) => this._stateResponse(res))
  }

  getEditUser(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then((res) => this._stateResponse(res))
  }

  getEditAvatar(link) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link.avatar
      })
    }).then((res) => this._stateResponse(res))
  }

  getAddCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then((res) => this._stateResponse(res))
  }

  deleteCards(cardId) {
    return fetch(this._url + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers
    }).then((res) => this._stateResponse(res))
  }

  deleteLike(cardId) {
    return fetch(this._url + "/cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: this._headers
    }).then((res) => this._stateResponse(res))
  }
  addLike(cardId) {
    return fetch(this._url + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: this._headers
    }).then((res) => this._stateResponse(res))
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "b75175b4-0180-44ef-beaa-a76ffe56ff1c",
    "content-type": "application/json"
  }
})
