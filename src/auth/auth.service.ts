import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';

import { compare, genSalt, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { Environment } from '@shared/variables/environment';

import { DatabaseService } from '@shared/database/services/database.service';

import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService extends DatabaseService {
  async signUp(body: AuthDto) {
    // await this.database.users.checkNotExists({ email: body.email });
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

  async signIn(body: AuthDto) {
    const user = await this.database.users.findOneOrFail({ where: { email: body.email } });

    const isValidPassword = await compare(body.password, user.password);

    if (!isValidPassword) throw new BadRequestException('Invalid password');

    const token = await this.issueAccessToken(user.id);

    return { token: token, user };
  }

  async issueAccessToken(userId: number) {
    const accessToken = await sign({ userId }, Environment.JWT_SECRET, {
      expiresIn: '7d',
    });
    return accessToken;
  }
}
