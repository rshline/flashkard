import { useDispatch } from 'react-redux'
import { getDeck, deleteDeck } from '../features/decks/deckSlice'
import { FaPenAlt, FaTrash, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DeckCard({ deck }) {
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='space-between'>
          <p className='title'>{deck.title}</p>
          <Link to={{ pathname: `/deck/${deck._id}`, deck: { deck } }}>
            <button className='btn-icon'>
              <FaPlay fontSize="24px" />
            </button>
          </Link>
        </div>
        
        <p className='subtitle'>{deck.topic}</p>
        <p>{new Date(deck.createdAt).toLocaleDateString()}</p>        
      </div>

      <div className='space-between mt-5 p-5'>
        
        <Link to={`/deck/${deck._id}/edit`}>
          <button className='btn-icon mt-5 p-5'>
            <FaPenAlt color="grey" fontSize="16px" />
          </button>
        </Link>
        <button onClick={() => dispatch(deleteDeck(deck._id))} className='btn-icon mt-5 p-5'>
          <FaTrash color="#A42821" fontSize="16px" />        
        </button>
      </div>

    </div>
  )
}

export default DeckCard
