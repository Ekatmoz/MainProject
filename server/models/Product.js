import mongoose from 'mongoose';

const reviewSchema = new mongoose. Schema({
  name: { type: String, require: true },
  rating: { type: String, require: true },
  comment: { type: String, require: true },
  title: { type: String, require: true },
  user: { type: mongoose.Schema.Types.ObjectId, require: true, reg: 'User' },
}, 
{ timestamps: true }
);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  productIsNew: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;