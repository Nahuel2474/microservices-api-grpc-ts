export type Cart = {
    id: string;
    userId: string;
    books_in_cart: Book[];
    createdAt: Date;
    updatedAt: Date;
};

export type Book = {
    id? : number;
    cartId: string;
    name: string;
    price: number;
    is_offer: boolean;
    discount: number;
    discount_price: number;
    quantity: number
}