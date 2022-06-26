import { Controller, Get } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  @Get('/')
  getOne() {
    return 'get dummy';
  }
}
