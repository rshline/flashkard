import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDeck, reset } from '../../features/decks/deckSlice'
import { getCards, reset as cardReset } from '../../features/cards/cardSlice'
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  Container,
} from "@material-ui/core/";
import Carousel from "react-material-ui-carousel";
import { AnimatePresence } from "framer-motion";
import { Paper, Button } from '@mui/material'
import FlipCard from '../../components/Card/FlipCard'


function OpenPage() {

  const { deckId } = useParams()
  const [page, setPage] = useState(1);

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

  const handleChangeItem = (event, value) => {
    setPage(value);
  };

  const noLoopNext = (event, value) => {
    setPage((currPage) => {
      if (currPage + 1 > cards.length) {
        return currPage;
      } else {
        return currPage + 1;
      }
    });
  };

  const noLoopPrev = (event, value) => {
    setPage((currPage) => {
      if (currPage === 1) {
        return currPage;
      } else {
        return currPage - 1;
      }
    });
  };
  const loopNext = (event, value) => {
    setPage((currPage) => {
      if (currPage + 1 > cards.length) {
        return 1;
      } else {
        return currPage + 1;
      }
    });
  };

  const loopPrev = (event, value) => {
    setPage((currPage) => {
      if (currPage === 1) {
        return cards.length;
      } else {
        return currPage - 1;
      }
    });
  };

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

      <div className='justify-center'>
        <h4 className='title'>{decks.title}</h4>
        <h5 className='subtitle'>{decks.topic}</h5>
        <p>Total Card: {decks.totalCard}</p>
        <p>{new Date(decks.createdAt).toLocaleDateString()}</p>
      </div>     
      
      <div>
        {decks.totalCard > 0 ? (
          <div className='m-5 p-5'>
            {cards.map((card) => (
              <FlipCard key={card._id} card={card} />
            ))}            
          </div>

        ) : (
          <p className='text-center m-5 p-5'>You haven't created a card in this deck.</p>
        )}  
      </div>

    </section>
  )
}

export default OpenPage
