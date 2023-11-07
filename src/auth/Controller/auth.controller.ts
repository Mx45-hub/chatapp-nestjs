import { Body, Controller, Post, HttpCode, HttpStatus, Get, Render, Req, Session, Res, Request } from '@nestjs/common';
import { AuthService } from '../Service/auth.service';
import * as session from 'express-session';
import { Socket } from 'socket.io';
import { setUserSocket } from 'src/App/Socket-Gateway/socketUtils';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @HttpCode(HttpStatus.OK)
  @Post('login') // post request to login into the the application
  async signIn(@Body() signInDto: Record<string, any> , @Session() session: Record<string, any>, @Req() request: Request, @Res() res, client: Socket) {
    //localStorage.setItem("bgcolor", "red");
    //sessionStorage.setItem("key", "value");
    try {
      await this.authService.signIn(signInDto.username, signInDto.password)

      session.userid = signInDto.username;
      const username = signInDto.username;
      const password = signInDto.password;







      return res.redirect('/chat');
    } catch {
        return res.redirect('/login');

    }

  }


  @Get('logout')
  @Render('logout')
  logout(@Session() session: Record<string, any>, @Req() req) {

  }




}
