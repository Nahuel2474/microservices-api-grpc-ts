// Original file: proto/cart.proto

import type { Book as _cart_package_Book, Book__Output as _cart_package_Book__Output } from '../cart_package/Book';

export interface DeleteProductRequest {
  'cartId'?: (string);
  'product'?: (_cart_package_Book | null);
}

export interface DeleteProductRequest__Output {
  'cartId': (string);
  'product': (_cart_package_Book__Output | null);
}
