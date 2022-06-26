import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthV1Service {
  constructor(private usersService: UsersService) {}

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(name);

    if (user?.password !== password) {
      return null;
    }

    const { password: pass, ...result } = user;
    return result;
  }
}
