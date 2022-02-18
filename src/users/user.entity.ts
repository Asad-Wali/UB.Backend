/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/roles/entities/role.entity';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserStatus {
  Active = 1,
  Disabled = 0,
}
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  Name: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
  @Column({ default: UserStatus.Active })
  status: UserStatus;
}
