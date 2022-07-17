import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthV1Module } from './auth/auth-v1/auth-v1.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { DummyModule } from './dummy/dummy.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    DatabaseModule,
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
