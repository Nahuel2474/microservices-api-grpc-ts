import * as grpc from '@grpc/grpc-js';
import { AddProductRequest__Output } from "../domain/grpc/cart_package/AddProductRequest";
import { Cart } from "../domain/grpc/cart_package/Cart";
import { CartList } from "../domain/grpc/cart_package/CartList";
import { CartServiceHandlers } from "../domain/grpc/cart_package/CartService";
import { CartTotalResponse } from "../domain/grpc/cart_package/CartTotalResponse";
import { CreateCartRequest__Output } from "../domain/grpc/cart_package/CreateCartRequest";
import { DeleteCartRequest__Output } from "../domain/grpc/cart_package/DeleteCartRequest";
import { DeleteProductRequest__Output } from "../domain/grpc/cart_package/DeleteProductRequest";
import { Empty, Empty__Output } from "../domain/grpc/cart_package/Empty";
import { GetCartRequest__Output } from "../domain/grpc/cart_package/GetCartRequest";
import { Book } from '../domain/types';
import { PostgreDBRepository } from "../infraestructure/postgre/postgre.repository";

export class CartService implements CartServiceHandlers {
    [name: string]: grpc.UntypedHandleCall;


    async AddProductToCart(call: grpc.ServerUnaryCall<AddProductRequest__Output, Cart>, callback: grpc.sendUnaryData<Cart>): Promise<void | null> {
        try {
            const { product, cartId } = call.request;

            if (!product || !cartId) {
                const errorMessage = 'Invalid or missing properties in the request.';
                console.error(errorMessage);

                callback({
                    code: grpc.status.INVALID_ARGUMENT,
                    details: errorMessage,
                });
                return null;
            }

            const cartAdapter: Book = {
                cartId: cartId,
                name: product.name,
                price: product.price,
                quantity: 1,
                discount: product.offer?.discount ?? 0,
                is_offer: product.offer?.isOffer ?? false,
                discount_price: product.offer?.discountPrice ?? product.price,
            };

            const cart = await PostgreDBRepository.getInstance().addProduct(cartAdapter, cartId);

            if (!cart) {
                callback({
                    code: grpc.status.ABORTED,
                    details: 'cart is null',
                });
                throw new Error('Error while fetching cart: Cart is null.');
            }

            return callback(null, cart)
        } catch (error) {
            console.error('Error while processing AddProductToCart:', error);
            callback({
                code: grpc.status.INTERNAL,
                details: 'Internal server error.',
            });
            return null;
        }
    }

    async DeleteProductFromCart(call: grpc.ServerUnaryCall<DeleteProductRequest__Output, Cart>, callback: grpc.sendUnaryData<Cart>): Promise<void | null> {
        try {
            const { cartId, product } = call.request;

            if (!cartId || !product) {
                const errorMessage = 'Invalid or missing properties in the request.';
                console.error(errorMessage);

                callback({
                    code: grpc.status.INVALID_ARGUMENT,
                    details: errorMessage,
                });
                return null;
            }

            const cartAdapter: Book = {
                cartId: cartId,
                name: product.name,
                price: product.price,
                quantity: 1,
                discount: product.offer?.discount ?? 0,
                is_offer: product.offer?.isOffer ?? false,
                discount_price: product.offer?.discountPrice ?? product.price,
            };

            // Realiza cualquier lógica adicional necesaria antes de la eliminación

            const cart = await PostgreDBRepository.getInstance().deleteProduct(cartAdapter, cartId);

            if (!cart) {
                callback({ code: grpc.status.ABORTED })
                return null
            }


            // Devuelve una respuesta exitosa al cliente
            callback(null, cart);
        } catch (error) {
            console.error('Error while processing DeleteProductFromCart:', error);
            callback({
                code: grpc.status.INTERNAL,
                details: 'Internal server error.',
            });
            return null
        }
    }


    async CreateCart(call: grpc.ServerUnaryCall<CreateCartRequest__Output, Cart>, callback: grpc.sendUnaryData<Cart>): Promise<void> {
        const { userId } = call.request;

        if (!userId) return callback({ code: grpc.status.INVALID_ARGUMENT })

        try {
            const newCart = await PostgreDBRepository.getInstance().createCart(userId);

            if (!newCart) return callback({ code: grpc.status.ALREADY_EXISTS })

            callback(null, newCart)
        } catch (error) {
            callback({
                code: grpc.status.INTERNAL
            })
        }
    }

    async DeleteCart(call: grpc.ServerUnaryCall<DeleteCartRequest__Output, Empty>, callback: grpc.sendUnaryData<Empty>): Promise<void> {
        const { cartId } = call.request

        if (!cartId) return callback({ code: grpc.status.INVALID_ARGUMENT })

        try {
            await PostgreDBRepository.getInstance().deleteCart(cartId);

            callback(null, { status: 'OK', message: 'Cart Deleted successfully' })
        } catch (error) {
            callback({
                code: grpc.status.INTERNAL
            })
        }
    }


    async GetAllCarts(call: grpc.ServerUnaryCall<Empty__Output, CartList>, callback: grpc.sendUnaryData<CartList>): Promise<void> {

        try {
            const carts = await PostgreDBRepository.getInstance().getAllCarts();

            if (!carts) {
                return callback({ code: grpc.status.ABORTED })
            }

            const cartListResponse = {
                carts: carts
            };

            callback(null, cartListResponse);
        } catch (error) {
            const errorMessage = 'Invalid request'
            return callback({
                code: grpc.status.ABORTED,
                details: errorMessage
            })
        }
    }

    async GetCart(call: grpc.ServerUnaryCall<GetCartRequest__Output, Cart>, callback: grpc.sendUnaryData<Cart>): Promise<void> {
        const { cartId } = call.request;

        if (!cartId) {
            callback({
                code: grpc.status.INVALID_ARGUMENT
            })
        }

        try {
            const cart = await PostgreDBRepository.getInstance().getCartById(cartId);

            if (!cart) return callback({ code: grpc.status.NOT_FOUND })

            callback(null, cart)
        } catch (error) {
            callback({
                code: grpc.status.INTERNAL
            })
        }
    }

    async GetCartTotal(call: grpc.ServerUnaryCall<GetCartRequest__Output, CartTotalResponse>, callback: grpc.sendUnaryData<CartTotalResponse>): Promise<void | null> {
        const { cartId } = call.request

        if (!cartId) callback({ code: grpc.status.INVALID_ARGUMENT })

        const cart = await PostgreDBRepository.getInstance().getCartById(cartId)

        if (!cart) return null;

        try {
            const getTotal = PostgreDBRepository.getInstance().getTotal(cart)
            const getDiscount = PostgreDBRepository.getInstance().calculateDiscount(cart);

            const finalCheck = {
                total: getTotal,
                discountPrice: getDiscount,
            }

            callback(null, finalCheck)
        } catch (error) {
            callback({ code: grpc.status.INTERNAL })
            return null
        }
    }
}
