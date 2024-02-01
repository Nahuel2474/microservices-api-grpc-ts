// Original file: proto/cart.proto

import type { Book as _cart_package_Book, Book__Output as _cart_package_Book__Output } from '../cart_package/Book';

export interface ProductCart {
  'book'?: (_cart_package_Book | null);
  'quantity'?: (number);
}

export interface ProductCart__Output {
  'book': (_cart_package_Book__Output | null);
  'quantity': (number);
}
