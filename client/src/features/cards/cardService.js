import axios from 'axios'

const API_URL = '/api/decks/cards'

// Create new card
const createCard = async (cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, cardData, config)

  return response.data
}

// Get user Users
const getCards = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Update  card
const updateCard = async (cardId, cardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + cardId, cardData, config)

  return response.data
}

// Get Card
const getCard = async (cardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + cardId, config)

  return response.data
}

// Delete user User
const deleteCard = async (cardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + cardId, config)

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
