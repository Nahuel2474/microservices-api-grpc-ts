import * as grpc from '@grpc/grpc-js';
import { Book } from '../domain/grpc/book_package/Book';
import { BookList } from '../domain/grpc/book_package/BookList';
import { BookServiceHandlers } from '../domain/grpc/book_package/BookService';
import { GetBookRequest__Output } from '../domain/grpc/book_package/GetBookRequest';
import { GetBooksRequest__Output } from '../domain/grpc/book_package/GetBooksRequest';
import { MongoDBRepository } from "../infraestructure/mongo/mongo.repository";

export class BookServices implements BookServiceHandlers {
    [name: string]: grpc.UntypedHandleCall;

    async GetBooks(call: grpc.ServerUnaryCall<GetBooksRequest__Output, BookList>, callback: grpc.sendUnaryData<BookList>) {
        try {
            const books = await MongoDBRepository.getInstance().getBooks();

            if (!books) return;

            const bookList: BookList = {
                books: books
            }

            return callback(null, bookList)
        } catch (error) {
            console.error('Error while fetching books:', error);
            call.emit('error', {
                code: grpc.status.INTERNAL,
                details: 'Internal server error.',
            });
        }
    }


    async GetBook(call: grpc.ServerUnaryCall<GetBookRequest__Output, Book>, callback: grpc.sendUnaryData<Book>) {
        try {
            const { bookId } = call.request;

            if (!bookId) return null;

            const book = await MongoDBRepository.getInstance().getBook(bookId)

            callback(null, book)
        } catch (error) {
            console.error('Error while fetching book:', error);
            call.emit('error', {
                code: grpc.status.INTERNAL,
                details: 'Internal server error.',
            });
        }
    }

}
