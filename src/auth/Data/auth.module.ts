// Import necessary modules and dependencies
import { Module } from '@nestjs/common';
import { AuthService } from '../Service/auth.service';
import { AuthController } from '../Controller/auth.controller';
import { UsersModule } from '../../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authentity } from './auth.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  // Define the module and its dependencies
  imports: [
    // TypeORM module for PostgreSQL database connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cjpdq6m1208c739urjd0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'projectsdb_9pg7_user',
      password: 'eQOsaclB6IcWOJePlPOE9sy45llfxY4e',
      database: 'projectsdb_9pg7',
      entities: [authentity], // Define the entities for TypeORM
      synchronize: true, // Synchronize the database schema (only for development)
      logging: true, // Enable database query logging for debugging
      ssl: true, // Enable SSL for secure database connection
      autoLoadEntities: true, // Automatically load entity classes
    }),
    // TypeORM module for managing entities related to the authentity
    TypeOrmModule.forFeature([authentity]),
  ],
  providers: [AuthService, UsersService], // Define the service providers
  controllers: [AuthController], // Define the controllers
})
export class AuthModule {}
