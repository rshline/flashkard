const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please fill the title'],
    },
    topic: {
      type: String,
      required: [true, 'Please fill the topic']
    },
    totalCard: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Deck', deckSchema)
