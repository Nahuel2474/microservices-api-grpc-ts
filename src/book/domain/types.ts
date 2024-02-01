export type Book = {
  name: string;
  rating: string;
  desc: string;
  author: string;
  pages: string;
  publicationDate: string;
  image: string;
  price: number;
  offer: Offer;
  genres: string[];
  stock: number;
}

type Offer = {
  isOffer: boolean;
  discount: number;
  discountPrice: number;
}