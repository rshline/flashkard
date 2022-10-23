import axios from 'axios'

// Create new card
const createCard = async (cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(`/api/decks/${cardData.deck}/cards/`, cardData, config)

  return response.data
}

// Get user Users
const getCards = async (deckId) => {

  const response = await axios.get(`/api/decks/${deckId}/cards/`)

  return response.data
}

// Update  card
const updateCard = async (deckId, cardId, cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(`/api/decks/${deckId}/cards/${cardId}`, cardData, config)

  return response.data
}

// Get Card
const getCard = async (deckId, cardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`/api/decks/${deckId}/cards/${cardId}`, config)

  return response.data
}

// Delete user User
const deleteCard = async (deckId, cardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`/api/decks/${deckId}/cards/${cardId}`, config)

  return response.data
}

const cardService = {
  createCard,
  getCards,
  getCard, 
  updateCard,
  deleteCard,
}

export default cardService
