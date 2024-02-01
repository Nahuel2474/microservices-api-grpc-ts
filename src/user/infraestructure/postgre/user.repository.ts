import { User } from "../../domain/types";
import { UserRepositoryI } from "../../domain/user.repository";
import DatabaseAdapter from "../database.adapter";

export class PostgreDBRepository implements UserRepositoryI {

    static instance: PostgreDBRepository;
    private client = DatabaseAdapter.getInstance().client;

    private constructor() { }

    static getInstance(): PostgreDBRepository {
        if (!PostgreDBRepository.instance) {
            PostgreDBRepository.instance = new PostgreDBRepository()
        }
        return PostgreDBRepository.instance
    }


    async getUser(userId: string): Promise<User | null> {
        try {
            const user = await this.client.user.findUnique({
                where: {
                    id: userId
                },
                include: {
                    address: true,
                    session: true,
                }
            });

            if (!user) return null


            return user;
        } catch (error) {
            throw new Error('Error fetching user');
        }
    }

    async getAllUser(): Promise<User[]> {
        try {
            const users = await this.client.user.findMany({
                include: {
                    address: true,
                    session: true,
                }
            });

            return users;
        } catch (error) {
            console.error(error)
            throw new Error('internal error')
        }
    }

}