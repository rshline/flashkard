import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeckForm from '../components/DeckForm'
import DeckItem from '../components/DeckItem'
import { getUserDecks, reset } from '../features/decks/deckSlice'
import { Container, Row, Col, Button } from 'react-bootstrap'

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
    <Container>
        <Row>
            <Col>
                <h3>Hello, {user && user.name}!</h3>
                <Link to="/create">
                    <Button variant="outline-primary" size="lg" type='submit'>
                        Create Deck
                    </Button>                
                </Link>            
            </Col>
        </Row>

        <Row>
            <Col>
                {decks.length > 0 ? (
                    <div className='decks'>
                    {decks.map((deck) => (
                        <DeckItem key={deck._id} deck={deck} />
                    ))}
                    </div>
                ) : (
                    <p>You haven't created a deck.</p>
                )}              
            </Col>
                
        </Row>

    </Container>

  )
}

export default Dashboard
