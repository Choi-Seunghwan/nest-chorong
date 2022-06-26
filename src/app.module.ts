import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthV1Module } from './auth/auth-v1/auth-v1.module';
import { AuthModule } from './auth/auth.module';
import { DummyModule } from './dummy/dummy.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    DummyModule,
    UsersModule,
    AuthV1Module,
    RouterModule.register([
      {
        path: 'auth',
        module: AuthModule,
        children: [{ path: 'v1', module: AuthV1Module }],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
