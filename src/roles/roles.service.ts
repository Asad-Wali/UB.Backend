import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role, RoleStatus } from './roles.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleService: Repository<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    const { Title, Description } = createRoleDto;
    const role = {
      Title,
      Description,
      status: RoleStatus.Active,
    };
    this.roleService.save(role);
    return role;
  }

  findAll(): Promise<Role[]> {
    return this.roleService.find();
  }

  findOne(id: number): Promise<Role> {
    return this.roleService.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roleService.delete(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const findRole = await this.roleService.findOne(id);
    findRole.Title = updateRoleDto.Title;
    findRole.Description = updateRoleDto.Description;
    findRole.status = updateRoleDto.status;
    this.roleService.save(findRole);
    return findRole;
  }
}
