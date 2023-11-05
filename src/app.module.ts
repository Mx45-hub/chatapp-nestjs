import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authentity } from './auth/auth.entity';

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
