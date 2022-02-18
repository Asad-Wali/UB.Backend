/* eslint-disable prettier/prettier */
import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

//import { Employee } from '../../employees/entities/employee.entity';

@Entity()
export class Designation {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Title: string;

  @Column({ length: 5000 })
  Description: string;

  @OneToMany(() => Employee, (employees) => employees.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  employees: Employee[];
}
