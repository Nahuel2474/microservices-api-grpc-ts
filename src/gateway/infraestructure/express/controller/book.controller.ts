import { Request, Response } from "express";
import { BookGrpcClient } from "../../grpc/book.client";

export class bookController {
  private grpcClient: BookGrpcClient;

  constructor() {
    this.grpcClient = BookGrpcClient.getInstance()
  }

  getBook = async (req: Request, res: Response) => {
    try {
      const { bookId } = req.params

      if (!bookId) {
        throw new Error('book id not ')
      }
      const data = await this.grpcClient.getBook(bookId)
      return res.status(200).json(data)

    } catch (error) {
      console.error(error);
      throw new Error('Error fetching book');
    }
  }



  getBooks = async (req: Request, res: Response) => {
    try {
      const response = await this.grpcClient.getBooks();
      return res.status(200).json(response)
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching books');
    }
  }


}