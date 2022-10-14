import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EditDeck from '../../components/EditDeck'
import { getDeck, updateDeck, reset } from '../../features/decks/deckSlice'

function EditDeckPage() {

  const { deckId } = useParams()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { decks, isError, message } = useSelector(
    (state) => state.decks
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getDeck(deckId))
    
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  return (
    <section className='content-center'>
      <h3>Edit Deck</h3>
      <EditDeck key={decks._id} deck={decks} />
    </section>
  )
}

export default EditDeckPage
