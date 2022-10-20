import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateDeck, isError, isSuccess, message } from '../../features/decks/deckSlice'
import { useEffect } from 'react';

function EditDeck({ deck }) {

  const [title, setTitle] = useState(deck.title)
  const [topic, setTopic] = useState(deck.topic)
  const [totalCard, setTotalCard] = useState(deck.totalCard)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { decks, isError, message} = useSelector(
    (state) => state.decks
  )

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateDeck(
      deck._id,
      {
        _id: deck._id,
        title,
        topic,
        totalCard
    }))    
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
          <button className='btn' type='submit'>
            Edit Deck
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditDeck
