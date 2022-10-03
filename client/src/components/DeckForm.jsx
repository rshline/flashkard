import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createDeck } from '../features/decks/deckSlice'
import {Button} from 'react-bootstrap';

function DeckForm() {
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createDeck({ title, topic }))
    setTitle('')
    setTopic('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='topic'>Topic</label>
          <input
            type='text'
            name='topic'
            id='topic'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <Button variant="outline-primary" size="lg" type='submit'>
            Create Deck
          </Button>
        </div>
      </form>
    </section>
  )
}

export default DeckForm
