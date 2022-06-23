import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [AuthModule, DummyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
