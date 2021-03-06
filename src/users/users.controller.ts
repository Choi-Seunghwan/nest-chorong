import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/')
  @HttpCode(204)
  async create(@Body() userDto: UserDto) {
    const createdUser = await this.userService.createUser(userDto);
    console.log(createdUser);
    // return createdUser;
  }

  @Get('/all')
  async findAll(): Promise<UserDto[] | void> {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('/')
  async findOne(@Query() id: number): Promise<UserDto | void> {
    const user = await this.userService.findOne(id);
    return user;
  }
}
