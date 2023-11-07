import { Module } from '@nestjs/common';

import { AppGateway } from '../Socket-Gateway/app.gateway';
import { AuthService } from '../../auth/Service/auth.service';
import { UsersService } from '../../users/users.service';
import { AppController } from '../App-Controller/app.controller';
import { AuthController } from '../../auth/Controller/auth.controller';
import { AuthModule } from '../../auth/Data/auth.module';
import { UsersModule } from '../../users/users.module';
import { AppService } from '../App-Service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authentity } from '../../auth/Data/auth.entity';

@Module({
  imports: [AuthModule, UsersModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-cjpdq6m1208c739urjd0-a.oregon-postgres.render.com',
    port: 5432,
    username: 'projectsdb_9pg7_user',
    password: 'eQOsaclB6IcWOJePlPOE9sy45llfxY4e',
    database: 'projectsdb_9pg7',
    entities: [authentity ],
    synchronize: true,
    logging: true,
    ssl: true,
    autoLoadEntities: true,
  }),
  TypeOrmModule.forFeature([authentity])],
  controllers: [AppController, AuthController],
  providers: [AppGateway,AuthService,UsersService, AppService],
})
export class AppModule {}
