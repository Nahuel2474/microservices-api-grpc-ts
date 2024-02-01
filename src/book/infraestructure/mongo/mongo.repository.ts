import BookModel from "../../domain/book.model";
import { BookRepositoryInterface } from "../../domain/book.repository";
import { Book } from "../../domain/types";



export class MongoDBRepository implements BookRepositoryInterface {

    static instance: MongoDBRepository;

    constructor() {}

    static getInstance(): MongoDBRepository {
        if(!MongoDBRepository.instance) {
            MongoDBRepository.instance = new MongoDBRepository()
        }

        return MongoDBRepository.instance
    }

    async getBook(bookId: string): Promise<Book | null> {
        try {
            const book = await BookModel.findById(bookId);
            return book
        } catch (error) {
            console.error(error)
            throw new Error('Libro no encontrado')
        }
    }

    async getBooks(): Promise<Book[]> {
        try {
            const books = await BookModel.find({});
            return books
        } catch {
            throw new Error('Libro no encontrado')
        }
    }

}