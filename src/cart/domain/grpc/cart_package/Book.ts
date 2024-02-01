// Original file: proto/cart.proto

import type { Offer as _cart_package_Offer, Offer__Output as _cart_package_Offer__Output } from '../cart_package/Offer';

export interface Book {
  'name'?: (string);
  'rating'?: (string);
  'desc'?: (string);
  'author'?: (string);
  'pages'?: (string);
  'publicationDate'?: (string);
  'image'?: (string);
  'price'?: (number | string);
  'offer'?: (_cart_package_Offer | null);
  'genres'?: (string)[];
  'stock'?: (number);
  'id'?: (number);
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
  'offer': (_cart_package_Offer__Output | null);
  'genres': (string)[];
  'stock': (number);
  'id': (number);
}
