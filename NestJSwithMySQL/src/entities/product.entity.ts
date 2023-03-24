import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  prId: number;

  @Column()
  prName: string;

  @Column()
  prCost: string;

}
