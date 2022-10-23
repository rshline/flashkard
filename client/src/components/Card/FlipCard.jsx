import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDeck } from '../../features/decks/deckSlice'
import {Button} from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

function FlipCard({card}) {

  const [isFlipped, setFlipped] = useState(false)
  const handleFlip = e => {
    e.preventDefault()
    setFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip 
      isFlipped={isFlipped} 
      flipDirection="vertical" 
      containerClassName='card'
    >
      <div className='justify-center' onClick={handleFlip}>
        <h1>{card.def}</h1>
        <p  className="subtitle hover-click">Click to flip</p>
      </div>
      <div className='justify-center' onClick={handleFlip}>
        <h1>{card.term}</h1>
        <p className="subtitle hover-click">Click to flip</p>
      </div>
    </ReactCardFlip>
  )
}

export default FlipCard
