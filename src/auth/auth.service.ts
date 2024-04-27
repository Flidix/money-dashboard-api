import { sign } from 'jsonwebtoken';

import { Environment } from '@shared/variables/environment';

import { DatabaseService } from '@shared/database/services/database.service';


import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class AuthService extends DatabaseService {

  async issueAccessToken(userId: number, userEmail: string) {
    const refreshToken = await sign({ userId, email: userEmail }, Environment.JWT_SECRET, {
      expiresIn: '1h',
    });

    const accessToken = await sign({ userId }, Environment.JWT_SECRET, {
      expiresIn: '7d',
    });
    return { refreshToken, accessToken };
  }
}
