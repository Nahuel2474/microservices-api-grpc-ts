import { PrismaClient as PrismaClientGenerated } from '@prisma/cart';

class DatabaseAdapter {
    private static instance: DatabaseAdapter;
    private prisma: PrismaClientGenerated;

    private constructor() {
        this.prisma = new PrismaClientGenerated();
    }

    public static getInstance(): DatabaseAdapter {
        if (!DatabaseAdapter.instance) {
            DatabaseAdapter.instance = new DatabaseAdapter();
        }

        return DatabaseAdapter.instance;
    }

    public async connect(): Promise<void> {
        await this.prisma.$connect().then(() => console.log('db connected'));
    }

    public async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }

    public get client(): PrismaClientGenerated {
        return this.prisma;
    }
}

export default DatabaseAdapter;