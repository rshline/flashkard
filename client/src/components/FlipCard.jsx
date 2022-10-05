import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDeck } from '../features/decks/deckSlice'
import {Button} from 'react-bootstrap';

function FlipCard() {
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')

  const dispatch = useDispatch()

  return (
    <section className='content-center'>

    </section>
  )
}

export default FlipCard
