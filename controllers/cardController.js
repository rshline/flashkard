const asyncHandler = require('express-async-handler');

const Card = require('../models/cardModel');
const Deck = require('../models/deckModel');

// @desc    Get cards
// @route   GET /api/decks/:deckId/cards
// @access  Public

const getCards = asyncHandler(
    async (req, res) => {

        const cards = await Card.find({
            deck: req.params.deck
        });

        res.status(200)
            .json(cards)
    }

)


// @desc    Create cards
// @route   POST /api/decks/:deck/cards
// @access  Private

const createCard = asyncHandler(
    async (req, res) => {

        const deck = await Deck.findById(req.params.deck);

        if (!deck) {
            res.status(400)
            throw new Error('Deck not found')
        }

        if (!req.body.def || !req.body.term) {
            res.status(400)
            throw new Error('Field empty')
        }

        const card = await Card.create({
            deck: req.params.deck,
            def: req.body.def,
            term: req.body.term,
            imgURL: req.body.imgURL,
        });

        const total = deck.totalCard;

        await Deck.findByIdAndUpdate(
            req.params.deck,
            {
                totalCard: total + 1
            }).exec()

        res.status(200).json(card)
    }

)


// @desc    Update card
// @route   PUT /api/decks/:deck/cards/:cardId
// @access  Private
const updateCard = asyncHandler(
    async (req, res) => {

        const deck = await Deck.findById(req.params.deck)

        if (!deck) {
            res.status(400)
            throw new Error('Deck not found')
        }

        const card = await Card.findById(req.params.CardId)

        if (!card) {
            res.status(400)
            throw new Error('Card not found')
        }

        const updatedCard = await Card.findByIdAndUpdate(
            req.params.CardId,
            req.body,
            { new: true }
        )

        res.status(200)
            .json(updatedCard)
    }

)


// @desc    Delete Card
// @route   DELETE /api/decks/:deck/cards/:cardId
// @access  Private

const deleteCard = asyncHandler(
    async (req, res) => {

        const deck = await Deck.findById(req.params.deck)

        if (!deck) {
            res.status(400)
            throw new Error('Deck not found')
        }

        const card = Card.findById(req.params.cardId)

        if (!card) {
            res.status(400)
            throw new Error('Card not found')
        }

        await card.deleteOne()

        const total = deck.totalCard

        await Deck.findByIdAndUpdate(
            req.params.deck,
            {
                totalCard: total - 1
            }).exec()

        res.status(200)
            .json({
                id: req.params.cardId
            })
    }

)

module.exports = {
    getCards,
    createCard,
    updateCard,
    deleteCard
}