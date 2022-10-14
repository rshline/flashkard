import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateDeck, isError, isSuccess, message } from '../features/decks/deckSlice'
import {Button} from 'react-bootstrap';
import { useEffect } from 'react';

function EditDeck({ deck }) {

  const [title, setTitle] = useState(deck.title)
  const [topic, setTopic] = useState(deck.topic)
  const [totalCard, setTotalCard] = useState(deck.totalCard)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateDeck( deck._id, (
        title,
        topic,
        totalCard
      ))
    )    

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
            Edit Deck
          </Button>
        </div>
      </form>
    </section>
  )
}

export default EditDeck
