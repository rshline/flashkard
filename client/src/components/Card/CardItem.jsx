import { useDispatch } from 'react-redux'
import { deleteCard } from '../../features/cards/cardSlice'
import { FaTrash } from 'react-icons/fa';

function CardItem({ card }) {
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className='justify-center'>
        <h4 className='def'>{card.def}</h4>
        <h4 className='term'>{card.term}</h4>       
      </div>

      <div className='p-5 justify-end'>

        <button onClick={() => dispatch(deleteCard(card.deck, card._id))} className='btn-icon mt-5 p-5'>
          <FaTrash color="#A42821" fontSize="16px" />        
        </button>
      </div>

    </div>
  )
}

export default CardItem
