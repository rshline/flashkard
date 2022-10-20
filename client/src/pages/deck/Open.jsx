import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FlipCard from '../../components/Card/FlipCard'
import { getDeck, reset } from '../../features/decks/deckSlice'

function OpenDeckPage() {
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
      <div>
        <h1 className='title'>{decks.title}</h1>
        <h2 className='subtitle'>{decks.topic}</h2>
      </div>
      <div>
        {decks.totalCard > 0 ? (
          <div>
            Card
          </div>
        ) : (
          <p className='text-center m-5 p-5'>You haven't created a card in this deck.</p>
        )}   
      </div>
    </section>
  )
}

export default OpenDeckPage
