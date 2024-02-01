// Original file: proto/cart.proto


export interface CartTotalResponse {
  'total'?: (number | string);
  'discountPrice'?: (number | string);
}

export interface CartTotalResponse__Output {
  'total': (number);
  'discountPrice': (number);
}
