import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    addUser(data: Prisma.UserCreateInput): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    allUser(): Promise<User[]>;
    search(query: {
        where?: Prisma.UserWhereInput;
    }): Promise<User[]>;
}
