// Original file: proto/book.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Book as _book_package_Book, Book__Output as _book_package_Book__Output } from '../book_package/Book';
import type { BookList as _book_package_BookList, BookList__Output as _book_package_BookList__Output } from '../book_package/BookList';
import type { GetBookRequest as _book_package_GetBookRequest, GetBookRequest__Output as _book_package_GetBookRequest__Output } from '../book_package/GetBookRequest';
import type { GetBooksRequest as _book_package_GetBooksRequest, GetBooksRequest__Output as _book_package_GetBooksRequest__Output } from '../book_package/GetBooksRequest';

export interface BookServiceClient extends grpc.Client {
  GetBook(argument: _book_package_GetBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  GetBook(argument: _book_package_GetBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  GetBook(argument: _book_package_GetBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  GetBook(argument: _book_package_GetBookRequest, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  getBook(argument: _book_package_GetBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  getBook(argument: _book_package_GetBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  getBook(argument: _book_package_GetBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  getBook(argument: _book_package_GetBookRequest, callback: grpc.requestCallback<_book_package_Book__Output>): grpc.ClientUnaryCall;
  
  GetBooks(argument: _book_package_GetBooksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _book_package_GetBooksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _book_package_GetBooksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _book_package_GetBooksRequest, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _book_package_GetBooksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _book_package_GetBooksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _book_package_GetBooksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _book_package_GetBooksRequest, callback: grpc.requestCallback<_book_package_BookList__Output>): grpc.ClientUnaryCall;
  
}

export interface BookServiceHandlers extends grpc.UntypedServiceImplementation {
  GetBook: grpc.handleUnaryCall<_book_package_GetBookRequest__Output, _book_package_Book>;
  
  GetBooks: grpc.handleUnaryCall<_book_package_GetBooksRequest__Output, _book_package_BookList>;
  
}

export interface BookServiceDefinition extends grpc.ServiceDefinition {
  GetBook: MethodDefinition<_book_package_GetBookRequest, _book_package_Book, _book_package_GetBookRequest__Output, _book_package_Book__Output>
  GetBooks: MethodDefinition<_book_package_GetBooksRequest, _book_package_BookList, _book_package_GetBooksRequest__Output, _book_package_BookList__Output>
}
