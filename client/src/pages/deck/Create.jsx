import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeckForm from '../../components/DeckForm'
import { getUserDecks, reset } from '../../features/decks/deckSlice'

function CreateDeckPage() {
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

    dispatch(getUserDecks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  return (
    <section className='content-center'>
      <h3>Create New Deck</h3>
      <DeckForm />
    </section>
  )
}

export default CreateDeckPage
