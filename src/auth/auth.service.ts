import { Injectable } from '@nestjs/common/decorators';

import { genSalt, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { Environment } from '@shared/variables/environment';

import { DatabaseService } from '@shared/database/services/database.service';

import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService extends DatabaseService {
  async signUp(body: AuthDto) {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);

    const hashedPassword = await hash(body.password, salt);

    const user = await this.database.users.create({
      ...body,
      password: hashedPassword,
    });

    const token = await this.issueAccessToken(user.id);

    return { token, user };
  }

  // async signIn(body: AuthDto) {

  // }

  async issueAccessToken(userId: number) {
    const accessToken = await sign({ userId }, Environment.JWT_SECRET, {
      expiresIn: '7d',
    });
    return accessToken;
  }
}
