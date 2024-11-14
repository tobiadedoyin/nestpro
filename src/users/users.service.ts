import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getSome(): number {
    return 309;
  }
}
