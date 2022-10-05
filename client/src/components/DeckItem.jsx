import { useDispatch } from 'react-redux'
import { getDeck, deleteDeck } from '../features/decks/deckSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DeckItem({ deck }) {
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className='card-content'>
        <p className='title'>{deck.title}</p>
        <p className='subtitle'>{deck.topic}</p>
        <p>{new Date(deck.createdAt).toString('dd-MM-yy')}</p>        
      </div>

      <div className='card-action'>
        <button className='btn-round'>
          <FontAwesomeIcon icon="fa-solid fa-pen" />
        </button>
        <button onClick={() => dispatch(deleteDeck(deck._id))} className='btn-round'>
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
        <button className='btn-round'>
          <FontAwesomeIcon icon="fa-solid fa-play" />
        </button>
      </div>

    </div>
  )
}

export default DeckItem
