/* eslint-disable prettier/prettier */
import { Account } from 'src/accounts/entities/account.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Designation } from 'src/designations/entities/designation.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, (department) => department.id)
  department: Department;

  @ManyToOne(() => Designation, (designation) => designation.id)
  designation: Designation;

  @ManyToOne(() => Account, (account) => account.id)
  account: Account;

  @Column()
  First_name: string;

  @Column()
  Last_name: string;

  @Column()
  Father_name: string;

  @Column({ length: 50 })
  Address_line_1: string;

  @Column({ length: 50 })
  Address_line_2: string;

  @Column()
  City: string;

  @Column()
  Province: string;

  @Column()
  Dob: Date;

  @Column()
  Gender: string;

  @Column()
  Id_card_number: string;

  @Column()
  Phone_1: string;

  @Column()
  Phone_2: string;

  @Column()
  Joining_date: Date;

  @Column()
  Last_salary: number;

  @Column()
  Current_salary: number;

  @Column()
  MachineID: string;

  @Column()
  Picture: string;
}
