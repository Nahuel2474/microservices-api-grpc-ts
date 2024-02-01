// Original file: proto/cart.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddProductRequest as _cart_package_AddProductRequest, AddProductRequest__Output as _cart_package_AddProductRequest__Output } from '../cart_package/AddProductRequest';
import type { Cart as _cart_package_Cart, Cart__Output as _cart_package_Cart__Output } from '../cart_package/Cart';
import type { CartList as _cart_package_CartList, CartList__Output as _cart_package_CartList__Output } from '../cart_package/CartList';
import type { CartTotalResponse as _cart_package_CartTotalResponse, CartTotalResponse__Output as _cart_package_CartTotalResponse__Output } from '../cart_package/CartTotalResponse';
import type { CreateCartRequest as _cart_package_CreateCartRequest, CreateCartRequest__Output as _cart_package_CreateCartRequest__Output } from '../cart_package/CreateCartRequest';
import type { DeleteCartRequest as _cart_package_DeleteCartRequest, DeleteCartRequest__Output as _cart_package_DeleteCartRequest__Output } from '../cart_package/DeleteCartRequest';
import type { DeleteCartResponse as _cart_package_DeleteCartResponse, DeleteCartResponse__Output as _cart_package_DeleteCartResponse__Output } from '../cart_package/DeleteCartResponse';
import type { DeleteProductRequest as _cart_package_DeleteProductRequest, DeleteProductRequest__Output as _cart_package_DeleteProductRequest__Output } from '../cart_package/DeleteProductRequest';
import type { Empty as _cart_package_Empty, Empty__Output as _cart_package_Empty__Output } from '../cart_package/Empty';
import type { GetCartRequest as _cart_package_GetCartRequest, GetCartRequest__Output as _cart_package_GetCartRequest__Output } from '../cart_package/GetCartRequest';

export interface CartServiceClient extends grpc.Client {
  AddProductToCart(argument: _cart_package_AddProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  AddProductToCart(argument: _cart_package_AddProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  AddProductToCart(argument: _cart_package_AddProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  AddProductToCart(argument: _cart_package_AddProductRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  addProductToCart(argument: _cart_package_AddProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  addProductToCart(argument: _cart_package_AddProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  addProductToCart(argument: _cart_package_AddProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  addProductToCart(argument: _cart_package_AddProductRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  
  CreateCart(argument: _cart_package_CreateCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  CreateCart(argument: _cart_package_CreateCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  CreateCart(argument: _cart_package_CreateCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  CreateCart(argument: _cart_package_CreateCartRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  createCart(argument: _cart_package_CreateCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  createCart(argument: _cart_package_CreateCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  createCart(argument: _cart_package_CreateCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  createCart(argument: _cart_package_CreateCartRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  
  DeleteCart(argument: _cart_package_DeleteCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  DeleteCart(argument: _cart_package_DeleteCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  DeleteCart(argument: _cart_package_DeleteCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  DeleteCart(argument: _cart_package_DeleteCartRequest, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  deleteCart(argument: _cart_package_DeleteCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  deleteCart(argument: _cart_package_DeleteCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  deleteCart(argument: _cart_package_DeleteCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  deleteCart(argument: _cart_package_DeleteCartRequest, callback: grpc.requestCallback<_cart_package_DeleteCartResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteProductFromCart(argument: _cart_package_DeleteProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  DeleteProductFromCart(argument: _cart_package_DeleteProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  DeleteProductFromCart(argument: _cart_package_DeleteProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  DeleteProductFromCart(argument: _cart_package_DeleteProductRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  deleteProductFromCart(argument: _cart_package_DeleteProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  deleteProductFromCart(argument: _cart_package_DeleteProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  deleteProductFromCart(argument: _cart_package_DeleteProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  deleteProductFromCart(argument: _cart_package_DeleteProductRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  
  GetAllCarts(argument: _cart_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  GetAllCarts(argument: _cart_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  GetAllCarts(argument: _cart_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  GetAllCarts(argument: _cart_package_Empty, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  getAllCarts(argument: _cart_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  getAllCarts(argument: _cart_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  getAllCarts(argument: _cart_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  getAllCarts(argument: _cart_package_Empty, callback: grpc.requestCallback<_cart_package_CartList__Output>): grpc.ClientUnaryCall;
  
  GetCart(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _cart_package_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  GetCart(argument: _cart_package_GetCartRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  getCart(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  getCart(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  getCart(argument: _cart_package_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  getCart(argument: _cart_package_GetCartRequest, callback: grpc.requestCallback<_cart_package_Cart__Output>): grpc.ClientUnaryCall;
  
  GetCartTotal(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  GetCartTotal(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  GetCartTotal(argument: _cart_package_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  GetCartTotal(argument: _cart_package_GetCartRequest, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  getCartTotal(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  getCartTotal(argument: _cart_package_GetCartRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  getCartTotal(argument: _cart_package_GetCartRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  getCartTotal(argument: _cart_package_GetCartRequest, callback: grpc.requestCallback<_cart_package_CartTotalResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CartServiceHandlers extends grpc.UntypedServiceImplementation {
  AddProductToCart: grpc.handleUnaryCall<_cart_package_AddProductRequest__Output, _cart_package_Cart>;
  
  CreateCart: grpc.handleUnaryCall<_cart_package_CreateCartRequest__Output, _cart_package_Cart>;
  
  DeleteCart: grpc.handleUnaryCall<_cart_package_DeleteCartRequest__Output, _cart_package_DeleteCartResponse>;
  
  DeleteProductFromCart: grpc.handleUnaryCall<_cart_package_DeleteProductRequest__Output, _cart_package_Cart>;
  
  GetAllCarts: grpc.handleUnaryCall<_cart_package_Empty__Output, _cart_package_CartList>;
  
  GetCart: grpc.handleUnaryCall<_cart_package_GetCartRequest__Output, _cart_package_Cart>;
  
  GetCartTotal: grpc.handleUnaryCall<_cart_package_GetCartRequest__Output, _cart_package_CartTotalResponse>;
  
}

export interface CartServiceDefinition extends grpc.ServiceDefinition {
  AddProductToCart: MethodDefinition<_cart_package_AddProductRequest, _cart_package_Cart, _cart_package_AddProductRequest__Output, _cart_package_Cart__Output>
  CreateCart: MethodDefinition<_cart_package_CreateCartRequest, _cart_package_Cart, _cart_package_CreateCartRequest__Output, _cart_package_Cart__Output>
  DeleteCart: MethodDefinition<_cart_package_DeleteCartRequest, _cart_package_DeleteCartResponse, _cart_package_DeleteCartRequest__Output, _cart_package_DeleteCartResponse__Output>
  DeleteProductFromCart: MethodDefinition<_cart_package_DeleteProductRequest, _cart_package_Cart, _cart_package_DeleteProductRequest__Output, _cart_package_Cart__Output>
  GetAllCarts: MethodDefinition<_cart_package_Empty, _cart_package_CartList, _cart_package_Empty__Output, _cart_package_CartList__Output>
  GetCart: MethodDefinition<_cart_package_GetCartRequest, _cart_package_Cart, _cart_package_GetCartRequest__Output, _cart_package_Cart__Output>
  GetCartTotal: MethodDefinition<_cart_package_GetCartRequest, _cart_package_CartTotalResponse, _cart_package_GetCartRequest__Output, _cart_package_CartTotalResponse__Output>
}
