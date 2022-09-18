import './App.css';
import { useState } from 'react';
import SingleCard from './components/singleCard';

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const cardWorks = [...cardImages, ...cardImages]
    .map((card) => ({...card, id: Math.random()}))
    cardImages.sort(() => Math.random() * - 0.5)

    setCards(cardWorks)
    setTurns(0)
  }
console.log(cards, turns)

  return (
    <div className="App">
    <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
      <SingleCard />
      </div>
    </div>
  );
}

export default App;