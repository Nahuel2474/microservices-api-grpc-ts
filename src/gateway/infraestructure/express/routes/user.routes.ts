import { Router } from "express";
import { userController } from "../controller/user.controller";


export class userRoutes {
    private controller = new userController()
    private router = Router()

    public setupRoutes(): void {
        this.get()
    }

    public getRouter(): Router {
        this.setupRoutes();
        return this.router
    }

    public get() {
        this.router.get('/users', this.controller.getAllUser)
        this.router.get('/:userId', this.controller.getUser)

    }

}