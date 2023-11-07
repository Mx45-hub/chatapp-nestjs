import { Controller, Get, Post, Render, Req, Res, Session, Body } from '@nestjs/common';
import { AppService } from '../App-Service/app.service';
import { Server, Socket } from 'socket.io';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Response } from 'express';
import Handlebars from "handlebars";
import { AuthGuard } from '@nestjs/passport';
import { authdto } from '../../auth/Data/authdto';
import { AuthService } from '../../auth/Service/auth.service';
import { UsersService } from '../../users/users.service';


@Controller()
export class AppController {

    constructor(private readonly appService: AppService,
        private readonly authService: AuthService,
        private readonly userService: UsersService,


        ) {}



    @Get('login')
    @Render('login')
    login() {
      return { message: 'Hello, User!' };
    }


    @Get('/')
    @Render('home')
    home() {
      return { message: 'Hello, EJS!' };
    }

    @Get('/chat')
    @Render('index')
    chat(@Session() session: Record<string, any>, @Req() req: Request, @Res() res: Response) {
        let myname = session.userid

      if (myname == null) {
        return res.redirect('login');
      } else {
        const name = session.userid;
        return { name: name };
      }
    }

  @Get('register')
  @Render('register')
  async addcoffee( @Res() res){

  }


  @Post('add')
  async create(@Body() authdto: authdto,  @Res() res) {

    try {

        this.userService.adduser(authdto)

      return res.redirect('/');
    } catch (error) {
      // Handle errors here
      console.error('Error loggin in', error);


    }


  }
}
