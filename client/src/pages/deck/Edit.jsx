import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EditDeck from '../../components/Deck/EditDeck'
import CardForm from '../../components/Card/CardForm'
import { getDeck, reset } from '../../features/decks/deckSlice'
import { getCards, reset as cardReset } from '../../features/cards/cardSlice'
import { FaPenAlt } from "react-icons/fa";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import CardItem from '../../components/Card/CardItem'


function EditDeckPage() {

  const { deckId } = useParams()
  const [isCreate, setIsCreate] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  
  const { decks, isError, message } = useSelector(
    (state) => state.decks
  )

  const { 
    cards, 
    isError:cardError, 
    message: cardMessage 
  } = useSelector(
    (state) => state.cards
  )

  const handleEditClick = event => {
    setIsEdit(!isEdit)
  }

  const handleCreateClick = event => {
    setIsCreate(!isCreate)
  }

  const addButtonToggle = isCreate ? (
    <AiFillCloseCircle />
  ) : (
    <AiFillPlusCircle />
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (cardError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getDeck(deckId))
    dispatch(getCards(deckId))
    
    return () => {
      dispatch(reset())
      dispatch(cardReset())
    }
  }, [navigate, dispatch, user, deckId, isError, message, cardError, cardMessage])


  return (
    <section className='dashboard p-5 m-5'>
      <div className='space-between content-border'>
        <h3>Edit Deck</h3>
        <button className='btn-icon' onClick={handleEditClick}>
          <FaPenAlt color="grey" fontSize="16px" />
        </button>
      </div>
      
      <div className='content-border'>
        {isEdit ? (
          <EditDeck key={decks._id} deck={decks} />
        ) : (
          <div className='justify-center'>
            <h4 className='title'>{decks.title}</h4>
            <h5 className='subtitle'>{decks.topic}</h5>
            <p>Total Card: {decks.totalCard}</p>
            <p>{new Date(decks.createdAt).toLocaleDateString()}</p>
          </div>
        )}        
      </div>
      
        {isCreate ? (
          <div className='justify-center'>
            <div onClick={handleCreateClick}>
              {addButtonToggle}
            </div>
            <CardForm key={decks._id} deck={decks._id}/>
          </div>
        ): (
          <div className='justify-center'>
            <div onClick={handleCreateClick}>
              {addButtonToggle}
            </div>
          </div>

        )}       
      
      <div>
        {decks.totalCard > 0 ? (
          <div className='grid-container'>
            {cards.map((card) => (
              <CardItem key={card._id} card={card} />
            ))}
          </div>
          ) : (
            <p className='text-center m-5 p-5'>You haven't created a card in this deck.</p>
          )}  
      </div>
    </section>
  )
}

export default EditDeckPage
