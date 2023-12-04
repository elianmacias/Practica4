import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World con workflow de github actions version major deploy final test asas!';
  }
}
