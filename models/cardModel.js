const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
  {
    deck: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Deck',
    },
    def: {
      type: String,
      required: [true, 'Please fill the definition'],
    },
    term: {
      type: String,
      required: [true, 'Please fill the term']
    },
    imgURL: {
      type: String
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Card', cardSchema)
