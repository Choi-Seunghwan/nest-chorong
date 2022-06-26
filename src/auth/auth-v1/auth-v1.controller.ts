import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller({ path: '' })
export class AuthV1Controller {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    return 'ok';
  }

  @Get('/')
  get() {
    return 'auth V1';
  }
}
