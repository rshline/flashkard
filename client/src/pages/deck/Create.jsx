import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeckForm from '../../components/Deck/DeckForm'
import { getUserDecks, reset } from '../../features/decks/deckSlice'

function CreateDeckPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

    dispatch(getUserDecks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])


  return (
    <section className='content-center'>
      <h3>Create New Deck</h3>
      <DeckForm />
    </section>
  )
}

export default CreateDeckPage
