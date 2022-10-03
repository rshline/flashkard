import axios from 'axios'

const API_URL = '/api/decks/'

// Create new User
const createDeck = async (deckData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, deckData, config)

  return response.data
}

// Get user Users
const getUserDecks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get deck
const getDeck = async (deckId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + deckId, config)

  return response.data
}

// Get deck
const updateDeck = async (deckId, deckData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + deckId, deckData, config)

  return response.data
}

// Delete user User
const deleteDeck = async (deckId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + deckId, config)

  return response.data
}

const deckService = {
  createDeck,
  getUserDecks,
  getDeck,
  updateDeck,
  deleteDeck,
}

export default deckService
