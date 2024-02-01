import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BookServiceClient as _book_package_BookServiceClient, BookServiceDefinition as _book_package_BookServiceDefinition } from './book_package/BookService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  book_package: {
    Book: MessageTypeDefinition
    BookList: MessageTypeDefinition
    BookService: SubtypeConstructor<typeof grpc.Client, _book_package_BookServiceClient> & { service: _book_package_BookServiceDefinition }
    GetBookRequest: MessageTypeDefinition
    GetBooksRequest: MessageTypeDefinition
    Offer: MessageTypeDefinition
  }
}

