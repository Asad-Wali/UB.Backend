/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column({ length: 5000 })
  Description: string;

  @Column()
  status: RoleStatus;

  @OneToMany(() => User, (users) => users.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  users: User[];
  // @OneToMany(() => User, (user) => user.id, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // User: User[];
}
export enum RoleStatus {
  Active = 1,
  Disabled = 0,
}
