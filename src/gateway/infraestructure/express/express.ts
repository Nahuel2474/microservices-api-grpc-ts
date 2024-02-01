import express, { Application } from 'express';
import morgan from 'morgan';
import { config } from '../../domain/config';
import { bookRoutes } from './routes/book.routes';
import { CartRoute } from './routes/cart.routes';
import { userRoutes } from './routes/user.routes';


export class ExpressServer {
    app: Application;
    server;
    bookRoutes = new bookRoutes()
    cartRoutes = new CartRoute()
    userRoutes = new userRoutes()

    constructor() {
        this.app = express();
        if (config.port) {
            this.server = this.start(config.port)
        } else {
            throw new Error('Variables de entorno no inicializadas')
        }
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('tiny'))
    }

    private initializeRoutes(): void {
        this.app.use('/books', this.bookRoutes.getRouter())
        this.app.use('/cart', this.cartRoutes.getRouter())
        this.app.use('/user', this.userRoutes.getRouter())
    }

    public start(port: string) {
        return this.app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }

    public stop() {
        return this.server.close(() =>
            console.log('server shut down.')
        )
    }


}