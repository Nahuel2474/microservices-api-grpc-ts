// Original file: proto/cart.proto

import type { ProductCart as _cart_package_ProductCart, ProductCart__Output as _cart_package_ProductCart__Output } from '../cart_package/ProductCart';

export interface Cart {
  'id'?: (string);
  'userId'?: (string);
  'booksInCart'?: (_cart_package_ProductCart)[];
  'createdAt'?: (Date);
  'updatedAt'?: (Date);
}

export interface Cart__Output {
  'id': (string);
  'userId': (string);
  'booksInCart': (_cart_package_ProductCart__Output)[];
  'createdAt': (Date);
  'updatedAt': (Date);
}
