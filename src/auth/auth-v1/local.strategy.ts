import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthV1Service } from './auth-v1.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authV1Service: AuthV1Service) {
    super({
      usernameField: 'name',
      passwordField: 'password',
      passReqToCallback: false,
    });
  }

  async validate(name: string, password: string): Promise<any> {
    const user = await this.authV1Service.validateUser(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
