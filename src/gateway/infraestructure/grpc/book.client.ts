import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { BookList } from '../../../book/domain/grpc/book_package/BookList';
import { ProtoGrpcType } from '../../domain/grpc/book/book';
import { Book__Output } from '../../domain/grpc/book/book_package/Book';
import { GetBookRequest } from '../../domain/grpc/book/book_package/GetBookRequest';


export class BookGrpcClient {
    private static instance: BookGrpcClient
    public client;

    constructor() {
        const packageDefinition = protoLoader.loadSync('./proto/book.proto');
        const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

        this.client = new proto.book_package.BookService('localhost:50052', grpc.credentials.createInsecure());
    }

    public static getInstance(): BookGrpcClient {
        if (!BookGrpcClient.instance) {
            BookGrpcClient.instance = new BookGrpcClient();
        }

        return BookGrpcClient.instance;
    }

    getBook(bookId: string): Promise<Book__Output | undefined> {
        return new Promise((resolve, reject) => {

            try {
                const request: GetBookRequest = {
                    bookId 
                };
                this.client.GetBook(request, (err, book) => {
                    if (err) {
                        if(err.code === grpc.status.INVALID_ARGUMENT) return reject('missing bookId in params request')
                        reject(err);
                    } else {
                        resolve(book)
                    }
                });
            } catch (error) {
                reject(new Error('No book found'))
            }
        })

    }

    getBooks(): Promise<BookList | undefined> {
        return new Promise((resolve, reject) => {
            try {
                const request = {};

                this.client.GetBooks(request, (err,books) => {
                    if(err) reject(err)
                    resolve(books)
                })
    

            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }
    
    

}
