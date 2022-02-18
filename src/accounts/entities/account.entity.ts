/* eslint-disable prettier/prettier */
import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// import { Employee } from '../../employees/entities/employee.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Title: string;

  @Column({ length: 5000 })
  Description: string;

  @OneToMany(() => Employee, (employee) => employee.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  employee: Employee[];
}
