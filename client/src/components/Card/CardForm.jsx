import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCard } from '../../features/cards/cardSlice'

function CardForm({ deck }) {

  const [def, setDef] = useState('')
  const [term, setTerm] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createCard({deck, def, term }))
    setDef('')
    setTerm('')
  }

  return (
    <section className='form p-5 m-5'>
      <form onSubmit={onSubmit}>
        <div className='form-group m-5'>
          <label htmlFor='def'>Definition</label>
          <input
            type='text'
            name='def'
            id='def'
            value={def}
            onChange={(e) => setDef(e.target.value)}
          />
        </div>
        <div className='form-group m-5'>
          <label htmlFor='term'>Term</label>
          <input
            type='text'
            name='term'
            id='term'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className='form-group m-5'>
          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default CardForm
