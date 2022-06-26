import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthV1Module } from './auth-v1/auth-v1.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthV1Module],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
