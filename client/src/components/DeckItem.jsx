import { useDispatch } from 'react-redux'
import { getDeck, deleteDeck } from '../features/decks/deckSlice'
import {Card, Button} from 'react-bootstrap';


function DeckItem({ deck }) {
  const dispatch = useDispatch()

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='fw-bold'>
          {deck.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {deck.topic}
        </Card.Subtitle>
        <Card.Text>
          {new Date(deck.createdAt).toString('dd-MM-yy')}
        </Card.Text>
      </Card.Body>
      <Button onClick={() => dispatch(deleteDeck(deck._id))} className='close'>
        Delete
      </Button>
    </Card>
  )
}

export default DeckItem
