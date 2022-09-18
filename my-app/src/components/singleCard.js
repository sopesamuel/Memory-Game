import React from 'react'

export default function SingleCard({cards}) {
  return (
    <div>
         {cards.map(card => (
      <div className="card" key={card.id}> 
      <div>
      <img src={card.src} className="front" alt="card front"/>
      <img src="/img/cover.png" className="back" alt="card back"/>
      </div>
      </div>
      ))}
    </div>
  )
}
