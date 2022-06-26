import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthV1Controller } from './auth-v1.controller';
import { AuthV1Service } from './auth-v1.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthV1Controller],
  providers: [AuthV1Service, LocalStrategy],
})
export class AuthV1Module {}
