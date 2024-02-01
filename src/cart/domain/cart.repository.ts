import { Book, Cart } from "./types";



export interface CartRepositoryI {

    getCartById(cartId: string) : Promise<Cart | null>;
    getAllCarts() : Promise<Cart[] | []>;
    addProduct(product: Book, cartId:string): Promise<Cart | null>;
    deleteProduct(product: Book, cartId:string): Promise<Cart | null> ;
    getTotal(cart: Cart): number;
    calculateDiscount(cart: Cart): number;
    createCart(userId: string) : Promise<Cart | null>;
    deleteCart(cartId: string) : Promise<void>;

}