// Original file: proto/book.proto

import type { Offer as _book_package_Offer, Offer__Output as _book_package_Offer__Output } from '../book_package/Offer';

export interface Book {
  'name'?: (string);
  'rating'?: (string);
  'desc'?: (string);
  'author'?: (string);
  'pages'?: (string);
  'publicationDate'?: (string);
  'image'?: (string);
  'price'?: (number | string);
  'offer'?: (_book_package_Offer | null);
  'genres'?: (string)[];
  'stock'?: (number);
}

export interface Book__Output {
  'name': (string);
  'rating': (string);
  'desc': (string);
  'author': (string);
  'pages': (string);
  'publicationDate': (string);
  'image': (string);
  'price': (number);
  'offer': (_book_package_Offer__Output | null);
  'genres': (string)[];
  'stock': (number);
}
