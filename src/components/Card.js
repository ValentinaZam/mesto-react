import React from "react"

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }
  return (
    <div className="element element_delete">
      <button className="element__button-delete" type="button" aria-label="Удалить"></button>
      <img
        className="element__photo"
        src={card.link}
        alt={card.name}
        onClick={() => handleClick(card)}
      />
      <div className="element__mesto">
        <h2 className="element__text">{card.name}</h2>
        <div>
          <button className="element__button-like" type="button" aria-label="Понравилось"></button>
          <div className="element__number-like">{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
