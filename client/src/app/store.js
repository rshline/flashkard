import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import deckReducer from '../features/decks/deckSlice'
import cardReducer from '../features/cards/cardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    decks: deckReducer,
    cards: cardReducer,
  },
})
