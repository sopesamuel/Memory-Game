import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/singleCard';

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const cardWorks = [...cardImages, ...cardImages]
    .map((card) => ({...card, id: Math.random()}))
    cardImages.sort(() => Math.random() * - 0.5)

    setCards(cardWorks)
    setTurns(0)
  }

  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

useEffect(()=>{
  if (choiceOne && choiceTwo){
    setDisabled(true)
    if ( choiceOne.src === choiceTwo.src ){
      setCards(prevCards => 
        prevCards.map((card)=> {
          if (card.src === choiceOne.src){
            return {...card, matched: true}
          }else{
            return card
          }
    }))
      resetTurn()
    }else{
      console.log("In-correct")
      setTimeout(() => resetTurn(), 1000)
    } 
  }

  },[choiceOne, choiceTwo])

  useEffect(()=>{
    shuffleCards()
  }, [])

const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}

  return (
    <div className="App">
    <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button><p>Turns: {turns}</p>
      <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
        card={card} 
        key={card.id} 
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}

        />
      ))}
      </div>
    </div>
  );
}

export default App;
