import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async addUser(@Body() data: Prisma.UserCreateInput) {
    this.userService.addUser(data);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: { id: Number },
    @Body() data: Prisma.UserUpdateInput,
  ) {
    this.userService.updateUser({ where: { id: Number(id) }, data });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: { id: Number }) {
    console.log(id);
    this.userService.deleteUser({ id: Number(id) });
  }

  @Get()
  async allUser() {
    return this.userService.allUser();
  }

  @Get('id')
  searchId(@Query('id') id: Number) {
    return this.userService.search({ where: { id: Number(id) } });
  }

  @Get('name')
  searchName(@Query('name') name: string) {
    return this.userService.search({ where: { name: { contains: name } } });
  }

  @Get('email')
  searchEmail(@Query('email') email: string) {
    return this.userService.search({ where: { email: { contains: email } } });
  }

  @Get('phone')
  searchPhone(@Query('phone') phone: string) {
    return this.userService.search({ where: { phone: { contains: phone } } });
  }
}
