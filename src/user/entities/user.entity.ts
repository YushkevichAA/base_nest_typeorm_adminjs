// import { BaseEntity } from './../../common/entities/base.entity';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string = v4();

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  constructor(name: string, description: string, email: string) {
    super();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
