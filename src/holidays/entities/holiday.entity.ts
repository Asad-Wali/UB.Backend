import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Holiday {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Title: string;

  @Column({ type: 'datetime' })
  Date: Date;

  @Column()
  status: HolidayStatus;
}

export enum HolidayStatus {
  Normal = 0,
  Public = 1,
  Other = 2,
}
