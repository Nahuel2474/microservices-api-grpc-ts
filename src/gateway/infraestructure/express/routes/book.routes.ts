import { Router } from 'express';
import { bookController } from '../controller/book.controller';



export class bookRoutes {
    private controller = new bookController()
    private router = Router()

    public setupRoutes(): void {
        this.get()
    }

    public getRouter(): Router {
        this.setupRoutes();
        return this.router
    }

    public get() {
        this.router.get('/:bookId', this.controller.getBook)
        this.router.get('/', this.controller.getBooks)

    }

}