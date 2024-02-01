import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from '../../domain/grpc/cart/cart';
import { AddProductRequest } from '../../domain/grpc/cart/cart_package/AddProductRequest';
import { Book } from '../../domain/grpc/cart/cart_package/Book';
import { Cart__Output } from '../../domain/grpc/cart/cart_package/Cart';
import { CartList, CartList__Output } from '../../domain/grpc/cart/cart_package/CartList';
import { DeleteCartRequest } from '../../domain/grpc/cart/cart_package/DeleteCartRequest';
import { DeleteProductRequest } from '../../domain/grpc/cart/cart_package/DeleteProductRequest';
import { GetCartRequest } from '../../domain/grpc/cart/cart_package/GetCartRequest';

export class CartGrpcClient {
    private static instance: CartGrpcClient;
    public client;

    constructor() {
        const packageDefinition = protoLoader.loadSync('./proto/cart.proto');
        const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
        const client = new proto.cart_package.CartService('localhost:50053', grpc.credentials.createInsecure())
        this.client = client
    }

    static getInstance(): CartGrpcClient {
        if (!CartGrpcClient.instance) {
            CartGrpcClient.instance = new CartGrpcClient()
        }

        return CartGrpcClient.instance;
    }

    createCart(userId: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const request = {
                    userId: userId
                };

                this.client.CreateCart(request, (err, cart) => {
                    if (err) {
                        if (err.code === grpc.status.NOT_FOUND) {
                            return reject({ error: 'User not found' });
                        }
                        if (err.code === grpc.status.ALREADY_EXISTS) {
                            return reject({ error: 'User already has a cart' });
                        }
                        console.error(err);
                        return reject({ error: 'Internal server error ' });
                    }
                    resolve(cart);
                });
            } catch (error) {
                console.error(error);
                reject({ error: 'Internal server error' });
            }
        });
    }

    getCartById(cartId: string) {
        return new Promise((resolve, reject) => {
            try {
                const request: GetCartRequest = {
                    cartId: cartId
                }

                this.client.GetCart(request, (err, cart) => {
                    if (err) reject(err)
                    resolve(cart)
                })
            } catch (error) {
                console.error(error)
                reject(error)
            }
        })
    };


    getAllCarts(): Promise<CartList__Output | undefined> {
        return new Promise((resolve, reject) => {
            try {

                const request: CartList = {}

                this.client.GetAllCarts(request, (err, cart) => {
                    if (err) reject(err)
                    resolve(cart)
                });
            } catch (error) {
                console.error(error)
                reject(error)
            }
        })
    };


    addProduct(product: Book, cartId: string): Promise<Cart__Output | undefined> {
        return new Promise((resolve, reject) => {
            try {
                const request: AddProductRequest = {
                    cartId: cartId,
                    product: product
                }

                this.client.AddProductToCart(request, (err, cart) => {
                    if (err) reject(err);
                    resolve(cart)
                })

            } catch (error) {
                console.error(error)
                reject(error)
                throw new Error('Error adding product to cart')
            }
        })
    };

    deleteProduct(cartId: string, product: Book) {
        return new Promise((resolve, reject) => {
            const request: DeleteProductRequest = {
                cartId,
                product,
            }

            this.client.deleteProductFromCart(request, (err, cart) => {

                if (err) {
                    if (err.code === grpc.status.INVALID_ARGUMENT) return reject('argumento')
                    if (err.code === grpc.status.ABORTED) return reject('argumento')
                }
                resolve(cart)
            })
        })
    }

    deleteCart(cartId: string) {
        return new Promise((resolve, reject) => {
            const request: DeleteCartRequest = {
                cartId: cartId
            }

            this.client.deleteCart(request, (err, _) => {
                if (err) {
                    if (err.code === grpc.status.INVALID_ARGUMENT) return reject('argumento')
                    if (err.code === grpc.status.ABORTED) return reject('argumento')
                }
                resolve('sucess')
            })
        })
    }

}