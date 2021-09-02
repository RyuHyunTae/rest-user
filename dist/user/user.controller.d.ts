import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addUser(data: Prisma.UserCreateInput): Promise<void>;
    updateUser(id: {
        id: Number;
    }, data: Prisma.UserUpdateInput): Promise<void>;
    deleteUser(id: {
        id: Number;
    }): Promise<void>;
    allUser(): Promise<User[]>;
    searchId(id: Number): Promise<User[]>;
    searchName(name: string): Promise<User[]>;
    searchEmail(email: string): Promise<User[]>;
    searchPhone(phone: string): Promise<User[]>;
}
