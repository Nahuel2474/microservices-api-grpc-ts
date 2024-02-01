import { Router } from "express";
import { CartController } from "../controller/cart.controller";


export class CartRoute {
    private controller: CartController = new CartController();
    private router : Router = Router();

    public setupRoutes(): void {
        this.get()
        this.post()
    }

    public getRouter(): Router {
        this.setupRoutes();
        return this.router
    }

    public get() {
        this.router.get('/all', this.controller.getAllCarts)
        this.router.get('/:cartId', this.controller.getCartById)
    }

    public post() {
        this.router.post('/add', this.controller.addProductToCart)
        this.router.post('/create', this.controller.createCart)
    }

    public delete() {
        this.router.delete('/delete-product', this.controller.deleteProductFromCart)
        this.router.delete('/delete-cart', this.controller.deleteCart)
    }
}