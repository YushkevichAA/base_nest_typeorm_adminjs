import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string = v4();

  @Column()
  name: string;

  @Column()
  role: string;
}
