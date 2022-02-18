/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const currentEntity = Object.assign(new User(), createUserDto);
    await User.save(currentEntity);
    delete currentEntity.password;
    return currentEntity;
  }
  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async findById(id: number) {
    return await User.findOne(id);
  }

  find(): Promise<User[]> {
    return User.find();
    // hbhbhmnb
  }

  remove(id: number) {
    return User.delete(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);
    Object.assign(user, updateUserDto);
    return User.save(user);
  }
}
