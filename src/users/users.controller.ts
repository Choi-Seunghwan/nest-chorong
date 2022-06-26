import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/')
  @HttpCode(204)
  create(@Body() name: string): CreateUserDto {
    const createdUser: User = this.userService.createUser(name);

    return { name: createdUser.name };
  }

  @Get('/')
  getOne() {
    return 'user';
  }
}
