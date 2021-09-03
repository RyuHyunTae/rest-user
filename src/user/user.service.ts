import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async addUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      where,
      data,
    });
  }

  async allUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async search(query: { where?: Prisma.UserWhereInput }): Promise<User[]> {
    const { where } = query;
    return this.prisma.user.findMany({
      where,
    });
  }

  async searchId(query: { where?: Prisma.UserWhereInput }): Promise<User> {
    const { where } = query;
    return this.prisma.user.findUnique({
      where: { id: Number(where.id) },
    });
  }
}
