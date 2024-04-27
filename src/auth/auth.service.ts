import { sign } from 'jsonwebtoken';
import { Environment } from '@shared/variables/environment';
import { DatabaseService } from '@shared/database/services/database.service';
import { Injectable } from '@nestjs/common/decorators';
import { AuthDto } from './dto/auth.dto';
import { genSalt, hash } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService extends DatabaseService {

  async singnUp(body: AuthDto) {

    const saltRounds = 10;
    const salt = await genSalt(saltRounds);

    const hashedPassword = await hash(body.password, salt);

    const user = await this.database.users.create({
      ...body,
      password: hashedPassword,
    });

    const payload = { id: user.id };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '15h',
    });

    return { token: accessToken, user };

  }

  // async signIn(body: AuthDto) {

  // }

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
