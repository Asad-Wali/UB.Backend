/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private userRolesService: RolesService) {

  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      let user = new User();
      user = Object.assign(user, createUserDto);
      const Role = await this.userRolesService.findOne(createUserDto.role);
      console.log(Role)
      user.role = Role;
      await User.save(user);
      delete user.password;
      return user;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }
  async findByEmail(email: string): Promise<User> {
    return await User.findOne({
      email: email,
    }, { relations: ["role"] });
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
