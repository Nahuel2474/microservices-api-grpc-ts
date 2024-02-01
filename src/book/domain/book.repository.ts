import { Book } from "./types";


export interface BookRepositoryInterface {
    getBook(bookId: string): Promise<Book | null>;

    getBooks(): Promise<Book[]>;
}

