// Original file: proto/book.proto


export interface Offer {
  'isOffer'?: (boolean);
  'discount'?: (number | string);
  'discountPrice'?: (number | string);
}

export interface Offer__Output {
  'isOffer': (boolean);
  'discount': (number);
  'discountPrice': (number);
}
