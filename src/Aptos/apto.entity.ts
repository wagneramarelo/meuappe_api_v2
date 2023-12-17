import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  aptoNumber: string;

  @Column({ length: 255 })
  userId: string;

 
}