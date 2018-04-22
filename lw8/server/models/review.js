const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idvalidator = require('mongoose-id-validator');

const ReviewSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  discription: {
    type: String,
    validate: /\S+/,
    required: [true]
  }
});

ReviewSchema.plugin(idvalidator);

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;