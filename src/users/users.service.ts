import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: Array<User> = [];

  createUser(name: string): User {
    const user = new User();
    user.name = name;

    this.users.push(user);

    return user;
  }

  findOne(name: string): User {
    let u = null;
    for (const user of this.users) {
      if (user.name === name) {
        u = user;
        break;
      }
    }

    return u;
  }
}
