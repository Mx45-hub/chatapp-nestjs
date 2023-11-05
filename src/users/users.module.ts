import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { authentity } from 'src/auth/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'dpg-cjpdq6m1208c739urjd0-a.oregon-postgres.render.com',
        port: 5432,
        username: 'projectsdb_9pg7_user',
        password: 'eQOsaclB6IcWOJePlPOE9sy45llfxY4e',
        database: 'projectsdb_9pg7',
        entities: [authentity],
        synchronize: true,
        logging: true,
        ssl: true,
        autoLoadEntities: true,
      }),
      TypeOrmModule.forFeature([authentity])],
    providers: [UsersService],
    exports: [UsersService],
  })
  export class UsersModule {}
