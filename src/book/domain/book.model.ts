import mongoose, { Schema } from 'mongoose';
import { Book } from './types';

const bookSchema = new Schema<Book>({
  name: String,
  rating: String,
  desc: String,
  author: String,
  pages: String,
  publicationDate: String,
  image: String,
  price: Number,
  offer: {
    isOffer: Boolean,
    discount: Number,
    discountPrice: Number,
  },
  genres: [String],
  stock: Number,
});

const BookModel = mongoose.model<Book>('Book', bookSchema);

export default BookModel;

