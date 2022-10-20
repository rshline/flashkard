const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
  {
    deck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deck',
      required: true,
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
