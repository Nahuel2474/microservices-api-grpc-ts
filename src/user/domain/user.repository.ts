import { User } from "./types";



export interface UserRepositoryI {

    getUser(userId: string): Promise<User | null>;
    getAllUser(): Promise<User[]>;

}