const asyncHandler = require('express-async-handler')

const Deck = require('../models/deckModel')
const User = require('../models/userModel')

// @desc    Get decks
// @route   GET /api/decks
// @access  Private
const getUserDecks = asyncHandler(async (req, res) => {
  const decks = await Deck.find({ user: req.user.id })

  res.status(200).json(decks)
})

const getDecks = asyncHandler(async (req, res) => {
  const decks = await Deck.find()

  res.status(200).json(decks)
})

// @desc    Get decks
// @route   GET /api/decks/id
// @access  Private
const getDeck = asyncHandler(async (req, res) => {
  const deck = await Deck.findById(req.params.id)

  res.status(200).json(deck)
})

// @desc    Set decks
// @route   POST /api/decks
// @access  Private
const setDeck = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.topic) {
    res.status(400)
    throw new Error('The field must be filled!')
  }

  try {
    const deck = await Deck.create({
      user: req.user.id,
      title: req.body.title,
      topic: req.body.topic,
      totalCard: 0,
    })

    res.status(200).json(deck)
  } catch (err) {
    res.status(400).json(err.message)
  }
  
})

// @desc    Update deck
// @route   PUT /api/decks/:id
// @access  Private
const updateDeck = asyncHandler(async (req, res) => {

  if (!req.body.title || !req.body.topic) {
    res.status(400)
    throw new Error('The field must be filled!')
  }
  
  const deck = await Deck.findById(req.params.id)

  if (!deck) {
    res.status(400)
    throw new Error('Deck not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the deck user
  if (deck.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedDeck)
})

// @desc    Delete deck
// @route   DELETE /api/decks/:id
// @access  Private
const deleteDeck = asyncHandler(async (req, res) => {
  const deck = await Deck.findById(req.params.id)

  if (!deck) {
    res.status(400)
    throw new Error('Deck not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the deck user
  if (deck.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await deck.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getUserDecks,
  getDecks,
  getDeck,
  setDeck,
  updateDeck,
  deleteDeck,
}
