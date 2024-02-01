import { Request, Response } from "express";
import { CartGrpcClient } from "../../grpc/cart.client";
import { UserGrpcClient } from "../../grpc/user.client";



export class CartController {

    private cart: CartGrpcClient;
    private user: UserGrpcClient;

    constructor() {
        this.cart = CartGrpcClient.getInstance();
        this.user = UserGrpcClient.getInstance();
    }


    getCartById = async (req: Request, res: Response) => {
        try {
            const { cartId } = req.params

            if (!cartId) throw new Error('missing cart id')

            const data = await this.cart.getCartById(cartId);
            return res.status(200).json(data)
        } catch (error) {
            console.error('Error in get all carts:', error);
            res.status(500).json({ error: 'Internal Server Error' });

        }
    }


    getAllCarts = async (req: Request, res: Response) => {
        try {
            const allCarts = await this.cart.getAllCarts()
            return res.status(200).json(allCarts)
        } catch (error) {
            console.error('Error in get all carts:', error);
            res.status(500).json({ error: 'Internal Server Error' });

        }
    }


    addProductToCart = async (req: Request, res: Response) => {
        try {
            const { product, cartId } = req.body;

            const addProduct = await this.cart.addProduct(product, cartId);

            return res.status(200).json({ message: 'product added normally', product: addProduct })

        } catch (error) {
            console.error('Error in get all carts:', error);
            res.status(500).json({ error: 'Internal Server Error' });

        }
    }

    deleteProductFromCart = async (req: Request, res: Response) => {

        try {
            const { cartId, product } = req.body;

            const deleteProduct = await this.cart.deleteProduct(cartId, product.productId)

            if (!deleteProduct) return

            res.status(200).json({message: 'product delete s', product: product})
        } catch (error) {
            console.error(error);
            return res.status(500).json(error)
        }

    }

    createCart = async (req: Request, res: Response) => {
        try {
            const { userId } = req.body;

            const user = await this.user.getUser(userId);

            if (!user) return

            const cart = await this.cart.createCart(userId)

            if (!cart) return

            console.log('cart created successfully')
            return res.status(200).json(cart)

        } catch (error) {
            console.error(error);
            return res.status(500).json(error)
        }
    }

    deleteCart = async (req: Request, res: Response) => {

        const {cartId} = req.body;

        if(!cartId) return ;

        const deleteCart = await this.cart.deleteCart(cartId);

        if(!deleteCart) return;

        res.status(200).json({message: 'cart with id: ' + cartId + ' has delete successfully'})
     }


}