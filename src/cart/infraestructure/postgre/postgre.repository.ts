import { CartRepositoryI } from "../../domain/cart.repository";
import { Book, Cart } from "../../domain/types";
import DatabaseAdapter from "../database.adapter";


export class PostgreDBRepository implements CartRepositoryI {



    private client = DatabaseAdapter.getInstance().client
    static instance: PostgreDBRepository;

    constructor() { }

    static getInstance(): PostgreDBRepository {
        if (!PostgreDBRepository.instance) {
            PostgreDBRepository.instance = new PostgreDBRepository()
        }

        return PostgreDBRepository.instance;
    }

    async getCartById(cartId: string): Promise<Cart | null> {
        try {
            const cart = await this.client.cart.findUnique({
                where: {
                    id: cartId,
                }, include: {
                    books_in_cart: true
                }
            })

            if (!cart) {
                throw new Error('cart not found');
            }

            return cart;
        } catch (error) {
            throw new Error('product id not served')
        }

    }

    async getAllCarts(): Promise<Cart[] | []> {
        try {
            const carts = await this.client.cart.findMany({ include: { books_in_cart: true } });

            return carts;

        } catch (error) {
            console.error('Error fetching  cart:', error);
            throw new Error('Error fetching  cart:');
        }
    }

    async addProduct(product: Book, cartId: string): Promise<Cart | null> {
        try {
            const existingCart = await this.client.cart.findUnique({ where: { id: cartId }, include: { books_in_cart: true } });

            if (!existingCart) {
                throw new Error('Cart not found');
            }

            // Verificar si el producto ya está en el carrito
            const existingProduct = existingCart.books_in_cart.find((item) => item.name === product.name);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                // Si el producto no está en el carrito, agrégalo
                existingCart.books_in_cart.push(existingProduct!);
            }

            // Actualizar el carrito con los cambios
            const updatedCart = await this.client.cart.update({
                where: { id: cartId },
                data: { books_in_cart: { set: existingProduct } },
                include: { books_in_cart: true },
            });

            return updatedCart;

        } catch (error) {
            console.error('Error adding product from cart:', error);
            throw new Error('Error adding product from cart');
        }
    }

    async deleteProduct(product: Book, cartId: string): Promise<Cart | null> {
        try {
            const cart = await this.getCartById(cartId);
    
            if (!cart) return null;
    
            const findProductInCart = cart?.books_in_cart.find((book) => book.id === product.id);
    
            if (!findProductInCart) return null;
    
            const cartUniqueId = cart.id;
            const productUniqueId = findProductInCart.id;
    
            const updatedCart = await this.client.cart.update({
                where: {
                    id: cartUniqueId,
                },
                data: {
                    books_in_cart: {
                        disconnect: {
                            id: productUniqueId,
                        },
                    },
                },
                include: {
                    books_in_cart: true,
                },
            });
    
            return updatedCart;
        } catch (error) {
            console.error('Error deleting product from cart:', error);
            throw new Error('Error deleting product from cart');
        }
    }
    

    getTotal(cart: Cart): number {
        try {
            const total = cart.books_in_cart.reduce((acc, book) => acc + book.price * book.quantity, 0);

            return total
        } catch (error) {
            throw new Error('error calculating total...')
        }
    }

    calculateDiscount(cart: Cart): number {
        try {
            const total = cart.books_in_cart.reduce((acc, book) => acc + book.discount_price * book.quantity, 0);

            return total
        } catch (error) {
            throw new Error('Error calculating discounts...')
        }
    }

    async createCart(userId: string): Promise<Cart | null> {
        try {
            const existCart = await this.client.cart.findFirst({
                where: {
                    userId: userId
                }
            })


            if (existCart) return null

            const cart = await this.client.cart.create({
                include: { books_in_cart: true },
                data:
                {
                    id: crypto.randomUUID(),
                    userId: userId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })

            return cart
        } catch (error) {
            throw new Error('Error in create cart')
        }
    }

    async deleteCart(cartId: string): Promise<void> {
        try {
            // Busca el carrito con el ID proporcionado
            const cart = await this.client.cart.findUnique({
                where: {
                    id: cartId
                }
            });
    
            if (!cart) {
                // Si el carrito no se encuentra, lanza un error
                throw new Error('Cart not found');
            }
    
            // Elimina el carrito
            await this.client.cart.delete({
                where: {
                    id: cartId
                }
            });
    
            // La eliminación fue exitosa, devuelve una promesa resuelta
            return Promise.resolve();
        } catch (error) {
            console.error('Error deleting cart:', error);
            throw new Error('Internal server error');
        }
    }

}