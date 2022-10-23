const express = require('express')
const router = express.Router({mergeParams: true})
const {
    getUserDecks,
    getDecks,
    getDeck,
    setDeck,
    updateDeck,
    deleteDeck,
  } = require('../controllers/deckController')

const {
    getCard,
    getCards,
    createCard,
    updateCard,
    deleteCard 
} = require('../controllers/cardController')
const { protect } = require('../middleware/authMiddleware')

//decks
router.route('/').get(protect, getUserDecks).post(protect, setDeck)
router.route('/all').get(getDecks)
router.route('/:id').get(getDeck).delete(protect, deleteDeck).put(protect, updateDeck)

//cards
router.route('/:id/cards').get(getCards).post(protect, createCard)
router.route('/:id/cards/:cardId').get(getCard).put(protect, updateCard).delete(protect, deleteCard)

module.exports = router