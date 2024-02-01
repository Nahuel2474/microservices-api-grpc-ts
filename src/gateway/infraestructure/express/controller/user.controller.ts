import { Request, Response } from "express";
import { UserGrpcClient } from "../../grpc/user.client";


export class userController {
    private grpcClient: UserGrpcClient = UserGrpcClient.getInstance()

    getUser  = async (req: Request, res: Response) => {
        try {
            const {userId} = req.params

            if(!userId) return

            const data = await this.grpcClient.getUser(userId);

            if(!data) return;
            
            return res.status(200).json(data)
        } catch (error) {
            console.error(error);
            return res.status(500).json(error)
        }
    }

    getAllUser = async (req: Request, res: Response) => {
        try {
            const datalist = await this.grpcClient.getAllUser();

            return res.status(200).json(datalist)
        } catch (error) {
            console.error(error);
            return res.status(500).json(error)
        }
    }


}