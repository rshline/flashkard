import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeckForm from '../components/DeckForm'
import DeckItem from '../components/DeckItem'
import { getUserDecks, reset } from '../features/decks/deckSlice'

function Dashboard() {
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
    <section className='dashboard'>
        <div className='title'>
          <h3>Hello, {user && user.name}.</h3>
          <h1>Create your own flashcards with Flashkard.</h1>
          <Link to="/create">
            <button className='btn' type='submit'>
                Create Deck
            </button>                
          </Link>            
        </div>

        <div className='grid-container'>
          {decks.length > 0 ? (
              <div className='decks'>
              {decks.map((deck) => (
                  <DeckItem key={deck._id} deck={deck} />
              ))}
              </div>
          ) : (
              <p>You haven't created a deck.</p>
          )}               
        </div>
    </section>

  )
}

export default Dashboard
