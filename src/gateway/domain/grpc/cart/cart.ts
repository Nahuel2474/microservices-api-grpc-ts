import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CartServiceClient as _cart_package_CartServiceClient, CartServiceDefinition as _cart_package_CartServiceDefinition } from './cart_package/CartService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  cart_package: {
    AddProductRequest: MessageTypeDefinition
    Book: MessageTypeDefinition
    Cart: MessageTypeDefinition
    CartList: MessageTypeDefinition
    CartService: SubtypeConstructor<typeof grpc.Client, _cart_package_CartServiceClient> & { service: _cart_package_CartServiceDefinition }
    CartTotalResponse: MessageTypeDefinition
    CreateCartRequest: MessageTypeDefinition
    DeleteCartRequest: MessageTypeDefinition
    DeleteCartResponse: MessageTypeDefinition
    DeleteProductRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetCartRequest: MessageTypeDefinition
    Offer: MessageTypeDefinition
    ProductCart: MessageTypeDefinition
  }
}

