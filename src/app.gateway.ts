import { Logger, Req, Session } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ClientSession, ServerSession } from 'typeorm';


@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private wss: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconncted: ${client.id}`);
  }

  handleConnection(client: Socket, @Session() session: Record<string, any>,...args: any[]) {
    this.logger.log(`Client Connected: ${client.id}`);
    console.log("handle connection session");
    console.log(session);

  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string,  @Req() request: Request): void {


    this.wss.emit('msgToClient', text);
  }
}
