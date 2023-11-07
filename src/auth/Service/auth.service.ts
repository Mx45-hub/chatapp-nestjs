import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }


  async signIn(username: string, pass: string): Promise<any> {

    const user = await this.usersService.findUser(username);


    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }


    const { password, ...result } = user;
    return result;
  }
}
