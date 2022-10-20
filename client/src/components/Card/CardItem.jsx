import { useDispatch } from 'react-redux'
import { getDeck, deleteCard } from '../../features/cards/cardSlice'
import { FaPenAlt, FaTrash, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CardItem({ card }) {
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className='card-content'>
        <p className='title'>{card.def}</p>
        <p className='title'>{card.term}</p>       
      </div>

      <div className='space-between mt-5 p-5'>

        <button onClick={() => dispatch(deleteCard(card._id))} className='btn-icon mt-5 p-5'>
          <FaTrash color="#A42821" fontSize="16px" />        
        </button>
      </div>

    </div>
  )
}

export default CardItem
