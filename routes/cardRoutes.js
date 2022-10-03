const express = require('express')
const router = express.Router({mergeParams: true})
const {
    getCards,
    createCard,
    updateCard,
    deleteCard 
} = require('../controllers/cardController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCards).post(protect, createCard)
router.route('/:cardId').put(protect, updateCard).delete(protect, deleteCard)

module.exports = router