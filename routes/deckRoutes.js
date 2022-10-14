const express = require('express')
const router = express.Router()
const {
  getUserDecks,
  getDecks,
  getDeck,
  setDeck,
  updateDeck,
  deleteDeck,
} = require('../controllers/deckController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getUserDecks).post(protect, setDeck)
router.route('/others').get(protect, getDecks)
router.route('/:id').get(protect, getDeck).delete(protect, deleteDeck).put(protect, updateDeck)

module.exports = router
