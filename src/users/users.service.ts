import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authentity } from 'src/auth/Data/auth.entity';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(authentity) private readonly authrepo: Repository<authentity>,
  ) {}

  // Find a user by their username in the database
  async findUser(username: string): Promise<User | undefined> {
    try {
      return await this.authrepo.findOne({ where: { username } });
    } catch (error) {
      // Handle any potential errors, e.g., database errors
      throw new Error(`Error finding user by username: ${error.message}`);
    }
  }

  // Add a new user to the database
  async adduser(coffeeentitydto: authentity): Promise<authentity> {
    const user: authentity = new authentity();
    user.username = coffeeentitydto.username;
    user.password = coffeeentitydto.password;
    return this.authrepo.save(user);
  }
}
