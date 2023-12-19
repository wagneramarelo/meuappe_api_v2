import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 45 })
  password: string;
  
  @Column({ length: 45 })
  cpf: string;

  @Column({ length: 45 })
  phone: string;
}